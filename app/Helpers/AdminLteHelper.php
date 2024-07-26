<?php

if (!function_exists('adminlte_classes')) {
    /**
     * @param $section_name string
     * @return string|null
     */
    function adminlte_classes(string $section_name): ?string
    {
        $section = array();
        //Navbar
        $section['navbar'] = config('adminlte_settings.navbar_color');

        if (in_array(config('adminlte_settings.navbar_color'), ['navbar-light', 'navbar-warning', 'navbar-white', 'navbar-orange'])) {
            $section['navbar'] .= config('adminlte_settings.navbar_color') !== 'navbar-light' ? ' navbar-light' : '';
        } else {
            $section['navbar'] .= ' navbar-dark';
        }
        if (config('adminlte_settings.navbar_border_bottom')) {
            $section['navbar'] .= ' ' . config('adminlte_settings.navbar_border_bottom');
        }
        if (config('adminlte_settings.navbar_text_size')) {
            $section['navbar'] .= ' ' . config('adminlte_settings.navbar_text_size');
        }
        //Body
        $section['body'] = '';
        if(config('adminlte_settings.body_text_size')) {
            $section['body'] .= ' '.config('adminlte_settings.body_text_size');
        }
        if(config('adminlte_settings.body_accent_colors')) {
            $section['body'] .= ' '.config('adminlte_settings.body_accent_colors');
        }
        if(config('adminlte_settings.default_layout')) {
            $section['body'] .= ' '.config('adminlte_settings.default_layout');
        }
        //Dark/light mode
        $section['body_color_mode'] = ' ';
        if(isset($_COOKIE['display_mode'])) {
            if($_COOKIE['display_mode'] !== 'light'){
                $section['body_color_mode'] = ' dark-mode';
            }
        }else{
            $section['body_color_mode'] = ' ' . config('adminlte_settings.body_color_mode', '');
        }
        $section['body'] .= $section['body_color_mode'];
        //Sidebar
        $section['sidebar'] = config('adminlte_settings.sidebar_color');
        if(config('adminlte_settings.sidebar_expand_on_focus_and_hover')) {
            $section['sidebar'] .= ' '.config('adminlte_settings.sidebar_expand_on_focus_and_hover');
        }
        //Sidebar nav
        $section['sidebar_nav'] = '';
        if(config('adminlte_settings.sidebar_nav_text_size')) {
            $section['sidebar_nav'] .= ' '.config('adminlte_settings.sidebar_nav_text_size');
        }
        if(config('adminlte_settings.sidebar_nav_flat_style')) {
            $section['sidebar_nav'] .= ' '.config('adminlte_settings.sidebar_nav_flat_style');
        }
        if(config('adminlte_settings.sidebar_nav_legacy_style')) {
            $section['sidebar_nav'] .= ' '.config('adminlte_settings.sidebar_nav_legacy_style');
        }
        if(config('adminlte_settings.sidebar_nav_compact_style')) {
            $section['sidebar_nav'] .= ' '.config('adminlte_settings.sidebar_nav_compact_style');
        }
        if(config('adminlte_settings.sidebar_nav_child_indent')) {
            $section['sidebar_nav'] .= ' '.config('adminlte_settings.sidebar_nav_child_indent');
        }
        //Brand
        $section['brand'] = config('adminlte_settings.brand_color');
        if(config('adminlte_settings.brand_text_size')) {
            $section['brand'] .= ' '.config('adminlte_settings.brand_text_size');
        }

        return $section[$section_name] ?? null;
    }
}

if (!function_exists('admin_view')) {
    /**
     * @param $view_name string
     * @return string
     */
    function admin_view(string $view_name): string
    {
        return 'admin.themes.'. setting('admin_theme', 'default') . '.' . $view_name;
    }
}

if (!function_exists('site_view')) {
    /**
     * @param $view_name string
     * @return string
     */
    function site_view(string $view_name): string
    {
        return 'themes.'. setting('site_theme', 'default') . '.' . $view_name;
    }
}

if (!function_exists('admin_assets')) {
    /**
     * @param $file_name string
     * @return string
     */
    function admin_assets(string $file_name): string
    {
        return asset('assets/admin/themes/'. setting('admin_theme', 'default') . '/'. $file_name);
    }
}

if (!function_exists('site_assets')) {
    /**
     * @param $file_name string
     * @return string
     */
    function site_assets(string $file_name): string
    {
        return asset('assets/themes/'. setting('site_theme', 'default') . '/'. $file_name);
    }
}

if(!function_exists('admin_avatar')){
    /**
     * @return string
     */
    function admin_avatar(): string
    {
        $avatar_path = 'assets/admin/avatar/';
        $avatar = $avatar_path.'default.png';
        if(isset(auth()->user()->avatar)){
            $avatar = $avatar_path.auth()->user()->avatar;
        }
        return asset($avatar);
    }
}

if (!function_exists('admin_theme_detect')) {
    /**
     * Detect admin themes folders
     *
     * @return array
     */
    function admin_theme_detect(): array
    {
        $path = resource_path('/views/admin/themes/');
        $themes_dir = scandir($path);
        $themes = array();
        foreach ($themes_dir as $theme) {
            if ($theme === '.' || $theme === '..') {
                continue;
            }
            if (is_dir($path . $theme)) {
                $themes[] = $theme;
            }
        }
        return $themes;
    }
}

if (!function_exists('site_theme_detect')) {
    /**
     * Detect site themes folders
     *
     * @param string|null $directory
     * @return array
     */
    function site_theme_detect(string $directory = null): array
    {
        $path = $directory ? resource_path('/views/themes/'.$directory.'/') : resource_path('/views/themes/');
        $themes_dir = scandir($path);
        $themes = array();
        foreach ($themes_dir as $theme) {
            if ($theme === '.' || $theme === '..') {
                continue;
            }
            if (is_dir($path . $theme)) {
                $themes[] = $theme;
            }
        }
        return $themes;
    }
}

if (!function_exists('language_list')) {
    /**
     * Detect lang folders
     *
     * @return array
     */
    function language_list(): array
    {
        $path = lang_path('/');
        $languages_dir = scandir($path);
        $languages = array();
        foreach ($languages_dir as $lang) {
            if ($lang === '.' || $lang === '..' || $lang === 'vendor') {
                continue;
            }
            if (is_dir($path . $lang)) {
                $languages[] = $lang;
            }
        }
        return $languages;
    }
}

if (!function_exists('external_link')) {
    /**
     * Generate external links
     *
     * @param string $url
     * @param string $name
     * @param string|null $class
     * @return string
     */
    function external_link(string $url, string $name, string $class = null): string
    {
        return '<a href="'.$url.'" target="_blank" class="'.$class.'" rel="'.config('laraminlte.external_urls').'">'.$name.'</a>';
    }
}

if (!function_exists('generate_2fa_code')) {
    /**
     * Generate 2fa Code
     * @return int|string
     * @throws Exception
     */
    function generate_2fa_code(): int|string
    {
        if(config('two-factor-email.type') === 'number'){
            return random_int(config('two-factor-email.random_number_start'), config('two-factor-email.random_number_end'));
        }

        return Str::random(config('two-factor-email.random_string_lenght'));
    }
}
