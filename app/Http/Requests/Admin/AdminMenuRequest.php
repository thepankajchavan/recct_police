<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;

class AdminMenuRequest extends FormRequest
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
            'name' => 'required|string',
            'url' => 'required|string',
            'order' => 'nullable|integer',
            'permissions' => 'nullable|array',
            'icon' => 'nullable|string',
            'type' => 'required|alpha_dash',
            'position' => 'required|alpha_dash',
            'status' => 'required|alpha_dash',
            'blank' => 'required|boolean',
            'parent_id' => 'nullable|exists:admin_menus,id',
        ];
    }
}
