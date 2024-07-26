<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AdminMenu;
use App\Http\Requests\Admin\AdminMenuRequest;

class AdminMenuController extends Controller
{
    protected $common;

    public function __construct()
    {
        // Set permissions
        $this->middleware('permission:manage-admin-menu|create-admin-menu|edit-admin-menu|destroy-admin-menu', ['only' => ['index', 'store']]);
        $this->middleware('permission:create-admin-menu', ['only' => ['create', 'store']]);
        $this->middleware('permission:edit-admin-menu', ['only' => ['edit', 'update']]);
        $this->middleware('permission:destroy-admin-menu', ['only' => ['destroy']]);

        //Define common page titles, route name and view directory
        $this->common = [
            'index_title' => 'common.manage_admin_menus',
            'create_title' => 'common.create_admin_menu',
            'edit_title' => 'common.edit_admin_menu',
            'route' => 'admin.admin.menus',
            'view' => 'admin-menus',
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
            'permissions' => \Spatie\Permission\Models\Permission::whereGuardName('admin')->get(),
            'menus' => AdminMenu::menuListGrouped(),
        ]); */
        return view('admin');
    }

    /**
     * @param AdminMenuRequest $request
     * @return mixed
     */
    public function store(AdminMenuRequest $request)
    {
        AdminMenu::create($request->all());
        return redirect()->route($this->common['route_index'])->withSuccess(__('common.item_created_success', ['item' => __('common.admin_menu')]));
    }

    /**
     * @param AdminMenu $admin_menu
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function edit(AdminMenu $admin_menu)
    {
        return view($this->common['view_form'])->with([
            'page_title' => $this->common['edit_title'],
            'breadcrumbs' => $this->common['breadcrumbs'],
            'form_params' => [
                'action_url' => route($this->common['route_update'], $admin_menu->id),
                'method' => 'put',
                'button_name' => __('common.update'),
            ],
            'item' => $admin_menu,
            'permissions' => \Spatie\Permission\Models\Permission::whereGuardName('admin')->get(),
            'menus' => AdminMenu::menuListGrouped(),
        ]);
    }

    /**
     * @param AdminMenuRequest $request
     * @param AdminMenu $admin_menu
     * @return mixed
     */
    public function update(AdminMenuRequest $request, AdminMenu $admin_menu)
    {
        $admin_menu->update($request->validated());

        return redirect()->route($this->common['route_index'])->withSuccess(__('common.item_updated_success', ['item' => __('common.admin_menu')]));
    }

    /**
     * @param AdminMenu $admin_menu
     * @return mixed
     */
    public function clone(AdminMenu $admin_menu)
    {
        $admin_menu->replicate()->fill(['name' => $admin_menu->name . ' (copy)', 'status' => 'inactive'])->save();

        return redirect()->route($this->common['route_index'])->withSuccess(__('common.item_duplicated_success', ['item' => __('common.admin_menu')]));
    }

    /**
     * @param AdminMenu $admin_menu
     * @return mixed
     */
    public function destroy(AdminMenu $admin_menu)
    {
        $admin_menu->delete();

        return redirect()->route($this->common['route_index'])->withSuccess(__('common.item_destroyed_success', ['item' => __('common.admin_menu')]));
    }

    public function fetchMenus()
    {
        $menus = AdminMenu::get();
        return response()->json($menus);
    }
}
