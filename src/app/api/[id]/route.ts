import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const slug = params.id;
  console.log(slug);
  const res = await fetch(`${String(process.env.API_URL)}/orders/${slug}`);
  const data = await res.json();
  return NextResponse.json(data);
}

export async function fetchOrdersTraveling(
  request: Request,
  { params }: { params: { initial: string | Date; last: string | Date } }
) {
  const res = await fetch(
    `${String(process.env.API_URL)}/orders/findTraveling?initial=${
      params.initial
    }&last=${params.last}`
  );
  const data = await res.json();
  return NextResponse.json(data);
}

export async function fetchOrdersApprove(
  request: Request,
  { params }: { params: { id: string } }
) {
  const res = await fetch(`${String(process.env.API_URL)}/orders?status=Approve`);
  const data = await res.json();
  return NextResponse.json(data);
}
