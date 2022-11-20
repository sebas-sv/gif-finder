export const getGifs = async (category) => {

    const API_KEY = import.meta.env.VITE_GIPHY_API_KEY
    const LIMIT = '6'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${LIMIT}`
    const resp = await fetch(url)
    const { data } = await resp.json()

    //console.log('data', data)

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs
};