import React, { FC, MouseEvent, useState } from 'react';
import { ActionIcon, Tooltip } from '@mantine/core';
import { MRT_ColumnActionMenu } from '../menus/MRT_ColumnActionMenu';
import type { MRT_Header, MRT_TableInstance } from '..';

interface Props {
  header: MRT_Header;
  table: MRT_TableInstance;
}

export const MRT_TableHeadCellColumnActionsButton: FC<Props> = ({
  header,
  table,
}) => {
  const {
    options: {
      icons: { IconDotsVertical },
      localization,
      muiTableHeadCellColumnActionsButtonProps,
    },
  } = table;
  const { column } = header;
  const { columnDef } = column;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const mTableHeadCellColumnActionsButtonProps =
    muiTableHeadCellColumnActionsButtonProps instanceof Function
      ? muiTableHeadCellColumnActionsButtonProps({ column, table })
      : muiTableHeadCellColumnActionsButtonProps;

  const mcTableHeadCellColumnActionsButtonProps =
    columnDef.muiTableHeadCellColumnActionsButtonProps instanceof Function
      ? columnDef.muiTableHeadCellColumnActionsButtonProps({
          column,
          table,
        })
      : columnDef.muiTableHeadCellColumnActionsButtonProps;

  const iconButtonProps = {
    ...mTableHeadCellColumnActionsButtonProps,
    ...mcTableHeadCellColumnActionsButtonProps,
  };

  return (
    <>
      <Tooltip
        withArrow
        openDelay={1000}
        position="top"
        label={iconButtonProps?.title ?? localization.columnActions}
      >
        <ActionIcon
          aria-label={localization.columnActions}
          onClick={handleClick}
          size="sm"
          {...iconButtonProps}
          sx={(theme) => ({
            height: '2rem',
            margin: '-4px -2px',
            opacity: 0.5,
            transform: 'scale(0.85)',
            transition: 'opacity 150ms',
            width: '2rem',
            '&:hover': {
              opacity: 1,
            },
            ...(iconButtonProps?.sx instanceof Function
              ? iconButtonProps.sx(theme)
              : (iconButtonProps?.sx as any)),
          })}
          // title={undefined}
        >
          <IconDotsVertical />
        </ActionIcon>
      </Tooltip>
      {anchorEl && (
        <MRT_ColumnActionMenu
          anchorEl={anchorEl}
          header={header}
          setAnchorEl={setAnchorEl}
          table={table}
        />
      )}
    </>
  );
};
