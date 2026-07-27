import axios from 'axios' 

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_API ;
const PEXEL_KEY = import.meta.env.VITE_PEXEL_API ;

export async function fetchPhotos(query, page = 1, per_page = 20) {
    try {
        const res = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query, page, per_page },
            headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` }
        });
        
        // Log it to see the exact structure of the Unsplash data
        console.log("Unsplash API Response:", res.data); 
        
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
        
        // Log it to see the exact structure of the Unsplash data
        console.log("Pexel API Response:", res.data); 
        
        // Return the results array so your React component can map over it later
        return res.data; 

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}