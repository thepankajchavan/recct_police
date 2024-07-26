<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;

class SettingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            //Design
            'admin_pagination' => 'required|integer|min:1',
            'site_pagination' => 'required|integer|min:1',
            'default_editor' => 'required|alpha_dash',
            'default_alerts' => 'required|alpha_dash',
            'admin_theme' => 'required|alpha_dash',
            'site_theme' => 'required|alpha_dash',
            'header_codes' => 'nullable|string',
            'footer_codes' => 'nullable|string',
            //Maintenance
            'maintenance_status' => 'required|alpha_dash',
            'maintenance_retry' => 'nullable|integer',
            'maintenance_excluded_uris' => 'nullable|string',
            'maintenance_excluded_ips' => 'nullable|string',
            'maintenance_secret' => 'nullable|alpha_dash',
            'maintenance_message' => 'nullable|string',
            //General
            'site_name' => 'required|string',
            //SEO
            'meta_keywords' => 'nullable|string',
            'meta_description' => 'nullable|string',
            'ga_tracking' => 'nullable|string',
            //Company
            'company_name' => 'string|nullable',
            'company_address' => 'string|nullable',
            'company_city' => 'string|nullable',
            'company_state' => 'string|nullable',
            'company_zip_code' => 'string|nullable',
            'company_country' => 'string|nullable',
            'company_phone' => 'string|nullable',
            'company_opening_hours' => 'string|nullable',
            //Social
            'facebook' => 'nullable|url',
            'telegram' => 'nullable|url',
            'twitter' => 'nullable|url',
            'vk' => 'nullable|url',
            'instagram' => 'nullable|url',
            'pinterest' => 'nullable|url',
            'medium' => 'nullable|url',
            'discord' => 'nullable|string',
            'github' => 'nullable|url',
            'linkedin' => 'nullable|url',
            'okru' => 'nullable|url',
            'reddit' => 'nullable|url',
            'skype' => 'nullable|url',
            'snapchat' => 'nullable|url',
            'spotify' => 'nullable|url',
            'soundcloud' => 'nullable|url',
            'steam' => 'nullable|url',
            'twitch' => 'nullable|url',
            'tumblr' => 'nullable|url',
            'vimeo' => 'nullable|url',
            'viber' => 'nullable|string',
            'weibo' => 'nullable|string',
            'whatsapp' => 'nullable|string',
            'youtube' => 'nullable|url',
        ];
    }
}
