<?php

namespace App\Http\Controllers;
use App\Http\Requests\UserRequest as UserRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

use DB;
use App\Models\User;


class PassportController extends Controller
{
    public function register (UserRequest $request)
    {
        $user = new User;
        $user->createUser($request);
        $user->save();
        $logado = $this->login($request);
        $original = $logado->original;

        return response()->json([
            "message" => "Usuario registrado.",
            "user" => $user,
            "original" => $original
        ], 200);
    }

    public function login (Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('Laravel')->accessToken;

            return response()->json([
                "message" => "Login concluido.",
                "user" => $user,
                "token" => $token
            ], 200);
        } 
        
        else {
            return response()->json([
                "message" => "Email ou senha invalidos."
            ], 500);
        }
    }

    public function getDetails ()
    {
        $user = Auth::user();
        return response()->json(["user" => $user], 200);
    }

    public function logout () 
    {
        $accessToken = Auth::user()->token();
        DB::table('oauth_refresh_tokens')->where('access_token_id', $accessToken->id)->update(['revoked' => true]);
        $accessToken->revoke();
        return response()->json(["User deslogado."], 200);
    }
}
