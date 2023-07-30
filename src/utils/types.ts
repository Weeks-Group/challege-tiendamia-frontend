import React from "react";

export type paginatorData = {
    count: number;
    page: number;
    limit?: number;
};

export interface CONSTANT_TABLE {
    id: string;
    label?: string;
    align?: string;
    width?: number;
    disableSort?: boolean;
    wrapComponent?: (value: any, id: any) => React.ReactNode;
}

export type ActionsProps = {
    value: any;
    data: any;
};

export type Paginator = {
    paginator: paginatorData;
    refresh: () => void;
    setPaginator: any;
};

export type PropsTableRow<T> = {
    row: T;
    selected?: boolean;
    actions?: ({
                   value,
                   data,
               }: ActionsProps) => JSX.Element;
    onSelectRow?: VoidFunction;
    params: CONSTANT_TABLE[];
    actionParamId?: string;
};

