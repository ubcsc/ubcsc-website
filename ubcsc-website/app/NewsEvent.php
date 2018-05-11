<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NewsEvent extends Model
{
    //
    protected $fillable = ['name','type','desc','start_date','end_date','image','user_id',];

    public function users(){
    	return $this->belongsTo('App\User');
    }
}
