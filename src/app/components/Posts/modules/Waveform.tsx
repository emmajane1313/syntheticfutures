import { FunctionComponent, JSX, useEffect, useRef } from "react";
import { HiOutlinePlayPause } from "react-icons/hi2";
import WaveSurfer from "wavesurfer.js";
import { INFURA_GATEWAY } from "../../../lib/constants";

const Waveform: FunctionComponent<{
  enlace: string;
  waveColor: string;
  progressColor: string;
}> = ({ enlace, waveColor, progressColor }): JSX.Element => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef<null | WaveSurfer>(null);

  useEffect(() => {
    if (waveformRef?.current) {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }

      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor,
        progressColor,
        height: 16,
      });

      wavesurfer.current.load(`${INFURA_GATEWAY}/ipfs/${enlace}`);
    }

    return () => {
      wavesurfer.current?.destroy();
    };
  }, [wavesurfer, enlace, waveColor, progressColor]);

  const handlePlayPause = () => {
    if (wavesurfer.current) {
      if (wavesurfer.current.isPlaying()) {
        wavesurfer.current.pause();
      } else {
        wavesurfer.current.play();
      }
    }
  };

  return (
    <div
      className={`relative flex justify-center p-1 items-center w-3/4 md:w-1/2 h-10`}
      style={{
        background: waveColor + "1A",
      }}
    >
      <div className="relative w-full h-fit flex flex-row gap-1.5 items-center justify-center">
        <div
          className="relative flex w-fit h-fit items-center justify-center flex cursor-pointer active:scale-95"
          onClick={() => handlePlayPause()}
        >
          <HiOutlinePlayPause color={waveColor} size={15} />
        </div>
        <div
          className="relative w-full h-fit justify-center items-center cursor-pointer"
          ref={waveformRef}
        />
      </div>
    </div>
  );
};

export default Waveform;
