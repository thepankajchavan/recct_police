<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;

class AdminProfileRequest extends FormRequest
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
        $logged_admin_id = auth('admin')->user()->id;
        return [
            'name' => 'required|string',
            'username' => 'required|alpha_dash|unique:admins,username,' . $logged_admin_id,
            'email' => 'nullable|email|confirmed|unique:admins,email,' . $logged_admin_id,
            'new_password' => ['nullable', 'string', Rules\Password::defaults()],
        ];
    }
}
