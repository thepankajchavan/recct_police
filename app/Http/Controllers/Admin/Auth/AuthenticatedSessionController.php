<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function create()
    {
        $name = csrf_token();
        return view('welcome',compact('name'));
        // return view('admin::auth.login')->with(['page_title' => 'common.login']);
    }

    /**
     * Handle an incoming authentication request.
     * @param  LoginRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(LoginRequest $request)
    {
        // return response()->json($request);
        if($request->verifyTwoFactorAuthentication()){
            return redirect()->route('admin.2fa');
        }

        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(route('admin.index'));
    }

    /**
     * Destroy an authenticated session.
     * @param  Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {
        Auth::guard('admin')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('admin.login');
    }
}
