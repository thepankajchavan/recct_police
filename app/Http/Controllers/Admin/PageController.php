<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PageRequest;
use App\Models\Page;

class PageController extends Controller
{
    protected $common;

    public function __construct()
    {
        $this->middleware('permission:manage-page|create-page|edit-page|destroy-page', ['only' => ['index','store']]);
        $this->middleware('permission:create-page', ['only' => ['create','store']]);
        $this->middleware('permission:edit-page', ['only' => ['edit','update']]);
        $this->middleware('permission:destroy-page', ['only' => ['destroy']]);

        //Define common page titles, route name and view directory
        $this->common = [
            'index_title' => 'common.manage_pages',
            'create_title' => 'common.create_page',
            'edit_title' => 'common.edit_page',
            'route' => 'admin.pages',
            'view' => 'pages',
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
        return view($this->common['view_index'])->with(['page_title' => $this->common['index_title']]);
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function create()
    {
        return view($this->common['view_form'])->with([
            'page_title' => $this->common['create_title'],
            'breadcrumbs' => $this->common['breadcrumbs'],
            'form_params' => [
                'action_url' => route($this->common['route_store']),
                'method' => 'post',
                'button_name' => __('common.create'),
            ]
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  PageRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PageRequest $request)
    {
        Page::create($request->all());

        return redirect()->route($this->common['route_index'])->withSuccess(__('common.item_created_success', ['item' => __('common.page')]));
    }

    /**
     * @param Page $page
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function edit(Page $page)
    {
        return view($this->common['view_form'])->with([
            'page_title' => $this->common['edit_title'],
            'breadcrumbs' => $this->common['breadcrumbs'],
            'form_params' => [
                'action_url' => route($this->common['route_update'], $page->id),
                'method' => 'put',
                'button_name' => __('common.update'),
            ],
            'item' => $page,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  PageRequest  $request
     * @param  \App\Models\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function update(PageRequest $request, Page $page)
    {
        $page->update($request->all());

        return redirect()->route($this->common['route_index'])->withSuccess(__('common.item_updated_success', ['item' => __('common.page')]));
    }

    /**
     * Replicate the specified resource in storage.
     *
     * @param  PageRequest  $request
     * @param  \App\Models\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function clone(PageRequest $request, Page $page)
    {
        $page->replicate()->fill(['name' => $page->name. ' (copy)', 'slug' => $page->slug.'_copy', 'status' => 'draft'])->save();

        return redirect()->route($this->common['route_index'])->withSuccess(__('common.item_duplicated_success', ['item' => __('common.page')]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function destroy(Page $page)
    {
        $page->delete();

        return redirect()->route($this->common['route_index'])->withSuccess(__('common.item_destroyed_success', ['item' => __('common.page')]));
    }
}
