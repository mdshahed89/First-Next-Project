export default async function getSinglePost(id) {
    
    

    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    return post.json()

}