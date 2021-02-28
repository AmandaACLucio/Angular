<?php

namespace App\Models;

use Illuminate\http\Request;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Http\Requests\UserRequest as UserRequest;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    public function createUser(UserRequest $request){
        $this->username = $request->username;
        $this->password = bcrypt($request->password);
        $this->name = $request->name;
        $this->email = $request->email;
        $this->phone = $request->phone;
        $this->photo = $request->photo;
        $this->is_admin = $request->is_admin;
        $this->save();
    }

    public function updateUser(UserRequest $request)
    {
        if($request->username){
            $this->username = $request->username;
        }
        if($request->password){
            $this->password = bcrypt($request->password);
        }
        if($request->name){
            $this->name = $request->name;
        }
        if($request->email){
            $this->email = $request->email;
        }
        if($request->phone){
            $this->phone = $request->phone;
        }
        if($request->photo){
            $this->photo = $request->photo;
        }
        if($request->is_admin){
            $this->is_admin = $request->is_admin;
        }
        $this->save();
    }

    public function posts(){
        return $this->hasMany('App\Models\Post');
    }

    public function friends(){
        return $this->hasMany('App\Models\Friend');
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
