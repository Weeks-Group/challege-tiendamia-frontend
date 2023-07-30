"use client";
import React, {createElement, PropsWithChildren, useMemo} from "react";

type Props = {
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    wrap?: boolean;
    key: string;
    sx?: Record<string, any>
    head?: boolean;
}

export default function TableCell({
                                      head, align, children, key, wrap, sx,

                                  }: PropsWithChildren<Props>) {

    const newChildren = useMemo(() => {
        if (wrap) {
            return <div className="flex items-center">{children}</div>
        }
        return children
    }, [wrap, children]);

    const component = useMemo(() => {
        if (head) {
            return createElement('th', {style: sx, key, scope: "col", className: "px-4 py-3"}, newChildren);
        }
        return createElement('td', {
            style: sx,
            key,
            className: `px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white items-[${align}]`
        }, newChildren);
    }, [head, newChildren, key, align, sx]);
    return component;
}
