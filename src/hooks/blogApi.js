export const updateBlogStatus = async (id) => {
    const response = await fetch(`https://devdaireies-server-shiningsudipto.vercel.app/blog/update/${id}`, {
        method: 'PATCH',
    })
    const data = await response.json()
    return data
}
export const denyBlogStatus = async (id) => {
    const response = await fetch(`https://devdaireies-server-shiningsudipto.vercel.app/blog/deny/${id}`, {
        method: 'PATCH',
    })
    const data = await response.json()
    return data
}
export const makeROleAdmin = async (id) => {
    const response = await fetch(`https://devdaireies-server-shiningsudipto.vercel.app/users/admin/${id}`, {
        method: 'PATCH',
    })
    const data = await response.json()
    return data
}