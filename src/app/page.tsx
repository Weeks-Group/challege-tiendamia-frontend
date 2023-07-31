import { TableOrders } from "./table-orders";

const fetchPost = async () => {
  const res = await fetch(`${String(process.env.API_URL)}/orders`, {
    next: {
      revalidate: 60,
    },
  });

  const data = await res.json();
  return data;
};

export default async function Home() {
  const orders = await fetchPost();
  return (
    <main className="h-screen py-3 sm:py-5">
      <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <TableOrders data={orders} />
          <nav
            className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400 gap-1 flex">
              Showing
              <span className="font-semibold text-gray-900 dark:text-white">
                {orders?.length ?? 0}
              </span>
              of
              <span className="font-semibold text-gray-900 dark:text-white">
                {orders?.length ?? 0}
              </span>
            </span>
          </nav>
        </div>
      </div>
    </main>
  );
}
