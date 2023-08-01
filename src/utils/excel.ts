import XLSX from "sheetjs-style";
import FileSaver from "file-saver";
import { parseDataOrder } from "./parseDataOrder";

type Props = {
  excelData: any;
  fileName: any;
};

export const exportExcel = ({ excelData, fileName }: Props) => {


   const {parseOrder} = parseDataOrder(excelData); 
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";

  const fileExtension = ".xlsx";

  const exportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(parseOrder);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });

    const data = new Blob([excelBuffer], { type: fileType });

    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return {exportToExcel};
};
