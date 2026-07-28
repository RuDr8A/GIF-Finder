import React, { useEffect } from 'react'
import { fetchPhotos, fetchVideos, fetchGIFs } from '../api/mediaApi'
import { useSelector, useDispatch } from 'react-redux'
import { setLoading, setResults, setError } from '../redux/features/searchSlice'
import ResultCard from './ResultCard'

const ResultGrid = () => {
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)
    
    const dispatch = useDispatch();

    useEffect(function (){

        const getData = async () => {
            if (!query) return; 

            dispatch(setLoading());

            try {
                // Initialize info as an empty array
                let info = []; 
                
                // 1. Used lowercase to match your Redux state
                if (activeTab === 'photos') {
                    const data = await fetchPhotos(query);
                    if (data && data.results) {
                        info = data.results.map((item) => ({
                            id: item.id,
                            type: 'Photo',
                            title: item.alt_description || 'Photo',
                            thumbnail: item.urls.small,
                            src: item.urls.full,
                        }));
                    }
                } 
                else if (activeTab === 'videos') {
                    const data = await fetchVideos(query);
                    // 2. Used data.videos for Pexels
                    if (data && data.videos) {
                        info = data.videos.map((item) => ({
                            id: item.id,
                            type: 'Video',
                            title: item.user.name || 'Video',
                            thumbnail: item.image,
                            // 3. Corrected path for Pexels video link
                            src: item.video_files[0].link, 
                        }));
                    }
                }
                else if (activeTab === 'gifs') {
                    const data = await fetchGIFs(query);
                    // 4. Used data.data for Giphy
                    if (data && data.data) {
                        info = data.data.map((item) => ({
                            id: item.id,
                            type: 'GIF',
                            title: item.title || 'GIF',
                            // 5. Corrected paths for Giphy images
                            thumbnail: item.images.fixed_width.url,
                            src: item.images.original.url,
                        }));
                    }
                }
                
                console.log("Normalized Info Array:", info);
                
                // 6. Dispatch the clean 'info' array to Redux!
                dispatch(setResults(info));

            } catch (err) {
                console.error(err);
                dispatch(setError("Failed to fetch data"));
            }
        }

        getData() ;

    },[query, activeTab])


    if(error) return <h1 className="text-white text-2xl p-10">Error fetching data...</h1>
    if(loading) return <h1 className="text-white text-2xl p-10">Loading...</h1>

    return (
        
        <div className="p-10 w-full flex flex-wrap gap-10 overflow-auto justify-center">
            {results.map((item) => (
                
                <ResultCard key={item.id} item={item} />
            ))}
        </div>
    )
}

export default ResultGrid