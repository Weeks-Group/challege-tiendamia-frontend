const fetchOrderId = async (id: string) => {
    const res = await fetch(`${String(process.env.API_URL)}/orders/${id}`, {
        next: {
            revalidate: 60
        }
    })
    console.log(res)

    const data = await res.json()
    return data
}
export default async function ItemDetail({params}: any) {
    const {id} = params
    const order = await fetchOrderId(id)
    console.log(order)

    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            {order?.items?.map?.((element: any) => (
                <div key={element.id}>
                    <h1>{element.item.title}</h1>
                </div>
            ))}
        </main>
    )
}
