<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Recruitement;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class RecruitementController extends Controller
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

            $path = $request->file('pfile')->move(public_path('recruitment/'), $fileName);
            
            
        }

        $recruitment = new Recruitement([
            'name'=>$request->get('name'),
            'path'=>$fileName
        ]);
        $recruitment->save();
        return redirect('/admin/recruitment');

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
        $r = Recruitement::find($id);
        $r->delete();
        return redirect('/admin/recruitment');
    }

    public function fetchAll()
    {
        $r = Recruitement::get();
        return response()->json($r);
    }
}
