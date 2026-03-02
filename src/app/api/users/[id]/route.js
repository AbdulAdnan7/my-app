import { connectDB } from "../../../../lib/db";
import User from "../../../../models/User";

export async function DELETE(req, { params }) {
  await connectDB();

  const { id } = await params;

  const deletedUser = await User.findByIdAndDelete(id);

  if (!deletedUser) {
    return Response.json(
      { message: "User not found" },
      { status: 404 }
    );
  }

  return Response.json({
    message: "User deleted successfully",
    deletedUser,
  });
}

export async function PUT(req, { params }) { 
   await connectDB()
   
   const { id } = await params
   const body = await req.json()

   const updatedUser = await User.findByIdAndUpdate(
    id,
    {
        name: body.name,
        email: body.email
    }, { new: true }
   )

   if(!updatedUser) {
    return Response.json(
        { mesage: "User not found" },
        { status: 404 }
    )
   }

   return Response.json({
    message: 'User updated successfully',
    updatedUser
   })
}