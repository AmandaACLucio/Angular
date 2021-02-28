<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\http\Request;
use Illuminate\Support\Facades\Auth;


class Post extends Model
{
    public function createPost(Request $request){
        $user = Auth::user();
        $this->user_id = $user->id;
        $this->musicname = $request->musicname;
        $this->text = $request->text;
        $this->video = $request->video;
        $this->url = $request->url;
        $this->image = $request->image;
        $this->genre = $request->genre;
        $this->privacy = $request->privacy;
        $this->save();
    }

    public function updatePost(Request $request)
    {
        if($request->user_id){
            $this->user_id = $request->user_id;
        }
        if($request->musicname){
            $this->musicname = $request->musicname;
        }
        if($request->text){
            $this->text = $request->text;
        }
        if($request->video){
            $this->video = $request->video;
        }
        if($request->url){
            $this->url = $request->url;
        }
        if($request->image){
            $this->image = $request->image;
        }
        if($request->genre){
            $this->genre = $request->genre;
        }
        if($request->privacy){
            $this->privacy = $request->privacy;
        }
        $this->save();
    }

    public function user(){
        return $this->belongsTo('App\Models\User');
    }

    public function comments(){
        return $this->hasMany('App\Models\Comment');
    }
}
