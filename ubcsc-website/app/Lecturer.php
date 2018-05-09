<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lecturer extends Model
{
    //
    protected $fillable = ['level','post','user_id',];

    public function users(){
    	return $this->belongsTo('App\User');
    }
}
