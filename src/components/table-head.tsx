import React from 'react';
import TableCell from "@/components/table-cell";

type Props = {
    order?: 'asc' | 'desc';
    orderBy?: string;
    headLabel: any[];
    rowCount?: number;
    numSelected?: number;
    onSort?: (id: string) => void;
    onSelectAllRows?: (checked: boolean) => void;
}
const TableHead = ({headLabel}: Props) => {
    return (
        <thead
            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            {headLabel.map((headCell) => (
                <TableCell key={headCell.id} head sx={{

                    width: headCell.width,
                    minWidth: headCell.minWidth,
                    flexDirection: 'row',
                    ...(headLabel.at(-1).id === headCell.id && {
                        padding: 0,
                    }),
                }}>
                    {headCell.label}
                </TableCell>
            ))}
        </tr>
        </thead>
    );
};

export default TableHead;
