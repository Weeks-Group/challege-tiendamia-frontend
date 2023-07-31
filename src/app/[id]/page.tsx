import Image from 'next/image';
import Tooltip from '@/components/tooltip';
import { currentFormat } from '@/utils/contants';
import { fetchOrderId } from '@/services';

export default async function ItemDetail({ params }: any) {
  const { id } = params;
  const order = await fetchOrderId(id ?? '');
  console.log(order);

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-12 md:p-24'>
      <h1 className='font-bold text-xl my-4'>Order {order?.id}</h1>
      <div className='flex flex-col md:flex-row items-center justify-between gap-3'>
        {order?.items?.map?.((element: any) => (
          <div
            className='max-w-sm rounded overflow-hidden shadow-lg h-full relative bg-white'
            key={element.itemId}
          >
            {element?.item?.url && (
              <Image
                className='w-full h-full max-h-[185px]'
                src={element.item.url}
                alt='Sunset in the mountains'
                width={20}
                height={185}
                quality={100}
              />
            )}
            <Tooltip text='Cantidad' value={element?.item?.quantity ?? 0} />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>{element?.item?.title ?? ''}</div>
              <p className='text-gray-700 text-base'>
                {element?.item?.description ?? ''}
              </p>
            </div>
            <div className='px-6 pt-4 pb-2'>
              <span
                className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                {currentFormat(element?.item?.price ?? 0)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
