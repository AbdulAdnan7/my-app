import { connectDB } from "../../../lib/db";
import User from "../../../models/User";

export async function GET() {
    await connectDB()

    const users = await User.find()
    return Response.json(users)

}

export async function POST() {
    await connectDB()

    const body = await req.json;
    const user = await User.create(body)

    return Response.json(user)
}