<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Models\User;


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
     * @return array
     */
    public function rules()
    {
        if($this->isMethod('post')) {
            return [
                'username' => 'required|unique:users',
                'password'=> 'required|min:6',
                'name' => 'required|string',
                'email' => 'required|email|unique:users',
                'phone' => 'string|max:15|min:11',
                'photo' => 'string',
                'is_admin' => 'required|boolean|digits:1'

            ];
        }

        if($this->isMethod('put')) {
            return [
                'username' => 'unique:users',
                'email' => 'email|unique:users'
            ];
        }
    }

    public function messages()
    {
        return[
            'username.required' => 'O usuario nao pode ser nulo',
            'username.unique' => 'O usuario ja esta sendo utilizado',
            'password.required' => 'A senha nao pode ser nula',
            'password.min' => 'A senha recebe no minimo 6 caracteres',
            'name.required' => 'O nome nao pode ser nulo',
            'email.required' => 'O email nao pode ser nulo',
            'email.unique' => 'O email ja esta sendo utilizado',
            'email.email' => 'O email nao esta no formato correto',
            'phone.min' => 'O telefone recebe no minimo 11 caracteres',
            'phone.max' => 'O telefone recebe no minimo 15 caracteres',
            'is_admin.required' => 'O atributo is_admin não pode ser nulo',
            'is_admin.boolean' => 'O atributo is_admin tem que ter um valor booleano',
            'is_admin.digits' => 'O atributo is_admin recebe apenas 0 (false) ou 1 (true)'
        ];
    }

    protected function failedValidation(Validator $validator) {
          
        throw new HttpResponseException(response()->json($validator->errors(),422));
    }
}
