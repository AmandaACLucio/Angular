<?php

namespace App\Models;

use Illuminate\http\Request;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;


class Friend extends Model
{
    public function createFriend(Request $request){
        $user = Auth::user();
        $this->user_id = $user->id;
        $this->friend_id = $request->friend_id;
        $this->save();
    }

    public function updateFriend(Request $request)
    {
        if($request->user_id){
            $this->user_id = $request->user_id;
        }
        if($request->friend_id){
            $this->friend_id = $request->friend_id;
        }
        $this->save();
    }
    
    public function friendUser(){
        return $this->belongsToMany('App\Models\User', 'friend', 'user_id','friend_id');
    }

    public function userFriend(){
        return $this->belongsToMany('App\Models\User', 'friend', 'friend_id','user_id');
    }
}
