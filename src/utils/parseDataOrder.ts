import dayjs from "dayjs";

export const parseDataOrder = (orders: any[]) => {
  console.log(orders, "ORDENES PARA IMPRIMIR EXCEL");

  const parseOrder = orders?.map((order) => ({
    id: order.id,
    createDate: dayjs(order.createDate).format("YYYY/MM/DD"),
    status: order.status,
    shippingAddress: order.shippingAddress,
    shippingPromise: dayjs(order.shippingPromise).format("YYYY/MM/DD"),
    clientId: order.clientId,
    clientName: order.client.name,
    quantity_items: order.items.length,
    total_items: order.items.reduce(
      (stack: number, item: any) => stack + item.item.quantity,
      0
    ),
  }));

  return { parseOrder };
};
