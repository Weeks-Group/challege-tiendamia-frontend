import {NextResponse} from "next/server";

export async function GET(
    request: Request,
    {params}: { params: { id: string } }
) {
    const slug = params.id
    console.log(slug)
    const res = await fetch(`${String(process.env.API_URL)}/orders/${slug}`);
    const data = await res.json();
    return NextResponse.json(data)
}
