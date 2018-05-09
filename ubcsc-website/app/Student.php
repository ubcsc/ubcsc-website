<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    //
    protected $fillable = ['ub_num','level','user_id',];

    public function users(){
    	return $this->belongsTo('App\User');
    }
}
