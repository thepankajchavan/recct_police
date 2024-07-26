<?php

namespace App\Http\Livewire\Admin\Tables;

use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use Spatie\Permission\Models\Role;

class RoleTable extends DataTableComponent
{
    protected $model = Role::class;

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
                        'route_name' => 'admin.roles',
                        'permissions' => ['edit' => 'edit-role', 'destroy' => 'destroy-role'],
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
        $guards = ['' => 'All'];
        foreach (array_keys(config('auth.guards')) as $key => $value) {
            $guards[$value] = $value;
        }
        return $guards;
    }
}
