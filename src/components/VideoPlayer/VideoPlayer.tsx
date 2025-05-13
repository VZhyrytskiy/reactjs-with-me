import { useRef } from "react";

function VideoPlayer() {
    const videoRef = useRef<HTMLVideoElement>(null);
    console.log(videoRef);

    const handlePlay = () => {
       console.log('Play button clicked!');
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handlePause = () => {
        console.log('Pause button clicked!');
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    const handleForward = () => {
        console.log('Forward button clicked!');
        if (videoRef.current) {
            videoRef.current.currentTime += 10; // Skip forward 10 seconds
        }
    };

    const handleBackward = () => {
        console.log('Backward button clicked!');
        if (videoRef.current) {
            videoRef.current.currentTime -= 10; // Skip backward 10 seconds
        }
    };

    return (
        <div>
            <h1 className="mb-8">Video Player</h1>
            <video width="600" className="mb-4" ref={videoRef}>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="flex justify-center gap-2 ">
                <button onClick={handlePlay} className="w-20">Play</button>
                <button onClick={handlePause} className="w-20">Pause</button>
                <button onClick={handleForward} className="w-20">&gt; 10s</button>
                <button onClick={handleBackward} className="w-20">&lt; 10s</button>
            </div>
        </div>
    );
}

export default VideoPlayer;