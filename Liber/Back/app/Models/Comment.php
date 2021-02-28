<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\http\Request;

class Comment extends Model
{
    public function createComment(Request $request){
        $this->user_id = $request->user_id;
        $this->book_id = $request->post_id;
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
        if($request->photo){
            $this->photo = $request->photo;
        }
        if($request->avaliation){
            $this->avaliation = $request->avaliation;
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
