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