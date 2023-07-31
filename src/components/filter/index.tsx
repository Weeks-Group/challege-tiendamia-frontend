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
        <div>
          <h5>Initial Date</h5>
          <input
            value={date.initial || ""}
            className="font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            type="date"
            onChange={({ target }) => handleDatePicker("initial", target.value)}
          />
        </div>
        <div>
          <h5>Last Date</h5>
          <input
            value={date.last || ""}
            disabled={!date.initial}
            className="font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            type="date"
            onChange={({ target }) => handleDatePicker("last", target.value)}
          />
        </div>
        <button
          className="font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={handleSaveDate}
        >
          Buscar
        </button>
      </div>
    </>
  );
};
