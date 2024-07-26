<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminProfileRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Jenssegers\Agent\Agent;

class ProfileController extends Controller
{
    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        return view('admin::profile')->with([
            'page_title' => 'common.edit_profile',
            'user_sessions' => $this->getUserSessions(),
        ]);
    }

    /**
     * Update user profile
     *
     * @param AdminProfileRequest $request
     * @return mixed
     */
    public function update(AdminProfileRequest $request)
    {
        $common_fields = $request->only('name', 'username');
        $optional_field = [];

        if($request->filled('email')){
            $optional_field['email'] = $request->email;
        }

        if($request->filled('new_password')){
            $optional_field['password'] = $request->new_password;
        }

        // Merge all the fields
        $filled_fields = array_merge($common_fields, $optional_field);

        // Update user
        auth('admin')->user()->update($filled_fields);

        if($request->filled('email')){
            // Unset email verified field
            auth('admin')->user()->forceFill(['email_verified_at' => null])->save();
            // Resend the email verification notification
            auth('admin')->user()->sendEmailVerificationNotification();
        }

        return redirect()->back()->withSuccess(__('common.item_updated_success', ['item' => __('common.profile')]));
    }

    /**
     * Update user avatar
     *
     * @param Request $request
     * @return mixed
     */
    public function updateAvatar(Request $request)
    {
        $this->validate($request, [
            'avatar' => 'required|image|mimes:jpeg,png|max:500',
        ]);

        $avatar_path = 'admin/avatar';
        $current_avatar = auth('admin')->user()->avatar;
        $avatar = $request->file('avatar')->store($avatar_path,'assets');

        // Delete old avatar
        if($current_avatar){
            Storage::disk('assets')->delete($avatar_path.'/'.$current_avatar);
        }
        // Get the file name (without path)
        $new_avatar = explode($avatar_path.'/', $avatar)[1];

        // Update user avatar
        auth('admin')->user()->update(['avatar' => $new_avatar]);

        return redirect()->route('admin.profile')->withSuccess(__('common.item_updated_success', ['item' => __('common.avatar')]));
    }

    /**
     * Logout user fron other devices/browsers
     *
     * @param Request $request
     * @return void
     * @throws \Illuminate\Auth\AuthenticationException
     */
    public function logoutOtherBrowserSessions(Request $request)
    {
        $this->validate($request, [
            'password' => 'required|current_password:admin',
        ]);

        if (config('session.driver') !== 'database') {
            return;
        }

        auth('admin')->logoutOtherDevices($request->password);

        $this->deleteOtherSessionRecords();

        return redirect()->route('admin.profile')->withSuccess(__('common.browser_logout_success'));
    }

    /**
     * Get user sessions
     * @return \Illuminate\Support\Collection
     */
    protected function getUserSessions()
    {
        return collect(
            DB::connection(config('session.connection'))->table(config('session.table', 'sessions'))
                ->where('admin_id', auth('admin')->user()->getAuthIdentifier())
                ->orderBy('last_activity', 'desc')
                ->get()
        )->map(function ($session) {
            return (object) [
                'agent' => $this->createAgent($session),
                'ip_address' => $session->ip_address,
                'is_current_device' => $session->id === request()->session()->getId(),
                'last_active' => Carbon::createFromTimestamp($session->last_activity)->diffForHumans(),
            ];
        });
    }

    /**
     * Create a new agent instance from the given session.
     *
     * @param  mixed  $session
     * @return \Jenssegers\Agent\Agent
     */
    protected function createAgent($session)
    {
        return tap(new Agent, function ($agent) use ($session) {
            $agent->setUserAgent($session->user_agent);
        });
    }

    /**
     * Delete other session records.
     * @return void
     */
    protected function deleteOtherSessionRecords()
    {
        if (config('session.driver') !== 'database') {
            return;
        }

        DB::connection(config('session.connection'))->table(config('session.table', 'sessions'))
            ->where('admin_id', auth('admin')->user()->getAuthIdentifier())
            ->where('id', '!=', request()->session()->getId())
            ->delete();
    }
}
