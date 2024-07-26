<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PoliceStation;
use Illuminate\Http\Request;

class PoliceStationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
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
        $this->validate($request, [
            'station_name' => 'required',
            'station_image' => 'required|image',
            'station_map' => 'required',
            'email' => 'required',

            'patil' => 'max:20999|mimes:pdf',
            'jurisdiction_map' => 'max:5999|image',
    
            'station_division' => 'required',
            'station_address' => 'required',
            'phone' => 'required',

            'pname' => 'required',
            'designation' => 'required',
            'police_photo' => 'max:5999|image',
            'mobile' => 'required',

        ]);
        if($request->hasFile('patil'))
        {

            $extension = $request->file('patil')->getClientOriginalExtension(); 

            $fileName = time().'patil-'.auth('admin')->user()->id.'.'. $extension;

            $path = $request->file('patil')->storeAs('uploads/police-station/patil', $fileName);
            
        } else {

            $fileName = 'N/A';
        }

            // Handle File Upload
         if($request->hasFile('station_image')){
            // Get filename with the extension
            $filenameWithExt = $request->file('station_image')->getClientOriginalName();
            // Get just filename
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            // Get just ext
            $extension = $request->file('station_image')->getClientOriginalExtension();
            // Filename to store
            $fileNameToStore = $filename.'_'.time().'station_image'.'.'.$extension;
            // Upload Image
            $path = $request->file('station_image')->storeAs('uploads/police-station/station_image', $fileNameToStore);
        } else {

            $fileNameToStore = "N/A";
        }

        if($request->hasFile('jurisdiction_map')){
            // Get filename with the extension
            $filenameWithExte = $request->file('jurisdiction_map')->getClientOriginalName();
            // Get just filename
            $filename1 = pathinfo($filenameWithExte, PATHINFO_FILENAME);
            // Get just ext
            $extension1 = $request->file('jurisdiction_map')->getClientOriginalExtension();
            // Filename to store
            $map = $filename1.'_'.time().'jurisdiction_map'.'.'.$extension1;
            // Upload Image
            $path = $request->file('jurisdiction_map')->storeAs('uploads/police-station/jurisdiction_map', $map);
        } else {

            $map = "N/A";
        }

        if($request->hasFile('police_photo')){
            // Get filename with the extension
            $filenameWithExtes = $request->file('police_photo')->getClientOriginalName();
            // Get just filename
            $filename2 = pathinfo($filenameWithExtes, PATHINFO_FILENAME);
            // Get just ext
            $extension2 = $request->file('police_photo')->getClientOriginalExtension();
            // Filename to store
            $police = $filename2.'_'.time().'police_photo'.'.'.$extension2;
            // Upload Image
            $path = $request->file('police_photo')->storeAs('uploads/police-station/police_photo', $police);
        } else {

            $police = "noimage.jpg";
        }
        $station = new PoliceStation([
            'police_station_name'=>$request->get('station_name'), 
            'police_station_image'=>$fileNameToStore, 
            'police_station_map'=>$request->get('station_map'), 
            'police_station_email'=>$request->get('email'), 
            'police_patil'=>$fileName, 
            'jurisdiction_map'=>$map, 
            'division'=>$request->get('station_division'), 
            'address'=>$request->get('station_address'), 
            'telephone'=>$request->get('phone'), 
            'police_name'=>$request->get('pname'), 
            'police_post'=>$request->get('designation'), 
            'police_phone'=>$request->get('mobile'), 
            'police_photo'=>$police,
        ]);
        $station->save();
        return redirect('/admin/police-station');
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
        //
    }
}
