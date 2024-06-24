import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const Email = searchParams.get('email');
 
  try {
    if (!Email) throw new Error('Email required');
    await sql`INSERT INTO Email (email, date_added) VALUES (${Email}, CURRENT_DATE);`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const email = await sql`SELECT * FROM Email;`;
  return NextResponse.json({ email }, { status: 200 });
}