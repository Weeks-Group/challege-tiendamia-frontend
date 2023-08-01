"use client";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useFilter } from "@/hooks/useFilterDate";
type Props = {
  handleSaveData: (date?: {
    initial?: string | Date | any;
    last?: string | Date | any;
  }) => void;
};

export const DataPicker = ({ handleSaveData }: Props) => {
  const { handleDatePicker, handleSaveDate, date } = useFilter({
    handleSaveData,
  });

  return (
    <>
      <div className="flex flex-row gap-2">
        <div className="flex flex-row gap-2 justify-center items-center">
          <h5>Initial Date</h5>
          <input
            value={date.initial || ""}
            className="py-1 px- 2 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            type="date"
            onChange={({ target }) => handleDatePicker("initial", target.value)}
          />
        </div>
        <div className="flex flex-row gap-2 justify-center items-center">
          <h5>Last Date</h5>
          <input
            value={date.last || ""}
            disabled={!date.initial}
            className="py-1 px- 2 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            type="date"
            onChange={({ target }) => handleDatePicker("last", target.value)}
          />
        </div>
        <button
          className="cursor-pointer px-2 py-1 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none enabled:hover:bg-gray-100 enabled:hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:border-blue-500 dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 dark:text-blue-500"
          onClick={handleSaveDate}
          disabled={!date.last}
        >
          Search
        </button>
      </div>
    </>
  );
};
