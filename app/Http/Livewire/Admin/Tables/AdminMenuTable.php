<?php

namespace App\Http\Livewire\Admin\Tables;

use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\AdminMenu;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;

class AdminMenuTable extends DataTableComponent
{
    protected $model = AdminMenu::class;

    public function configure(): void
    {
        $this->setPrimaryKey('id');
        $this->setAdditionalSelects(['type']);

        $this->setPerPageAccepted([1, 2, 3, 4, 5, 10, 25, 50, 100]);
        $this->setPerPage(setting('admin_pagination', 10));
    }

    public function columns(): array
    {
        return [
            Column::make("Id", "id")
                ->sortable(),
            Column::make(__('common.name'), "name")
                ->sortable()->searchable(),
            Column::make(__('common.url'), "url")
                ->sortable()->searchable()
                ->format(function($value, $row, Column $column) {
                    if($row->type === 'route' && $value !== '#') {
                        return '<a href="'.route($value).'"><i class="fa fa-link"></i></a>';
                    }
                    if($row->type === 'url' && $value !== '#') {
                        return '<a href="'.url($value).'"><i class="fa fa-link"></i></a>';
                    }
                    return external_link($value, '<i class="fa fa-link"></i>');
                })->html(),
            Column::make(__('common.position'), "position")
                ->sortable()->searchable()
                ->format(fn($value) => ucwords(str_replace('_', ' ', $value))),
            Column::make(__('common.status'), "status")
                ->sortable()->searchable()->format(fn($value, $row, Column $column) => view('admin::partials.tables.common-status')->withStatus($value)
                )->html(),
            Column::make(__('common.actions'))
                ->excludeFromColumnSelect()
                ->label(
                    fn($row, Column $column) => view('admin::partials.tables.common-actions')->with([
                        'row' => $row,
                        'route_name' => 'admin.admin.menus',
                        'permissions' => ['edit' => 'edit-admin-menu', 'destroy' => 'destroy-admin-menu', 'create' => 'create-admin-menu'],
                    ])
                )->html(),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make(__('common.status'))
            ->options([
                '' => __('common.all'),
                'active' => __('common.active'),
                'inactive' => __('common.inactive'),
            ])->filter(function(Builder $builder, string $value) {
                    if ($value === 'active') {
                        $builder->where('status', 'active');
                    } elseif ($value === 'inactive') {
                        $builder->where('status', 'inactive');
                    }
                }),
            SelectFilter::make(__('common.position'))
            ->options([
                '' => __('common.all'),
                'sidebar' => 'Sidebar',
                'navbar_left' => 'Navbar Left',
                'navbar_right' => 'Navbar Right',
            ])->filter(function(Builder $builder, string $value) {
                    if ($value === 'sidebar') {
                        $builder->where('position', 'sidebar');
                    } elseif ($value === 'navbar_left') {
                        $builder->where('position', 'navbar_left');
                    } elseif ($value === 'navbar_right') {
                        $builder->where('position', 'navbar_right');
                    }
                })
        ];
    }
}
