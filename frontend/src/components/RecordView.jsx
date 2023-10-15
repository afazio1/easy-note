import { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import SidePage from './SidePage';

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const [aiToggle, setAiToggle] = useState(false);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const handleStart = () => {
    SpeechRecognition.startListening({ continuous: true });
  }
  const handleToggle = () => {
    setAiToggle(!aiToggle);
  }
  if (aiToggle) {
    return (
      <>
        <button onClick={handleToggle}>Back to Raw</button>
        <SidePage transcript={transcript} />
      </>
    )
  }



















  return (
    <div>
      <h1 className='font-custom font-bold text-white lg:text-5xl flex justify-center p-12'>Easy Note</h1>
      {/* <p className='font-custom lg:text-3xl my-5 text-white flex justify-center'>Microphone: {listening ? 'on' : 'off'}</p> */}
      <nav className="w-9/10 rounded-lg bg-blue-400 container mx-auto p-4 flex justify-between items-center ">
        <div className="font-custom container mx-auto flex justify-center items-center">
            <div className="space-x-10">
              {/* Start, Stop, Reset */}
              <button className="lg:text-2xl font-custom text-white hover:text-blue-200" onClick={handleStart}>Start</button>
              <button className="lg:text-2xl font-custom text-white hover:text-blue-200" onClick={SpeechRecognition.stopListening}>Stop</button>
              <button className="lg:text-2xl font-custom text-white hover:text-blue-200" onClick={resetTranscript}>Reset</button>
              <button className="lg:text-2xl font-custom text-white hover:text-blue-200" onClick={handleToggle}>Enhance with AI</button>
            </div>
        </div>
      </nav>
      <p className='text-center font-custom lg:text-3xl text-white flex justify-center py-8'>Microphone: {listening ? 'On' : 'Off'}</p>
      <p className='font-custom text-white lg:text-2xl my-5 py-10 px-60'>{transcript}</p>
    </div>
  );
};
export default Dictaphone;
