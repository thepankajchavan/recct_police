<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Flash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class FlashController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('admin');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'pfile'=>'required|max:20999|mimes:pdf',
            'name'=>'required'
        ]);
        $newfile = preg_replace('/\s+/', '-', $request->get('name'));
        if($request->hasFile('pfile'))
        {

            $extension = $request->file('pfile')->getClientOriginalExtension(); 

            $fileName = $newfile.''.time().'-'.auth('admin')->user()->id.'.'. $extension;

            $path = $request->file('pfile')->move(public_path('flash/'), $fileName);
            
            
        }

        $recruitment = new Flash([
            'name'=>$request->get('name'),
            'path'=>$fileName
        ]);
        $recruitment->save();
        return redirect('/admin/police-flash');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $r = Flash::find($id);
        $r->delete();
        return redirect('/admin/police-flash');
    }

    public function fetchAll()
    {
        $flash = Flash::get();
        return response()->json($flash);
    }
}
