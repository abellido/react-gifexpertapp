
const api_key = 'cJQCLLg7DiSvFPQ74GJu6DUWMTdj9IVN';

export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&offset=0&rating=g&lang=es&api_key=${api_key}`;
    const respuesta = await fetch(url);
    const { data: datos } = await respuesta.json();

    const gifs = datos.map(img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }

    })

    return gifs;
}