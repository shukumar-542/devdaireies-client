export const updateBlogStatus = async (id) =>{
    const response = await fetch(`http://localhost:5000/blog/update/${id}`,{
        method : 'PATCH',
    })
    const data = await response.json()
    return data
}
export const denyBlogStatus = async (id) =>{
    const response = await fetch(`http://localhost:5000/blog/deny/${id}`,{
        method : 'PATCH',
    })
    const data = await response.json()
    return data
}