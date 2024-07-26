<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdminMenu extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'url', 'icon', 'parent_id', 'order', 'status', 'type', 'position', 'blank', 'permissions',
    ];

    protected $casts = [
        'permissions' => 'array',
    ];

    public function childs()
    {
        return $this->hasMany(AdminMenu::class, 'parent_id');
    }

    public function activeChilds()
    {
        return $this->hasMany(AdminMenu::class, 'parent_id')->whereStatus('active')->orderBy('order', 'asc');
    }

    public static function tree()
    {
        return static::with(implode('.', array_fill(0, 100, 'activeChilds')))->whereStatus('active')->wherePosition('sidebar')->whereNull('parent_id')->orderBy('order', 'asc')->get();
    }

    public static function navbarLeftTree()
    {
        return static::with(implode('.', array_fill(0, 100, 'activeChilds')))->whereStatus('active')->wherePosition('navbar_left')->whereNull('parent_id')->orderBy('order', 'asc')->get();
    }

    public static function navbarRightTree()
    {
        return static::with(implode('.', array_fill(0, 100, 'activeChilds')))->whereStatus('active')->wherePosition('navbar_right')->whereNull('parent_id')->orderBy('order', 'asc')->get();
    }

    public static function menuListGrouped()
    {
        return static::select('id','name','order','parent_id','position')->orderBy('order','asc')->orderBy('parent_id','asc')->get()->groupBy('position', 'asc');
    }
}
