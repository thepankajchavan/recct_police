<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Http\Requests\Admin\AdminRequest;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;

class AdminController extends Controller
{
    public array $common;

    public function __construct()
    {
        // Set permissions
        $this->middleware('permission:manage-admin|create-admin|edit-admin|destroy-admin', ['only' => ['index','store']]);
        $this->middleware('permission:create-admin', ['only' => ['create','store']]);
        $this->middleware('permission:edit-admin', ['only' => ['edit','update']]);
        $this->middleware('permission:impersonate-admin', ['only' => ['impersonate']]);
        $this->middleware('permission:destroy-admin', ['only' => ['destroy']]);

        //Define common page titles, route name and view directory
        $this->common = [
            'index_title' => 'common.manage_admins',
            'create_title' => 'common.create_admin',
            'edit_title' => 'common.edit_admin',
            'route' => 'admin.admins',
            'view' => 'admins',
        ];
        //Define route names
        $this->common['route_index'] = $this->common['route'] . '.index';
        $this->common['route_create'] = $this->common['route'] . '.create';
        $this->common['route_store'] = $this->common['route'] . '.store';
        $this->common['route_edit'] = $this->common['route'] . '.edit';
        $this->common['route_update'] = $this->common['route'] . '.update';
        $this->common['route_delete'] = $this->common['route'] . '.destroy';
        //Define views path
        $this->common['view_index'] = 'admin::' . $this->common['view'] . '.index';
        $this->common['view_form'] = 'admin::' . $this->common['view'] . '.form';
        //Breadcrumb
        $this->common['breadcrumbs'] = [
            [
                'route' => route($this->common['route_index']),
                'name' => $this->common['index_title']
            ]
        ];
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        // return view($this->common['view_index'])->with(['page_title' => $this->common['index_title']]);
        return view('admin');
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function create()
    {
        /* return view($this->common['view_form'])->with([
            'page_title' => $this->common['create_title'],
            'breadcrumbs' => $this->common['breadcrumbs'],
            'form_params' => [
                'action_url' => route($this->common['route_store']),
                'method' => 'post',
                'button_name' => __('common.create'),
            ],
            'roles' => Role::pluck('name','name')->all(),
        ]); */
        return view('admin');
    }

    /**
     * @param AdminRequest $request
     * @return mixed
     */
    public function store(AdminRequest $request)
    {
        $admin = Admin::create($request->all());
        $admin->assignRole($request->input('roles'));

        return redirect()->route($this->common['route_index'])->withSuccess(__('common.item_created_success', ['item' => __('common.admin')]));
    }

    /**
     * @param Admin $admin
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function edit(Admin $admin)
    {
        /* return view($this->common['view_form'])->with([
            'page_title' => $this->common['edit_title'],
            'breadcrumbs' => $this->common['breadcrumbs'],
            'form_params' => [
                'action_url' => route($this->common['route_update'], $admin->id),
                'method' => 'put',
                'button_name' => __('common.update'),
            ],
            'item' => $admin,
            'roles' => Role::pluck('name','name')->all(),
            'user_roles' => $admin->roles->pluck('name','name')->all(),
        ]); */
        return view('admin');
    }

    /**
     * @param AdminRequest $request
     * @param Admin $admin
     * @return mixed
     */
    public function update(AdminRequest $request, Admin $admin)
    {
        $admin->syncRoles($request->input('roles'));

        if($request->filled('password')){
            $fields = $request->all();
        }else {
            $fields = $request->except('password');
        }
        if($request->filled('reset_2fa')){
            $admin->forceFill([
                'two_factor_method' => 'none',
                'two_factor_secret' => null,
                'two_factor_recovery_codes' => null,
            ]);
        }

        $admin->update($fields);

        return redirect()->route($this->common['route_index'])->withSuccess(__('common.item_updated_success', ['item' => __('common.admin')]));
    }

    /**
     * @param Admin $admin
     * @return mixed
     */
    public function destroy(Admin $admin)
    {
        $admin->delete();

        return redirect()->route($this->common['route_index'])->withSuccess(__('common.item_destroyed_success', ['item' => __('common.admin')]));
    }

    /**
     * @param Admin $admin
     * @return mixed
     */
    public function impersonate(Admin $admin)
    {
        if ($admin->id === auth('admin')->user()->id) {
            return redirect()->route($this->common['route_index'])->withError(__('common.impersonate_yourself'));
        }
        Auth::guard('admin')->user()->impersonate($admin, 'admin');

        return redirect()->route('admin.index')->withSuccess(__('common.impersonating'));
    }

    /**
     * @return mixed
     */
    public function impersonateStop()
    {
        Auth::guard('admin')->user()->leaveImpersonation();

        return redirect()->back()->withSuccess(__('common.impersonate_leave'));
    }

    public function fetchAdmins()
    {
        $admins = Admin::join('model_has_roles','model_has_roles.model_id','=','admins.id')->join('roles','roles.id','=','model_has_roles.role_id')->where('model_has_roles.model_type','like','%\Admin%')->select('admins.*','roles.name as role_name')->get();
        // $admins = Admin::with('roles');
        return response()->json($admins);
    }

    public function fetchAdmin($id)
    {
        $admin = Admin::find($id);
        $admin['roles']=$admin->roles->pluck('name','name')->all();
        return response()->json($admin);
    }
}
