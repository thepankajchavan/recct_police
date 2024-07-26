<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function show()
    {
        return view('site::profile')->with(['page_title' => 'common.edit_profile']);
    }
}
