import React from 'react';

function VideoCard(props) {
    return (
        <>
            <div className={'cards'} onClick={() => {
                props.setVideoPlayer(props.id)
            }}>
                <img className={'thumb'} src={props.thumb}/>
                <p className={'songTitle'}>{props.title}</p>
                <p className={'songArtist'}>{props.artist[0]}</p>
            </div>
        </>
    );
}

export default VideoCard;