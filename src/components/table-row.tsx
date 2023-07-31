import { Align, PropsTableRow } from "@/utils/types";
import React from "react";
import TableCell from "@/components/table-cell";

export default function TableRow<T extends Record<string, unknown>>({
  row,
  selected,
  actions,
  onSelectRow,
  params,
  actionParamId,
}: PropsTableRow<T>) {
  const splitRowToParam = (rowTemp: T, id: any): string => {
    const splitter = id.split(".");
    let value: any = splitter.shift();

    if (splitter.length > 0) {
      value = rowTemp[value];
      if (Array.isArray(value)) {
        value = value[0];
      }

      if (value) {
        splitter.forEach((valueId: string) => {
          if (typeof value[valueId] !== "undefined") {
            value = value[valueId];
          }
        });
      }
      return value;
    }

    return row[value] as string;
  };

  return (
    <>
      <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
        {!!onSelectRow && (
          <td className="w-4 px-4 py-3">
            <div className="flex items-center"></div>
          </td>
        )}
        {params.slice(0, -1).map((item, index) => (
          <TableCell key={`${item.id}-${index}`} align={item?.align as Align}>
            {item.wrapComponent
              ? item.wrapComponent(
                  splitRowToParam(row, item.id),
                  row?.id ?? row?._id ?? ""
                )
              : splitRowToParam(row, item.id)}
          </TableCell>
        ))}
      </tr>

    </>
  );
}
