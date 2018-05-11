<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Alumni extends Model
{
    //
    protected $fillable = ['year','batch','user_id',];

    public function users() {
    	return $this->belongsTo('App\Alumni');
    }
}
