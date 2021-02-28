<?php

namespace App\Models;

use Illuminate\http\Request;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Comment extends Model
{
    public function createComment(Request $request){
        $user = Auth::user();
        $this->user_id = $user->id;
        $this->post_id = $request->post_id;
        $this->text = $request->text;
        $this->save();
    }

    public function updateComment(Request $request)
    {
        if($request->user_id){
            $this->user_id = $request->user_id;
        }
        if($request->post_id){
            $this->post_id = $request->post_id;
        }
        if($request->text){
            $this->text = $request->text;
        }
        $this->save();
    }

    public function user(){
        return $this->belongsTo('App\Models\User');
    }

    public function post(){
        return $this->belongsTo('App\Models\Post');
    }

}
