<?php
/**
 * LaraMinLte Configuration File
 **/

return [
    /*
     * Admin route prefix. Eg.: site.com/admin
     * Default: admin
     * Only alphanumeric characters. Use underscores or hyphens between each word
     */
    'backend_prefix' => 'admin',

    /*
     * Super User Role name. Eg.: Super Admin
     * Default: Super Admin
     * Required to enable "Super Admin" mode
     * Reference: https://spatie.be/docs/laravel-permission/v5/basic-usage/super-admin
     */
    'super_user_role_name' => 'Super Admin',

    /*
     * Rel attribute for external links
     * Default: nofollow
     * Options: nofollow, noopener, noreferrer
     * Reference: https://spatie.be/docs/laravel-permission/v5/basic-usage/super-admin
     */
    'external_urls' => 'nofollow',
];
