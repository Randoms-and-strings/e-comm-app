import { type NextRequest, NextResponse } from 'next/server'

export default function GET(){
    return NextResponse.json({ready:"ok"},{status:200});
}