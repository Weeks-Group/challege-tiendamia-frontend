export const fetchOrdersTraveling = async ({
                                             params,
                                           }: {
  params: { initial: string | Date; last: string | Date };
}) => {
  const res = await fetch(
    `${String(process.env.API_URL)}/orders?status=Traveling&initial=${
      params.initial
    }&last=${params.last}`,
  );
  const data = await res.json();
  return data;
};

export const fetchOrdersApprove = async () => {
  try {
    const res = await fetch(
      `${String(process.env.API_URL)}/orders?status=Approve`,
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error('Error fetching data:', error.message);
  }
};

export const fetchOrders = async () => {
  const res = await fetch(`${String(process.env.API_URL)}/orders`, {
    next: {
      revalidate: 60,
    },
  });

  const data = await res.json();
  return data;
};
export const mutateDump = async () => await fetch(`${String(process.env.API_URL)}/dumps`, {
  cache: 'no-store',
  method: 'POST',
  body: '{}',
});

export const fetchOrderId = async (id: string) => {
  const res = await fetch(`${String(process.env.API_URL)}/orders/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  const data = await res.json();
  return data;
};
