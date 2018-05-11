<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    //
    protected $fillable = ['name','desc','user_id',];

    public function users(){
    	return $this->belongsTo('App\User');
    }
}
