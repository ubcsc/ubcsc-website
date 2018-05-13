<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use DB;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'f_name','l_name','phone','image', 'email', 'password','rol_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function roles() {
        return $this->hasMany('App\Role');
    }

    public function achievements(){
        return $this->hasMany('App\Achievement');
    }

    public function alumni() {
        return $this->hasOne('App\Alumni');
    }

     public function courses(){
        return $this->hasMany('App\Course');
    }

    public function lecturers() {
        return $this->hasOne('App\Lecturer');
    }

     public function news_events(){
        return $this->hasMany('App\NewsEvent');
    }

    public function projects(){
        return $this->hasMany('App\Project');
    }

     public function students() {
        return $this->hasOne('App\Student');
    }
}
