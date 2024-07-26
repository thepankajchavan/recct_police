<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    protected $common;

    public function __construct(Permission $permission)
    {
        $this->middleware('permission:manage-permission|create-permission|edit-permission|destroy-permission', ['only' => ['index','store']]);
        $this->middleware('permission:create-permission', ['only' => ['create','store']]);
        $this->middleware('permission:edit-permission', ['only' => ['edit','update']]);
        $this->middleware('permission:destroy-permission', ['only' => ['destroy']]);

        //Define common page titles, route name and view directory
        $this->common = [
            'index_title' => 'common.manage_permissions',
            'create_title' => 'common.create_permission',
            'edit_title' => 'common.edit_permission',
            'route' => 'admin.permissions',
            'view' => 'permissions',
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
            'name' => 'required|unique:permissions,name',
            'guard_name' => 'required|string',
        ]);

        Permission::create($request->all());

        return redirect()->route($this->common['route_index'])->withSuccess(__('common.item_created_success', ['item' => __('common.permission')]));
    }

    /**
     * @param Permission $permission
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function edit(Permission $permission)
    {
        /* return view($this->common['view_form'])->with([
            'page_title' => $this->common['edit_title'],
            'breadcrumbs' => $this->common['breadcrumbs'],
            'form_params' => [
                'action_url' => route($this->common['route_update'], $permission->id),
                'method' => 'put',
                'button_name' => __('common.update'),
            ],
            'item' => $permission,
        ]); */
        return view('admin');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Spatie\Permission\Models\Permission  $permission
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Permission $permission)
    {
        $this->validate($request, [
            'name' => 'required|unique:permissions,name,'. $permission->id,
            'guard_name' => 'required|string',
        ]);

        $permission->update($request->all());

        return redirect()->route($this->common['route_index'])->withSuccess(__('common.item_updated_success', ['item' => __('common.permission')]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Spatie\Permission\Models\Permission  $permission
     * @return \Illuminate\Http\Response
     */
    public function destroy(Permission $permission)
    {
        $permission->delete();

        return redirect()->route($this->common['route_index'])->withSuccess(__('common.item_destroyed_success', ['item' => __('common.permission')]));
    }

    public function fetchPermissions()
    {
        $permissions = Permission::get();
        return response()->json($permissions);
    }

    public function fetchPermission($id)
    {
        $permission = Permission::find($id);
        return response()->json($permission);
    }
}
