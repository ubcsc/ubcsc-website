<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    //
    protected $fillable = ['name','content','upload_date','user_id',];

    public function users() {
    	return $this->belongsTo('App\User');
    }
}
