import { useContext, useEffect, useRef } from "react";
import AudioModal from "./AudioModal";
import AudioContext from "../../store/audio-context";

import PlayIcon from "../icons/PlayIcon";
import PauseIcon from "../icons/PauseIcon";

const Audio = ({ onGetMusic, firstLoad }) => {
  const audioPlayer = useRef();
  const AudioCtx = useContext(AudioContext);
  const { isPlaying } = AudioCtx;

  const playAudio = () => {
    AudioCtx.updateIsPlaying(true);
    audioPlayer.current.volume = 0.5;
    audioPlayer.current.play();
  };

  const pauseAudio = () => {
    AudioCtx.updateIsPlaying(false);
    audioPlayer.current.volume = 0.5;
    audioPlayer.current.pause();
  };

  useEffect(() => {
    onGetMusic(audioPlayer);
    // console.log("getting audio ref...");
  }, [audioPlayer.current]);

  // useEffect(() => {
  //   console.log(audioPlayer);
  //   if (isPlaying) {
  //     audioPlayer.current.play();
  //   } else if (!isPlaying) {
  //     audioPlayer.current.pause();
  //   }
  // }, [isPlaying]);

  return (
    <AudioModal>
      <div>
        <audio src="/audio/audio.mp3" ref={audioPlayer}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
      <div className="text-dark-green">
        {!isPlaying && (
          <button
            disabled={firstLoad}
            className={` rounded-full  ${
              !firstLoad && "bg-white-me shadow-xl"
            }`}
            onClick={playAudio}
          >
            <PlayIcon size="2.4rem" />
          </button>
        )}
        {isPlaying && (
          <button
            disabled={firstLoad}
            className={` rounded-full  ${
              !firstLoad && "bg-white-me shadow-xl"
            }`}
            onClick={pauseAudio}
          >
            <PauseIcon size="2.4rem" />
          </button>
        )}
      </div>
    </AudioModal>
  );
};

export default Audio;
