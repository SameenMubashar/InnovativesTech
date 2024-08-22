import user from '@/models/User';
import ConnectMongoDB from '@/lib/mongodb';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { id } = params;

  await ConnectMongoDB();
  const userResponse = await user.findOne({ _id: id });
  return NextResponse.json({ userResponse }, { status: 200 });
}

export async function PUT(request, { params }) {
  const { id } = params;
  const { firstName, lastName, email } = await request.json();

  await ConnectMongoDB();

  try {
    const updatedUser = await user.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
        email,
      },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(
      { message: 'User updated successfully', event: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating User:', error);
    return NextResponse.json({ error: 'Failed to update user' });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;

  await ConnectMongoDB();

  const userResponse = await user.findOne({ _id: id });

  if (!userResponse) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  } else {
    await user.findByIdAndDelete(id);
  }

  return NextResponse.json({ message: 'User deleted' }, { status: 200 });
}
