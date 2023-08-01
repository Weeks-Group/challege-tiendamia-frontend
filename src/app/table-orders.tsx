'use client';
import TableToolbar from '@/components/table-toolbar';
import { useState } from 'react';
import { Table } from '@/components/table';
import { TABLE_HEAD_ORDERS } from './struct';
import { fetchOrdersApprove, fetchOrdersTraveling, mutateDump } from '@/services';

type Props = {
  data: any;
};

export const TableOrders = ({ data: orders }: Props) => {
  const [data, setData] = useState(orders);
  const handleFetch = async ({
    initial,
    last,
    reset,
    dump,
  }: {
    initial?: string | Date | any;
    last?: string | Date | any;
    reset?: boolean;
    dump?: boolean;
  }) => {
    if (dump) return await mutateDump();
    if (reset) return setData(orders);
    if (initial && last) {
      return setData(await fetchOrdersTraveling({ params: { initial, last } }));
    }
    const resolve = await fetchOrdersApprove();
    return setData(resolve);
  };

  return (
    <>
      <TableToolbar quantity={data?.length || 0} handleFetch={handleFetch} orders={data} />

      {data?.length > 0 && <Table dataStruct={TABLE_HEAD_ORDERS} data={data || null} />}
    </>
  );
};
