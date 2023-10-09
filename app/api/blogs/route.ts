import { NextResponse } from "next/server"
import {getPosts, addNewPost} from '../../lib/data'


export const GET = async (req: Request, res: Response) =>{
    try {
        const posts = getPosts()
        return NextResponse.json({data: posts}, {status:200})
    } catch (error) {
        return NextResponse.json({message: "Some error happened"}, {status: 500})
    }
}

export const POST = async (req:Request, res: Response) => {
    const {title, description} = await req.json()
    try{
        addNewPost({title, description, id: Date.now().toString()})
        return NextResponse.json({message: 'created'}, {status: 201})
    }
    catch(err){
        return NextResponse.json({error: err}, {status: 500})
    }
}