<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

/* Route::get('/', [\App\Http\Controllers\SiteController::class, 'index'])
    ->name('index'); */

Route::get('/',function(){
    $name = csrf_token();
    return view('welcome',compact('name'));
})->name('index');



require __DIR__.'/auth.php';

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return view('site::dashboard');
    })->name('dashboard');

    Route::get('profile', [\App\Http\Controllers\ProfileController::class, 'show'])
        ->middleware('password.confirm')
        ->name('profile');

    Route::get('impersonate-stop', static function () {
        Auth::guard('web')->user()->leaveImpersonation();

        return redirect()->route('admin.users.index')->withSuccess(__('common.impersonate_leave'));
    })->name('impersonate.stop');
});

Route::get('lang/{lang}', static function ($lang) {
    if(in_array($lang, language_list())){
       \Cookie::queue('lang', $lang, 86400);
    }
    return redirect()->back();
})->name('lang');
