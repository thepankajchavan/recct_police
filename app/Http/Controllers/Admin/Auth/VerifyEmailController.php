<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use App\Http\Requests\Admin\EmailVerificationRequest;

class VerifyEmailController extends Controller
{
    /**
     * Mark the authenticated user's email address as verified.
     *
     * @param  \Illuminate\Foundation\Auth\EmailVerificationRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function __invoke(EmailVerificationRequest $request)
    {
        if ($request->user('admin')->hasVerifiedEmail()) {
            return redirect()->route('admin.index', ['verified' => true]);
        }

        if ($request->user('admin')->markEmailAsVerified()) {
            event(new Verified($request->user('admin')));
        }

        return redirect()->route('admin.index', ['verified' => true]);
    }
}
