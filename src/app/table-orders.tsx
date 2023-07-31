"use client";
import TableToolbar from "@/components/table-toolbar";
import { useState } from "react";
import { Table } from "@/components/table";
import { TABLE_HEAD_ORDERS } from "./struct";

const fetchOrdersTraveling = async ({
  params,
}: {
  params: { initial: string | Date; last: string | Date };
}) => {
  const res = await fetch(
    `${String(process.env.API_URL)}/orders/findTraveling?initial=${
      params.initial
    }&last=${params.last}`
  );
  const data = await res.json();
  return data;
};

const fetchOrdersApprove = async () => {
  try {
    const res = await fetch(
      `${String(process.env.API_URL)}/orders/findApprove`
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error("Error fetching data:", error.message);
  }
};

type Props = {
  data: any;
};

export const TableOrders = ({ data: orders }: Props) => {
  const [data, setData] = useState(orders);
  const handleFetch = async ({
    initial,
    last,
  }: {
    initial?: string | Date | any;
    last?: string | Date | any;
  }) => {
    if (initial && last) {
      setData(await fetchOrdersTraveling({ params: { initial, last } }));
    } else {
      const resolve = await fetchOrdersApprove();
      setData(resolve);
    }
  };

  return (
    <>
      <TableToolbar quantity={data?.length || 0} handleFetch={handleFetch} />

      {data.length > 0 && (
        <Table dataStruct={TABLE_HEAD_ORDERS} data={data || null} />
      )}
    </>
  );
};
