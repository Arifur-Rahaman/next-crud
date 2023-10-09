import { NextResponse } from "next/server"

export const GET = async (req: Request, res: Response) =>{
    console.log('Get Request')
    return NextResponse.json({data: 'All post will be appear here'})
}