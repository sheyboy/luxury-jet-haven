
import React, { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  opacity?: number;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  src, 
  poster = '', 
  opacity = 0.8
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const loadVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.error('Error autoPlaying video: ', err);
      }
    };

    loadVideo();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        video.play().catch(err => console.error('Error playing video on visibility change:', err));
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className="video-background animate-fade-in"
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        style={{ opacity }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="background-overlay"></div>
    </>
  );
};

export default VideoBackground;
