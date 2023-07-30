import React from 'react';
import TableHead from "@/components/table-head";
import {ActionsProps, CONSTANT_TABLE, Paginator} from "@/utils/types";
import TableBody from "@/components/table-body";

interface ListPageProps<T, K = string> {
    isLoading?: boolean;
    data: T[];
    dataStruct: CONSTANT_TABLE[];
    navigateHandle?: VoidFunction;
    actions?: ({value}: ActionsProps) => JSX.Element;
    actionParamId?: string;
    paginator?: Paginator;
}

export default function Table<T extends Record<string, unknown>, K>({dataStruct, data}: ListPageProps<T, K>) {
    return (
        <div className="overflow-x-auto">

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <TableHead
                    headLabel={dataStruct}/>
                <TableBody dataStruct={dataStruct} data={data}/>
            </table>
        </div>
    );
};

