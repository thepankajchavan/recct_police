<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;

class UserRequest extends FormRequest
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
        $id = $this->user;

        switch($this->method())
        {
            case 'GET':
            case 'DELETE':
            {
                return [];
            }
            case 'POST':
            {
                return [
                    'name' => 'required|string',
                    'username' => 'required|alpha_dash|unique:users,username',
                    'email' => 'required|email|unique:users,email',
                    'password' => 'required|string|min:6|confirmed',
                    'roles' => 'nullable'
                ];
            }
            case 'PUT':
            case 'PATCH':
            {
                return [
                    'name' => 'required|min:3',
                    'username' => 'required|alpha_dash|unique:users,username,'.$id->id,
                    'email' => 'required|email|unique:users,email,'.$id->id,
                    'password' => 'nullable|string|min:6|confirmed',
                    'roles' => 'nullable'
                ];
            }
            default:
                break;
        }
    }
}
