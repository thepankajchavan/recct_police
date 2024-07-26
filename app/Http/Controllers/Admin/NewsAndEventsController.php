<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\NewsAndEvents;
use Illuminate\Http\Request;


class NewsAndEventsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
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
    public function index()
    {
        return view('admin');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin');//response()->json(['msg'=>"Testing code"]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $news = new NewsAndEvents([
            'user_id'=>'1',
            'title'=>$request->get('title'), 
            'body'=>$request->get('body'), 
            'cover_image'=>'testing'
        ]);
        $news->save();

        return 'success';
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $news = NewsAndEvents::Find($id);
        return response()->json($news);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return view('admin');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $news = NewsAndEvents::find($id);
        $news->title = $request->get('title');
        $news->body = $request->get('body');
        $news->update();
        return "success";
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $news = NewsAndEvents::find($id);
        $news->delete();
        return redirect('/admin/news-and-events');
    }

    public function fetchEvents()
    {
        $news = NewsAndEvents::get();
        return response()->json($news);
    }

    public function fetchEvent($id)
    {
        $news = NewsAndEvents::Find($id);
        return response()->json($news);
    }
}
