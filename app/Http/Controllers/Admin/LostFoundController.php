<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\LostFound;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class LostFoundController extends Controller
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
        //
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
    public function fetchReports()
    {
        $data = LostFound::join('police_stations','police_stations.id','=','lost_founds.station_name')->select('lost_founds.*','police_stations.police_station_name')->get();
        return response()->json($data);
    }
    public function fetchReport($id)
    {
        $data = LostFound::join('police_stations','police_stations.id','=','lost_founds.station_name')->select('lost_founds.*','police_stations.police_station_name')->where('lost_founds.id',$id)->first();
        return response()->json($data);
    }
}
