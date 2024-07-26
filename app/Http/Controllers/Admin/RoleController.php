<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleController extends Controller
{
    protected $common;

    public function __construct(Role $role)
    {
        // Set permissions
        $this->middleware('permission:manage-role|create-role|edit-role|destroy-role', ['only' => ['index','store']]);
        $this->middleware('permission:create-role', ['only' => ['create','store']]);
        $this->middleware('permission:edit-role', ['only' => ['edit','update']]);
        $this->middleware('permission:destroy-role', ['only' => ['destroy']]);

        //Define common page titles, route name and view directory
        $this->common = [
            'index_title' => 'common.manage_roles',
            'create_title' => 'common.create_role',
            'edit_title' => 'common.edit_role',
            'route' => 'admin.roles',
            'view' => 'roles',
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
            'permissions' => Permission::get()->groupBy('guard_name'),
            'form_params' => [
                'action_url' => route($this->common['route_store']),
                'method' => 'post',
                'button_name' => __('common.create'),
            ]
        ]); */
        return view('admin');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|unique:roles,name',
            'permission' => 'nullable',
            'guard_name' => 'nullable',
        ]);

        $role = Role::create(['name' => $request->input('name'), 'guard_name' => $request->input('guard_name')]);
        $role->syncPermissions($request->input('permission'));

        return redirect()->route($this->common['route_index'])->withSuccess(__('common.item_created_success', ['item' => __('common.role')]));
    }

    /**
     * @param Role $role
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function edit(Role $role)
    {
        /* return view($this->common['view_form'])->with([
            'page_title' => $this->common['edit_title'],
            'breadcrumbs' => $this->common['breadcrumbs'],
            'permissions' => Permission::get()->groupBy('guard_name'),
            'rolePermissions' => \DB::table("role_has_permissions")->where("role_has_permissions.role_id", $role->id)
                ->pluck('role_has_permissions.permission_id', 'role_has_permissions.permission_id')
                ->all(),
            'form_params' => [
                'action_url' => route($this->common['route_update'], $role->id),
                'method' => 'put',
                'button_name' => __('common.update'),
            ],
            'item' => $role,
        ]); */
        return view('admin');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Spatie\Permission\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Role $role)
    {
        $this->validate($request, [
            'name' => 'required',
            'permission' => 'nullable',
            'guard_name' => 'nullable',
        ]);

        $role->update($request->only('name', 'guard_name'));
        $role->syncPermissions($request->input('permission'));

        return redirect()->route($this->common['route_index'])->withSuccess(__('common.item_updated_success', ['item' => __('common.role')]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Spatie\Permission\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        $role->delete();

        return redirect()->route($this->common['route_index'])->withSuccess(__('common.item_destroyed_success', ['item' => __('common.role')]));
    }
    public function fetchRolesAdmin()
    {
        $roles = Role::orderby('name')->get();
        return response()->json($roles);
    }

    public function fetchRoles()
    {
        $roles = Role::get();
        return response()->json($roles);
    }

    public function fetchRole($id)
    {
        $roles = Role::find($id);
        $rolePermissions = \DB::table("role_has_permissions")->where("role_has_permissions.role_id", $id)
        ->pluck( 'role_has_permissions.permission_id')
        ->all();
        $data['role'] = $roles;
        $data['rolePermissions'] = $rolePermissions;
        return response()->json($data);
    }

    public function fetchRolesWeb()
    {
        $roles = Role::where('guard_name','<>','admin')->get();
        return response()->json($roles);
    }
}
