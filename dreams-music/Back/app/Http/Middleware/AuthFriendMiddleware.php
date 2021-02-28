<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Friend;


class AuthFriendMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {   
        $id=$request->route('id');

        $user = Auth::user();
        $user_logado_id = $user->id;
        
        $user_is_admin = $user->is_admin;

        $friendship = Friend::find($id);
        $user_friend_id = $friendship->user_id;

        if(($user_logado_id == $user_friend_id) || $user_is_admin==1)
            return $next($request);
        else
            return response()->json(['error' => 'Seu usuario nao tem permissao para essa acao'], 401);
    }
}
