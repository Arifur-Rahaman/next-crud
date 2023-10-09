interface Post{
    title : string
    description: string
    id: string
}

let posts: Post[] = []

//*Get all post */
export const getPosts = ()=>{
    return posts
}

//Create post
export const addNewPost = (post:Post)=>{
    posts.push(post)
    return posts
}

//Update post
export const updatePost = (post: Post)=>{
    const index = posts.findIndex((p)=>p.id === post.id)
    if(index<0){
        throw new Error('Post not found')
    }
    else{
        posts[index].title = post.title || posts[index].title
        posts[index].description = post.description || posts[index].description
    }

    console.log('inside update post')

}

//Delete post
export const deletePost = (id:string) =>{
    posts = posts.filter((post: Post)=>post.id !== id)
    return posts
}