import ConnectMongoDB from '@/lib/mongodb';
import user from '@/models/User';
import { NextResponse } from 'next/server';

export async function GET(request) {
  await ConnectMongoDB();

  try {
    const allData = await user.find({}).exec();
    return NextResponse.json(allData);
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong!' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const { firstName, lastName, email } = await request.json();

  await ConnectMongoDB();

  try {
    const newResponse = await user.create({
      firstName,
      lastName,
      email,
    });

    console.log('New User Response:', newResponse);

    return NextResponse.json(
      { message: 'User Response Posted' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong!' },
      { status: 500 }
    );
  }
}
