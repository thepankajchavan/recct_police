<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PoliceOfficer;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PoliceOfficersController extends Controller
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
        return view('admin');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'police_photo'=>'required|image',
            
        ]);
        if($request->hasFile('police_photo'))
        {

            $extension = $request->file('police_photo')->getClientOriginalExtension(); 

            $fileName = time().'police_photo-'.auth('admin')->user()->id.'.'. $extension;

            $path = $request->file('police_photo')->move(public_path('uploads/police-officer'), $fileName);
            // $police_station->police_patil = $fileName;
        }

        $officer = new PoliceOfficer([
            'name'=>$request->get('name'), 
            'photo'=>$fileName, 
            'post'=>$request->get('designation'), 
            'description'=>$request->get('desc'), 
            'pom'=>$request->get('pom')
        ]);
        $officer->save();
        return redirect('/admin/police-officer');
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
        return view('admin');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $this->validate($request,[
            'police_photo'=>'image',
            
        ]);
        $officer = PoliceOfficer::find($id);
        if($request->hasFile('police_photo'))
        {

            $extension = $request->file('police_photo')->getClientOriginalExtension(); 

            $fileName = time().'police_photo-'.auth('admin')->user()->id.'.'. $extension;

            $path = $request->file('police_photo')->move(public_path('uploads/police-officer'), $fileName);
            $officer->photo = $fileName;
        }
        $officer->name = $request->get('name');
        $officer->post = $request->get('designation');
        $officer->description = $request->get('desc');
        $officer->pom = $request->get('pom');

        $officer->update();
        return redirect('/admin/police-officer');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $officer = PoliceOfficer::find($id);
        $officer->delete();
        return redirect('/admin/police-officer');
    }

    public function fetchOfficers()
    {
        $officer = PoliceOfficer::get();
        return response()->json($officer);
    }
    public function fetchOfficer($id)
    {
        $officer = PoliceOfficer::find($id);
        return response()->json($officer);
    }
}
