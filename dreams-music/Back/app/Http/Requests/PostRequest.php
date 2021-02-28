<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Models\Post;

class PostRequest extends FormRequest
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
                
                'musicname' => 'string',
                'text' => 'string',
                'video' => 'string',
                'url' => 'string',
                'image' => 'string'
            ];
        }

        if($this->isMethod('put')) {
            return [
                'text' => 'string'
            ];
        }       
    }

    public function messages()
    {
        return[
            'musicname.string' => 'O nome da musica precisa ser do tipo string',
            'text.string' => 'O texto precisa ser do tipo string',
            'video.string' => 'O video precisa ser do tipo string',
            'url.string' => 'A url precisa ser do tipo string',
            'image.string' => 'A imagem precisa ser do tipo string'

        ];
    }

    protected function failedValidation(Validator $validator) {
          
        throw new HttpResponseException(response()->json($validator->errors(),422));
    }
}
