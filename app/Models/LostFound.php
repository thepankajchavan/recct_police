<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LostFound extends Model
{
    use HasFactory;
    protected $fillable = ['report_type', 'station_name', 'document_name', 'document_number', 'datetime', 'other_details', 'name', 'email', 'contact', 'address', 'pincode', 'message', 'status',];
}
