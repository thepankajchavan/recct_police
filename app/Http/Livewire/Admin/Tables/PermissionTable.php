<?php

namespace App\Http\Livewire\Admin\Tables;

use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Spatie\Permission\Models\Permission;

class PermissionTable extends DataTableComponent
{
    protected $model = Permission::class;

    public function configure(): void
    {
        $this->setPrimaryKey('id');

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
            Column::make(__('common.guard_name'), "guard_name")
                ->sortable()->searchable(),
            Column::make(__('common.created_at'), "created_at")
                ->sortable()->searchable(),
            Column::make(__('common.actions'))
                ->excludeFromColumnSelect()
                ->label(
                    fn($row, Column $column) => view('admin::partials.tables.common-actions')->with([
                        'row' => $row,
                        'route_name' => 'admin.permissions',
                        'permissions' => ['edit' => 'edit-permission', 'destroy' => 'destroy-permission'],
                    ])
                )->html(),
        ];
    }

    /**
     * @return array
     */
    public function filters(): array
    {
        return [
            SelectFilter::make(__('common.guard_name'))
            ->options($this->getGuardList())->filter(function(Builder $builder, string $value) {
                    $builder->where('guard_name', $value);
                })
        ];
    }

    /**
     * @return array
     */
    private function getGuardList()
    {
        $guards = ['' => __('common.all')];
        foreach (array_keys(config('auth.guards')) as $key => $value) {
            $guards[$value] = $value;
        }
        return $guards;
    }
}
