<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PoliceOfficer extends Model
{
    use HasFactory;
    protected $fillable=['name', 'photo', 'post', 'description', 'pom', 'sequence'];
}
