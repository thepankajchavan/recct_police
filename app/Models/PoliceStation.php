<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PoliceStation extends Model
{
    use HasFactory;
    protected $fillable = ['police_station_name', 'police_station_image', 'police_station_map', 'police_station_email', 'police_patil', 'jurisdiction_map', 'division', 'address', 'telephone', 'police_name', 'police_post', 'police_phone', 'police_photo'];
}
