import axios from 'axios'


const baseURL = 'https://youtube-music6.p.rapidapi.com/ytmusic/'



export const response = async(query) => {
    const options = {
        params:{
            query: query
        },
        headers: {
            'X-RapidAPI-Key': 'ceed9a7a05msh972896f20825993p10fe35jsnc48cb4e65d1e',
            'X-RapidAPI-Host': 'youtube-music6.p.rapidapi.com'
        }
    };


    return await axios.get(`${baseURL}`, options)
}