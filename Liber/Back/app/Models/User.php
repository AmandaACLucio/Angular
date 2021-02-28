<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\http\Request;


class User extends Authenticatable
{
    public function createUser(Request $request){
        $this->usuario = $request->usuario;
        $this->name = $request->name;
        $this->email = $request->email;
        $this->photo = $request->photo;
        $this->save();
    }

    public function updateUser(Request $request)
    {
        if($request->usuario){
            $this->usuario = $request->usuario;
        }
        if($request->name){
            $this->name = $request->name;
        }
        if($request->email){
            $this->email = $request->email;
        }
        if($request->photo){
            $this->photo = $request->photo;
        }
        $this->save();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
