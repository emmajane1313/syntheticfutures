import {
  FunctionComponent,
  JSX,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { INFURA_GATEWAY_INTERNAL, STREAM } from "../../../lib/constants";
import Image from "next/legacy/image";
import { ColorContext } from "@/app/providers";

const Radio: FunctionComponent<{ dict: any }> = ({ dict }): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const context = useContext(ColorContext);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const canvasContext = canvas.getContext("2d")!;

      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      canvasContext.beginPath();
      canvasContext.moveTo(0, canvas.height / 2);
      canvasContext.lineTo(canvas.width, canvas.height / 2);
      canvasContext.strokeStyle =
        context?.color === "maroon"
          ? "#C92D1F"
          : context?.color === "gris"
          ? "#F2F2F2"
          : "#f6ec7b";
      canvasContext.lineWidth = 2;
      canvasContext.stroke();
    }
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !audioContext || !isPlaying) return;

    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;

    const audioElement = new Audio(STREAM);
    audioElement.crossOrigin = "anonymous";
    const source = audioContext.createMediaElementSource(audioElement);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    audioElement.play();

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext("2d")!;

    const drawWaveform = () => {
      animationRef.current = requestAnimationFrame(drawWaveform);

      analyser.getByteTimeDomainData(dataArray);

      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      canvasContext.beginPath();
      const sliceWidth = canvas.width / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * canvas.height) / 2;
        i === 0 ? canvasContext.moveTo(x, y) : canvasContext.lineTo(x, y);
        x += sliceWidth;
      }

      canvasContext.lineTo(canvas.width, canvas.height / 2);
      canvasContext.strokeStyle =
        context?.color === "maroon"
          ? "#C92D1F"
          : context?.color === "gris"
          ? "#F2F2F2"
          : "#f6ec7b";
      canvasContext.lineWidth = 2;
      canvasContext.stroke();
    };

    drawWaveform();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      analyser.disconnect();
      source.disconnect();
      audioElement.pause();
      audioElement.src = "";
    };
  }, [audioContext, isPlaying, context?.color]);

  const togglePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (audioContext) {
        audioContext.close();
        setAudioContext(null);
      }
    } else {
      const newAudioContext = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
      setAudioContext(newAudioContext);
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full h-fit flex items-center justify-center">
      <div className="relative w-5/6 lg:w-1/2 flex flex-col h-fit gap-3 items-center justify-center">
        <div
          className="relative w-full h-40 flex cursor-pointer"
          onClick={() =>
            window.open("https://www.firstnationsbroadcasting.org/radio")
          }
        >
          <Image
            src={`${INFURA_GATEWAY_INTERNAL}QmVL1rAF6WXDeAx6yCHqEWVnom2NBnLfDYD6Lu4ZKdaxMm`}
            draggable={false}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-full h-fit flex items-center justify-center text-center break-words font-neueL text-base">
          {dict?.radio}
        </div>
        <button
          className="relative w-fit h-fit flex font-york underline cursor-pointer underline-offset-8"
          onClick={togglePlayPause}
        >
          {isPlaying ? dict?.pause : dict?.play}
        </button>
        <canvas className="w-full flex relative h-20" ref={canvasRef} />
      </div>
    </div>
  );
};

export default Radio;
