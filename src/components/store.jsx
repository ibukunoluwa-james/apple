import React, { useEffect, useRef, useState } from 'react'

import { hightlightsSlides } from '../constants'
import { pauseImg, playImg, replayImg } from '../utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0, 
    isLastVideo: false,
    isPlaying: false
  });

  const [loadedData, setLoadedData] = useState([])

  const { isEnd, isLastVideo, isPlaying,startPlay,videoId} = video;

  useGSAP(() => {
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId])

  useEffect(() => {
    if(loadedData.length > 3) {
      if(!isPlaying){
        video.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play()
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData])
  
  const handleLoadedMetaData = (i, e) => setLoadedData((pre) => [...pre, e])

  useEffect(() => {
    const currentProgress = 0;
    let span = videoSpanRef.current;
    
    if(span[videoId]){
      let anim = gsap.to(span[videoId], )
    }

  }, [videoId, startPlay])

  const handleProcess = (type, i) => {
    switch (type) {
      case 'video-end':
        setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
        break;

      case 'video-last':
        setVideo((pre) => ({...pre, isLastVideo: true}))
        break;

      case 'video-reset':
        setVideo((pre) => ({...pre, isLastVideo: false, videoId: 0}))
        break;

      case "pause":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;
        
      case 'play': 
        setVideo((pre) => ({...pre, isPlaying: !pre.isPlaying}))
        break;

      default:
        return video;
    }
  }

  return (
    <>
      <div className="items-center flex">
          {hightlightsSlides.map((list, i) => (
              <div key={list.id} id='slider' className='sm:pr-20 pr-10'> 
                  <div className="video-carousel_container">
                    <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                      <video src={list.video} id='video' playsInline={true} preload='auto' muted 
                      ref={(el) => (videoRef.current[i] = el)}
                      onPlay= {() => (
                        setVideo((prevVideo) => ({
                          ...prevVideo, isPlaying: true
                        }))
                      )}
                      onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                      ></video>
                    </div>
                    <div className='absolute top-12 left-[5%] z-10'>
                      {list.textLists.map((text) => (
                        <p key={text} className='text-xl md:text-2xl font medium'>    
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
              </div>
          ))}
      </div>

      <div className='relative flex-center mt-10'>
          <div className="flex-center px-7 py-5 bg-gray-300 backdrop-blur rounded-full">
            {videoRef.current.map((_, i) => (
              <span 
              key={i}
              ref={(el)=>(videoDivRef.current[i] = el)}
              className='mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer'
              >
                <span className='absolute h-full w-full rounded-full' 
                ref={(el) => (videoSpanRef.current[i] = el)} 
                />
              </span>
            ))}
          </div>

          <button className="control-btn">
            <img 
              src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg} 
              alt={isLastVideo ? 'Replay' : !isPlaying ? 'Play' : 'Pause'}  
              onClick={isLastVideo ? () => handleProcess('video-reset') : !isPlaying ?() => handleProcess('play')
              : () => handleProcess('play')
              }
              />
          </button>
      </div>
    </>
  )
}

export default VideoCarousel