import { users } from "@/app/data/users";


export default async function UserPage({ params }: {params: Promise<{id: string}> }) {
    const { id } = await params

    const user = users.find((u) => u.id === id)

    if(!user) {
        return <h1>User not found</h1>
    }


    return (
        <div>
            <h1>{user.name}</h1>
            <p>Age: {user.age} </p>
            <p>Id: {user.id}</p>
        </div>
    )
}