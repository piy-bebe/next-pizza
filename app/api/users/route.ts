import { NextResponse } from 'next/server';
import { prisma } from '../../../prisma/prisma-client.ts';

export async function GET() {
  const users = await prisma;

  return NextResponse.json({
    users: ['user1', 'user2', 'user3'],
  });
}
