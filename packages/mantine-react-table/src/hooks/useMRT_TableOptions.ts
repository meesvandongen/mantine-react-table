import { useMemo } from 'react';
import { MRT_AggregationFns } from '../aggregationFns';
import { MRT_FilterFns } from '../filterFns';
import { MRT_SortingFns } from '../sortingFns';
import { MRT_DefaultColumn, MRT_DefaultDisplayColumn } from '../column.utils';
import { MRT_Localization_EN } from '../locales/en';
import { MRT_Default_Icons } from '../icons';
import { type MRT_DefinedTableOptions, type MRT_TableOptions } from '../types';

export const useMRT_TableOptions: <TData extends Record<string, any> = {}>(
  tableOptions: MRT_TableOptions<TData>,
) => MRT_DefinedTableOptions<TData> = <TData extends Record<string, any> = {}>({
  aggregationFns,
  autoResetExpanded = false,
  columnFilterDisplayMode = 'subheader',
  columnResizeMode = 'onChange',
  createDisplayMode = 'modal',
  defaultColumn,
  defaultDisplayColumn,
  editDisplayMode = 'modal',
  enableBottomToolbar = true,
  enableColumnActions = true,
  enableColumnFilters = true,
  enableColumnOrdering = false,
  enableColumnResizing = false,
  enableDensityToggle = true,
  enableExpandAll = true,
  enableExpanding,
  enableFilterMatchHighlighting = true,
  enableFilters = true,
  enableFullScreenToggle = true,
  enableGlobalFilter = true,
  enableGlobalFilterRankedResults = true,
  enableGrouping = false,
  enableHiding = true,
  enableMultiRowSelection = true,
  enableMultiSort = true,
  enablePagination = true,
  enablePinning = false,
  enableRowSelection = false,
  enableSelectAll = true,
  enableSorting = true,
  enableStickyHeader = false,
  enableTableFooter = true,
  enableTableHead = true,
  enableToolbarInternalActions = true,
  enableTopToolbar = true,
  filterFns,
  icons,
  layoutMode = 'semantic',
  localization,
  manualFiltering,
  manualGrouping,
  manualPagination,
  manualSorting,
  paginationDisplayMode = 'default',
  positionActionsColumn = 'first',
  positionExpandColumn = 'first',
  positionGlobalFilter = 'right',
  positionPagination = 'bottom',
  positionToolbarAlertBanner = 'top',
  positionToolbarDropZone = 'top',
  rowNumberMode = 'static',
  selectAllMode = 'page',
  sortingFns,
  ...rest
}: MRT_TableOptions<TData>) => {
  const _icons = useMemo(() => ({ ...MRT_Default_Icons, ...icons }), [icons]);
  const _localization = useMemo(
    () => ({
      ...MRT_Localization_EN,
      ...localization,
    }),
    [localization],
  );
  const _aggregationFns = useMemo(
    () => ({ ...MRT_AggregationFns, ...aggregationFns }),
    [],
  );
  const _filterFns = useMemo(() => ({ ...MRT_FilterFns, ...filterFns }), []);
  const _sortingFns = useMemo(() => ({ ...MRT_SortingFns, ...sortingFns }), []);
  const _defaultColumn = useMemo(
    () => ({ ...MRT_DefaultColumn, ...defaultColumn }),
    [defaultColumn],
  );
  const _defaultDisplayColumn = useMemo(
    () => ({
      ...MRT_DefaultDisplayColumn,
      ...defaultDisplayColumn,
    }),
    [defaultDisplayColumn],
  );

  if (rest.enableRowVirtualization || rest.enableColumnVirtualization) {
    layoutMode = 'grid';
  }

  if (rest.enableRowVirtualization) {
    enableStickyHeader = true;
  }

  if (enablePagination === false && manualPagination === undefined) {
    manualPagination = true;
  }

  if (!rest.data?.length) {
    manualFiltering = true;
    manualGrouping = true;
    manualPagination = true;
    manualSorting = true;
  }

  return {
    aggregationFns: _aggregationFns,
    autoResetExpanded,
    columnFilterDisplayMode,
    columnResizeMode,
    createDisplayMode,
    defaultColumn: _defaultColumn,
    defaultDisplayColumn: _defaultDisplayColumn,
    editDisplayMode,
    enableBottomToolbar,
    enableColumnActions,
    enableColumnFilters,
    enableColumnOrdering,
    enableColumnResizing,
    enableDensityToggle,
    enableExpandAll,
    enableExpanding,
    enableFilterMatchHighlighting,
    enableFilters,
    enableFullScreenToggle,
    enableGlobalFilter,
    enableGlobalFilterRankedResults,
    enableGrouping,
    enableHiding,
    enableMultiRowSelection,
    enableMultiSort,
    enablePagination,
    enablePinning,
    enableRowSelection,
    enableSelectAll,
    enableSorting,
    enableStickyHeader,
    enableTableFooter,
    enableTableHead,
    enableToolbarInternalActions,
    enableTopToolbar,
    filterFns: _filterFns,
    icons: _icons,
    layoutMode,
    localization: _localization,
    manualFiltering,
    manualGrouping,
    manualPagination,
    manualSorting,
    paginationDisplayMode,
    positionActionsColumn,
    positionExpandColumn,
    positionGlobalFilter,
    positionPagination,
    positionToolbarAlertBanner,
    positionToolbarDropZone,
    rowNumberMode,
    selectAllMode,
    sortingFns: _sortingFns,
    ...rest,
  };
};
