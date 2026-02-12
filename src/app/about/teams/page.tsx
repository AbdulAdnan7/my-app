import Link from "next/link"
import { users } from '../../data/users'

const page = () => {
    return (
        <>
        <div>
            <h1>Users</h1>


            {
                users.map((user) => (
                    <div key={user.id}>
                        <Link href={`/about/teams/${user.id}`}>{user.name}</Link>
                    </div>
                ))
            }
        </div>
        </>
    )
}

export default page