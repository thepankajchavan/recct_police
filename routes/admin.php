<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

Route::prefix(config('laraminlte.backend_prefix'))->group(static function () {

    // Guest routes
    Route::middleware('guest:admin')->group(static function () {

        // Auth routes
        Route::get('login', [\App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::class, 'create'])->name('admin.login');
        Route::post('login', [\App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::class, 'store']);

        // 2FA routes
        Route::get('2fa', [\App\Http\Controllers\Admin\Auth\TwoFactorAuthenticatedSessionController::class, 'create'])->name('admin.2fa');
        Route::post('2fa', [\App\Http\Controllers\Admin\Auth\TwoFactorAuthenticatedSessionController::class, 'store']);
        Route::post('2fa/resend', [\App\Http\Controllers\Admin\Auth\TwoFactorAuthenticatedSessionController::class, 'resend'])->name('admin.2fa.resend');

        // Forgot password
        Route::get('forgot-password', [\App\Http\Controllers\Admin\Auth\PasswordResetLinkController::class, 'create'])->name('admin.password.request');
        Route::post('forgot-password', [\App\Http\Controllers\Admin\Auth\PasswordResetLinkController::class, 'store'])->name('admin.password.email');

        // Reset password
        Route::get('reset-password/{token}', [\App\Http\Controllers\Admin\Auth\NewPasswordController::class, 'create'])->name('admin.password.reset');
        Route::post('reset-password', [\App\Http\Controllers\Admin\Auth\NewPasswordController::class, 'store'])->name('admin.password.update');
    });

    // Authenticated routes
    Route::middleware(['auth:admin'])->group(static function () {

        // Logout route
        Route::post('logout', [\App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::class, 'destroy'])->name('admin.logout');

        // Verify email routes
        Route::get('verify-email', [\App\Http\Controllers\Admin\Auth\EmailVerificationPromptController::class, '__invoke'])->name('admin.verification.notice');
        Route::get('verify-email/{id}/{hash}', [\App\Http\Controllers\Admin\Auth\VerifyEmailController::class, '__invoke'])->middleware(['signed', 'throttle:6,1'])->name('admin.verification.verify');
        Route::post('email/verification-notification', [\App\Http\Controllers\Admin\Auth\EmailVerificationNotificationController::class, 'store'])->middleware('throttle:6,1')->name('admin.verification.send');
    });

    // Authenticated/verified routes
    Route::middleware(['auth:admin', 'verified'])->group(static function () {

        // Index route
        Route::get('/', [\App\Http\Controllers\Admin\HomeController::class, 'index'])->name('admin.index');

        // Confirm password routes
        Route::get('confirm-password', [\App\Http\Controllers\Admin\Auth\ConfirmablePasswordController::class, 'show'])->name('admin.password.confirm');
        Route::post('confirm-password', [\App\Http\Controllers\Admin\Auth\ConfirmablePasswordController::class, 'store']);

        // Profile routes
        Route::middleware('password.confirm.admin')->group(static function () {
            Route::get('profile', [\App\Http\Controllers\Admin\ProfileController::class, 'index'])->name('admin.profile');
            Route::post('profile', [\App\Http\Controllers\Admin\ProfileController::class, 'update']);
            Route::post('profile/avatar', [\App\Http\Controllers\Admin\ProfileController::class, 'updateAvatar'])->name('admin.profile.avatar');
            Route::post('profile/logout-other-browsers', [\App\Http\Controllers\Admin\ProfileController::class, 'logoutOtherBrowserSessions'])->name('admin.profile.logout.other.browsers');
        });

        // Setting routes
        Route::get('settings', [\App\Http\Controllers\Admin\SettingController::class, 'index'])->name('admin.settings');
        Route::get('fetch-settings',[\App\Http\Controllers\Admin\SettingController::class, 'fetchSettigns']);
        Route::put('settings', [\App\Http\Controllers\Admin\SettingController::class, 'update']);

        //News And Events
        Route::resource('news-and-events',\App\Http\Controllers\Admin\NewsAndEventsController::class);
        Route::get('fetch-events',[\App\Http\Controllers\Admin\NewsAndEventsController::class,'fetchEvents']);
        Route::get('fetch-event/{id}',[\App\Http\Controllers\Admin\NewsAndEventsController::class,'fetchEvent']);

        //Police Stations
        Route::resource('police-station',\App\Http\Controllers\Admin\PoliceStationController::class);

        // Admin Menu routes
        Route::get('admin-menus/{admin_menu}/clone', [\App\Http\Controllers\Admin\AdminMenuController::class, 'clone'])->name('admin.admin.menus.clone');
        Route::resource('admin-menus', \App\Http\Controllers\Admin\AdminMenuController::class, ['names' => 'admin.admin.menus'])->except(['show']);
        Route::get('fetch-menus',[\App\Http\Controllers\Admin\AdminMenuController::class, 'fetchMenus']);

        // Role routes
        Route::resource('roles', \App\Http\Controllers\Admin\RoleController::class, ['names' => 'admin.roles'])->except(['show']);
        Route::get('fetch-roles',[\App\Http\Controllers\Admin\RoleController::class,'fetchRoles']);
        Route::get('fetch-roles-admin',[\App\Http\Controllers\Admin\RoleController::class,'fetchRolesAdmin']);
        Route::get('fetch-roles-web',[\App\Http\Controllers\Admin\RoleController::class,'fetchRolesWeb']);
        Route::get('fetch-role/{id}',[\App\Http\Controllers\Admin\RoleController::class,'fetchRole']);

        // Permission routes
        Route::resource('permissions', \App\Http\Controllers\Admin\PermissionController::class, ['names' => 'admin.permissions'])->except(['show']);
        Route::get('fetch-permissions',[\App\Http\Controllers\Admin\PermissionController::class,'fetchPermissions']);
        Route::get('fetch-permission/{id}',[\App\Http\Controllers\Admin\PermissionController::class,'fetchPermission']);

        // Admin routes
        Route::get('admins/impersonate/{admin}', [\App\Http\Controllers\Admin\AdminController::class, 'impersonate'])->name('admin.admins.impersonate');
        Route::get('admins/impersonate-stop', [\App\Http\Controllers\Admin\AdminController::class, 'impersonateStop'])->name('admin.admins.impersonate.stop');
        Route::resource('admins', \App\Http\Controllers\Admin\AdminController::class, ['names' => 'admin.admins'])->except(['show']);
        Route::get('fetch-admins',[\App\Http\Controllers\Admin\AdminController::class,'fetchAdmins']);
        Route::get('fetch-admin/{id}',[\App\Http\Controllers\Admin\AdminController::class,'fetchAdmin']);

        // User routes
        Route::get('users/impersonate/{user}', [\App\Http\Controllers\Admin\UserController::class, 'impersonate'])->name('admin.users.impersonate');
        Route::get('users/impersonate-stop', [\App\Http\Controllers\Admin\UserController::class, 'impersonateStop'])->name('admin.users.impersonate.stop');
        Route::resource('users', \App\Http\Controllers\Admin\UserController::class, ['names' => 'admin.users'])->except(['show']);
        Route::get('fetch-users',[\App\Http\Controllers\Admin\UserController::class,'fetchUser']);
        Route::get('fetch-user/{id}',[\App\Http\Controllers\Admin\UserController::class,'fetchUsr']);

        // Page routes
        Route::get('pages/{page}/clone', [\App\Http\Controllers\Admin\PageController::class, 'clone'])->name('admin.pages.clone');
        Route::resource('pages', \App\Http\Controllers\Admin\PageController::class, ['names' => 'admin.pages'])->except(['show']);

    });
});

// Authenticated/verified routes
Route::middleware(['auth:admin', 'verified'])->group(static function () {
    // Translation Manager routes
    Route::get(config('translation-manager.route.prefix'), [\Barryvdh\TranslationManager\Controller::class, 'getIndex'])->name('admin.translations');
});



