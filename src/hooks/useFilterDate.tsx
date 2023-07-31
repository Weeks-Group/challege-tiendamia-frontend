import dayjs from "dayjs";
import { useState } from "react";

type Props = {
  handleSaveData: (date?: {
    initial?: string | Date | any;
    last?: string | Date | any;
  }) => void ;
};

export const useFilter = ({ handleSaveData }: Props) => {
  const [date, setDate] = useState<{ initial?: string; last?: string }>({});

  const validationDates = (type: string, value: string | Date) => {
    if (type === "initial" && dayjs(value).isAfter(date.last)) {
      alert("Wrong range date");
      return false;
    } else if (type === "last" && dayjs(value).isBefore(date.initial)) {
      alert("Wrong range date");
      return false;
    }
    return true;
  };

  const handleDatePicker = (setValue: string, save: string | Date) => {
    if (validationDates(setValue, save)) {
      setDate((prev) => ({ ...prev, [setValue]: save }));
    }
  };

  const handleSaveDate = () => {
    if (date.initial && date.last) {
      handleSaveData({ initial: date.initial, last: date.last });
    } else {
      alert("Select Dates");
    }
  };

  return { handleDatePicker, handleSaveDate, date };
};
