<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Achievement extends Model
{
    //
    protected $fillable = [
    'title','desc','image','user_id'];

    public function users(){
    	return $this->belongsTo('App\User');
    }
}
