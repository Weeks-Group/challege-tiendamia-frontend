import Image from 'next/image';
import Tooltip from '@/components/tooltip';
import { currentFormat } from '@/utils/contants';
import { fetchOrderId } from '@/services';
import dayjs from 'dayjs';

export default async function ItemDetail({ params }: any) {
  const { id } = params;
  const order = await fetchOrderId(id ?? '');
  console.log(order);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 md:p-24">
      <div className="rounded overflow-hidden shadow-lg h-full relative bg-gray-100 dark:bg-black  p-24 flex flex-col gap-2">
        <h1 className="font-bold text-xl my-4 text-center">Order {order?.id}</h1>
        <div className="flex gap-12  items-center justify-center">
        <p className=" text-sm my-4 text-center">Status: {order?.status}</p>
        <p className=" text-sm my-4 text-center">Created Date: {dayjs(order?.createDate).format("DD/MM/YYYY")}</p>
        <p className=" text-sm my-4 text-center">Promise Date: {dayjs(order?.shippingPromise).format("DD/MM/YYYY")}</p>
        <p className=" text-sm my-4 text-center">Address: {order?.shippingAddress}</p>
        </div>
        <div className="flex gap-12 items-center justify-center">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        Quantity: {order?.items?.reduce((prev: any,current: { item :{quantity: any;} })=> prev + current.item.quantity, 0)}
                </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        Price: {currentFormat(order?.items?.reduce((prev: any,current: { item :{price: any;} })=> prev + current.item.price, 0))}
                </span>
        
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {order?.items?.map?.((element: any) => (
            <div
              className="w-72 rounded overflow-hidden shadow-lg h-96 flex flex-col justify-between relative bg-white"
              key={element.itemId}
            >
              {element?.item?.url && (
                <Image
                  className="w-full h-full max-h-[185px]"
                  src={element.item.url}
                  alt="Sunset in the mountains"
                  width={185}
                  height={185}
                  quality={100}
                />
              )}
              <Tooltip text="Cantidad" value={element?.item?.quantity ?? 0} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{element?.item?.title ?? ''}</div>
                <p className="text-gray-700 text-base">{element?.item?.description ?? ''}</p>
              </div>
              <div className="px-6 pt-4 pb-2 text-center">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {currentFormat(element?.item?.price ?? 0)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
