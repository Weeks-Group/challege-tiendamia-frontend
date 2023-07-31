'use client';
import React, { useState } from 'react';

import { DataPicker } from './filter';

type Props = {
  quantity: number;
  handleFetch: (
    initial?: string | Date | any,
    last?: string | Date | any,
  ) => void;
};

const TableToolbar = ({ quantity, handleFetch }: Props) => {
  const [isApprove, setIsApprove] = useState<boolean>(false);

  return (
    <div
      className='flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4'>
      <div className='flex items-center flex-1 space-x-4'>
        <h5>
          <span className='text-gray-500'>All Products:</span>
          <span className='dark:text-white'>{quantity}</span>
        </h5>

        <label className='flex flex-row gap-1'>
          <input
            checked={isApprove}
            onChange={() => setIsApprove((prev) => !prev)}
            type='checkbox'
            className='
          bg-white border border-gray-200  hover:bg-gray-100 hover:text-primary-700 focus:z-10  focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70
          '
          />
          <h5>Approve</h5>
        </label>
        {isApprove ? (
          <button
            className='font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
            onClick={handleFetch}
          >
            Buscar
          </button>
        ) : (
          <DataPicker handleSaveData={handleFetch} />
        )}
      </div>
      <div
        className='flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3'>
        <button
          type='button'
          onClick={() => handleFetch({ reset: true })}
          className='flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
        >
          <svg
            className='h-3.5 w-3.5 mr-2'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
          >
            <path
              clipRule='evenodd'
              fillRule='evenodd'
              d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
            />
          </svg>
          Reset
        </button>
        <button
          type='button'
          onClick={() => handleFetch({ dump: true })}
          className='flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-yellow-500 bg-white border border-yellow-500 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-yellow-500 dark:hover:text-white dark:hover:bg-gray-700'
        >
          Dump
        </button>

        <button
          type='button'
          className='flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
        >
          <svg
            className='w-4 h-4 mr-2'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'
            />
          </svg>
          Export
        </button>
      </div>
    </div>
  );
};

export default TableToolbar;
