import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({
    users: ['user1', 'user2', 'user3'],
  });
}
