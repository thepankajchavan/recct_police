<?php

namespace App\Http\Livewire\Admin\Tables;

use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;
use App\Models\Page;

class PageTable extends DataTableComponent
{
    protected $model = Page::class;

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
            Column::make(__('common.status'), "status")
                ->sortable()->searchable()->format(fn($value, $row, Column $column) => view('admin::partials.tables.common-status')->withStatus($value)
                )->html(),
            Column::make(__('common.created_at'), "created_at")
                ->sortable()->searchable(),
            Column::make(__('common.actions'))
                ->excludeFromColumnSelect()
                ->label(
                    fn($row, Column $column) => view('admin::partials.tables.common-actions')->with([
                        'row' => $row,
                        'route_name' => 'admin.pages',
                        'permissions' => ['edit' => 'edit-page', 'destroy' => 'destroy-page', 'create' => 'create-page'],
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
            SelectFilter::make(__('common.status'))
                ->options([
                    '' => __('common.all'),
                    'published' => __('common.published'),
                    'draft' => __('common.draft'),
                ])->filter(function(Builder $builder, string $value) {
                    if ($value === 'published') {
                        $builder->where('status', 'published');
                    } elseif ($value === 'draft') {
                        $builder->where('status', 'draft');
                    }
                })
        ];
    }
}
