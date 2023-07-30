const fetchPostId = async (id: string) => {
    const res = await fetch(`http://localhost:3000/api/${id}`, {
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
    const post = await fetchPostId(id)
    console.log(post)

    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            {post?.items?.map?.((element: any) => (
                <div>
                    <h1>{element.item.title}</h1>
                </div>
            ))}
        </main>
    )
}
