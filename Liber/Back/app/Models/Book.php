<?php

namespace App\Models;

use Illuminate\http\Request;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    public function createBook(Request $request){
        $this->name = $request->name;
        $this->author = $request->author;
        $this->description = $request->description;
        $this->photo = $request->photo;
        $this->category = $request->category;
        $this->price = $request->price;
        $this->avaliation = $request->avaliation;
        $this->save();
    }

    public function updateBook(Request $request)
    {
        if($request->name){
            $this->name = $request->name;
        }
        if($request->author){
            $this->author = $request->author;
        }
        if($request->description){
            $this->description = $request->description;
        }
        if($request->photo){
            $this->photo = $request->photo;
        }
        if($request->category){
            $this->category = $request->category;
        }
        if($request->price){
            $this->price = $request->price;
        }
        if($request->avaliation){
            $this->avaliation = $request->avaliation;
        }
        $this->save();
    }
}
