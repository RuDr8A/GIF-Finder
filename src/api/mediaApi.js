import axios from 'axios' 

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_API ;
const PEXEL_KEY = import.meta.env.VITE_PEXEL_API ;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_API ;

export async function fetchPhotos(query, page = 1, per_page = 20) {
    try {
        const res = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query, page, per_page },
            headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` }
        });
        
        
        
        // Return the results array so your React component can map over it later
        return res.data; 

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export async function fetchVideos(query, page = 1, per_page = 15) {
    try {
        const res = await axios.get('https://api.pexels.com/videos/search', {
            params: { query, page, per_page },
            headers: { Authorization: PEXEL_KEY }
        });
        
         
        
        // Return the results array so your React component can map over it later
        return res.data; 

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export async function fetchGIFs(query, page = 1, per_page = 15) {
    try {
        // Calculate the starting position for the results based on the current page
        const offset = (page - 1) * per_page;

        const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
            params: { 
                api_key: GIPHY_KEY, 
                q: query, 
                limit: per_page, 
                offset: offset 
            }
        });
        
        
        
        // Return the results array so your React component can map over it later
        return res.data; 

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}