import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Bookings API endpoint' });
}

export async function POST() {
  return NextResponse.json({ message: 'Booking created' });
}