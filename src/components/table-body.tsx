import React from "react";
import TableRow from "@/components/table-row";
import { CONSTANT_TABLE } from "@/utils/types";

export type navigateHandleProps<K = string> = {
  edit: (id: K) => string;
  view: (id: K) => string;
  root?: string;
  new?: string;
  list?: string;
};
type Props<T, K> = {
  data: T[];
  dataStruct: CONSTANT_TABLE[];
  navigateHandle?: navigateHandleProps<K>;
};
const TableBody = <T extends Record<string, unknown>, K>({
  data,
  dataStruct,
}: Props<T, K>) => {
  return (
    <tbody>
      {data.map((row: any, _index) =>
        row ? <TableRow key={row.id} row={row} params={dataStruct} /> : null
      )}
    </tbody>
  );
};

export default TableBody;
