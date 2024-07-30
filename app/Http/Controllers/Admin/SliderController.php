<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Slider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SliderController extends Controller
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
            'slider'=>'required|image',
            
        ]);
        if($request->hasFile('slider'))
        {

            $extension = $request->file('slider')->getClientOriginalExtension(); 

            $fileName = time().'slider-'.auth('admin')->user()->id.'.'. $extension;

            $path = $request->file('slider')->move(public_path('uploads/slider'), $fileName);
            // $police_station->police_patil = $fileName;
        }
        $slider = new Slider([
            'image'=>$fileName,
            'user_id'=>auth('admin')->user()->id
        ]);
        $slider->save();
        return redirect('/admin/slider');
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
        $gallery = Slider::find($id);
        $gallery->delete();
        return redirect('/admin/slider');
    }

    public function fetchAll()
    {
        $gallery = Slider::get();
        return response()->json($gallery);
    }
}
