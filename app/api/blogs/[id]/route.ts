import { updatePost, deletePost} from "../../../lib/data"
import { NextResponse } from "next/server"

export const  GET = async (req: Request, res: Response)=>{
    console.log('Single blog')
    return
}

export const PUT = async (req:Request, res:Response)=>{
    const id = req.url.split('blogs/')[1]
    const {title, description} = await req.json()
    try{
        updatePost({title, description, id})
        return NextResponse.json({message: 'Updated'}, {status: 201})
    }
    catch(err){
        return NextResponse.json({error: 'Something wrong'}, {status: 500})
    }
}

export const DELETE = async (req:Request, res:Response)=>{
    const id = req.url.split('blogs/')[1]
    try{
        deletePost(id)
        return NextResponse.json({message: 'Deleted Successfully'}, {status: 200})
    }
    catch(err){
        return NextResponse.json({error: 'Something wrong'}, {status: 500})
    }
}