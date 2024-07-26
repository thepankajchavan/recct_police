<?php

namespace App\Http\Livewire\Admin\Tables;

use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\Admin;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Spatie\Permission\Models\Role;

class AdminTable extends DataTableComponent
{
    //protected $model = Admin::class;

    public function builder(): Builder
    {
        return Admin::with('roles');
    }

    public function configure(): void
    {
        $this->setPrimaryKey('id');
        $this->setEagerLoadAllRelationsEnabled();

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
            Column::make(__('common.username'), "username")
                ->sortable()->searchable(),
            Column::make(__('common.email'), "email")
                ->sortable()->searchable(),
            Column::make(__('common.roles'), 'roles.name')
                ->label(function($row) {
                    return $row['roles']->pluck('name')->map(function($role){
                        return '<span class="badge badge-primary">'.$role.'</span>';
                        })->implode(' ');
                })->html(),
            Column::make(__('common.created_at'), "created_at")
                ->sortable(),
            Column::make(__('common.actions'))
                ->excludeFromColumnSelect()
                ->label(
                    fn($row, Column $column) => view('admin::partials.tables.common-actions')->with([
                        'row' => $row,
                        'route_name' => 'admin.admins',
                        'permissions' => ['edit' => 'edit-admin', 'impersonate' => 'impersonate-admin', 'destroy' => 'destroy-admin'],
                    ])
                )->html(),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('Roles')
            ->options($this->getRoleList())->filter(function(Builder $builder, string $value) {
                $builder->where(function($query) use ($value) {
                    $query->whereHas('roles', function($query) use ($value) {
                        $query->where('name', $value);
                    });
                });
            })
        ];
    }

    /**
     * @return array
     */
    private function getRoleList()
    {
        return array_merge(['' => 'All'], Role::pluck('name','name')->toArray());
    }
}
