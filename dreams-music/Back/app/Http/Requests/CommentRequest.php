<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Models\Comment;

class CommentRequest extends FormRequest
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
                'text' => 'required|string'
            ];
        }

        if($this->isMethod('put')) {
            return [
                'text' => 'required|string'
            ];
        }
                
    }

    public function messages()
    {
        return[
            'text.required' => 'O texto não pode ser nulo'
        ];
    }

    protected function failedValidation(Validator $validator) {
          
        throw new HttpResponseException(response()->json($validator->errors(),422));
    }
}
