<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    protected $common;

    public function __construct()
    {
        $this->middleware('permission:manage-user|create-user|edit-user|destroy-user', ['only' => ['index','store']]);
        $this->middleware('permission:create-user', ['only' => ['create','store']]);
        $this->middleware('permission:edit-user', ['only' => ['edit','update']]);
        $this->middleware('permission:impersonate-user', ['only' => ['impersonate']]);
        $this->middleware('permission:destroy-user', ['only' => ['destroy']]);

        //Define common page titles, route name and view directory
        $this->common = [
            'index_title' => 'common.manage_users',
            'create_title' => 'common.create_user',
            'edit_title' => 'common.edit_user',
            'route' => 'admin.users',
            'view' => 'users',
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
            'roles' => Role::where('guard_name', '!=', 'admin')->pluck('name','name')->all(),
        ]); */
        return view('admin');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  UserRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        $user = User::create($request->all());

        if($request->filled('roles')) {
            $user->assignRole($request->input('roles'));
        }

        return redirect()->route($this->common['route_index'])->withSuccess(__('common.item_created_success', ['item' => __('common.user')]));
    }

    /**
     * @param User $user
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function edit(User $user)
    {
        /* return view($this->common['view_form'])->with([
            'page_title' => $this->common['edit_title'],
            'breadcrumbs' => $this->common['breadcrumbs'],
            'form_params' => [
                'action_url' => route($this->common['route_update'], $user->id),
                'method' => 'put',
                'button_name' => __('common.update'),
            ],
            'item' => $user,
            'roles' => Role::where('guard_name', '!=', 'admin')->pluck('name','name')->all(),
            'user_roles' => $user->roles->pluck('name','name')->all(),
        ]); */
        return view('admin');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  UserRequest  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UserRequest $request, User $user)
    {
        if($request->filled('password')){
            $fields = $request->all();
        }else {
            $fields = $request->except('password');
        }
        if($request->filled('reset_2fa')){
            $user->forceFill([
                'two_factor_method' => 'none',
                'two_factor_secret' => null,
                'two_factor_recovery_codes' => null,
            ]);
        }

        if($request->filled('roles')) {
            $user->syncRoles($request->input('roles'));
        }

        $user->update($fields);

        return redirect()->route($this->common['route_index'])->withSuccess(__('common.item_updated_success', ['item' => __('common.user')]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->route($this->common['route_index'])->withSuccess(__('common.item_destroyed_success', ['item' => __('common.user')]));
    }

    /**
     * @param User $user
     * @return mixed
     */
    public function impersonate(User $user)
    {
        Auth::guard('admin')->user()->impersonate($user, 'web');

        return redirect()->route('index')->withSuccess(__('common.impersonating'));
    }

    public function fetchUser()
    {
        $users = User::join('model_has_roles','model_has_roles.model_id','=','users.id')->join('roles','roles.id','=','model_has_roles.role_id')->where('model_has_roles.model_type','like','%\User%')->select('users.*','roles.name as role_name')->get();
        return response()->json($users);
    }
    public function fetchUsr($id)
    {
        $user = User::find($id);
        
        // $data['user_role'] = $user;
        return response()->json($user);

    }

    
}
