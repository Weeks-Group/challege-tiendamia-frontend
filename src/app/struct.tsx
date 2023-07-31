import { CONSTANT_TABLE } from "@/utils/types";
import Link from "next/link";
import dayjs from "dayjs";
export const TABLE_HEAD_ORDERS: CONSTANT_TABLE[] = [
  {
    id: "id",
    label: "ID",
    align: "left",
    wrapComponent: (value: any, id: string) => (
      <Link
        href={{
          pathname: `/${id}`,
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {value}
      </Link>
    ),
  },
  {
    id: "shippingAddress",
    label: "Dirección",
    align: "center",
  },
  {
    id: "shippingPromise",
    label: "Promesa de Entrega",
    align: "center",
    wrapComponent: (value: any) => (
      <label>{dayjs(value).format("YYYY-MM-DD")}</label>
    ),
  },
  {
    id: "status",
    label: "Estado",
    align: "center",
  },
  {
    id: "createDate",
    label: "F. Creación",
    align: "center",
    wrapComponent: (value: any) => (
      <label>{dayjs(value).format("YYYY-MM-DD")}</label>
    ),
  },
  { id: "", disableSort: true },
];
