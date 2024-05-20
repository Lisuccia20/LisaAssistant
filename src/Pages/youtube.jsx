import React, {useEffect, useState} from 'react';
import { response } from '../Utils/youtubeAPI';
import SearchBar from '../Components/SearchBar';
import VideoCard from "../Components/VideoCard";
function Youtube(props) {
    const [values, setValues] = useState('music')
    const [videos, setVideos] = useState([])
    const [videoPlayer, setVideoPlayer] = useState()
    const search = () => {
        response(values).then(data => {
            setVideos(data.data);
            console.log(data)
        });
    }
    return (
        <>
            <SearchBar search={search} setValues={setValues} />
            <div className="flex flex-wrap cardsContainer">
                {videos.map((video, idx) => (
                    video.category === 'Songs' && (
                        <VideoCard
                            key={video.videoId}
                            setVideoPlayer={setVideoPlayer}
                            title={video.title}
                            thumb={video.thumbnails[1]?.url}
                            id={video.videoId}
                            artist={video.artists[0]}
                        />
                    )
                ))}
            </div>
            <div className="videoPlayer">
                <iframe
                    className="frame"
                    width="100"
                    height="100"
                    allow='autoplay;'
                    src={`https://www.youtube.com/embed/${videoPlayer}?autoplay=1&controls=0`}>
                </iframe>
            </div>
        </>
    );
}

export default Youtube;