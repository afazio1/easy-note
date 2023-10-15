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
      <p className='lg:text-3xl my-5 text-white'>Microphone: {listening ? 'on' : 'off'}</p>
      <nav className="bg-lighter-grey p-4">
        <div className="container mx-auto flex justify-center items-center">
            <div className="space-x-10">
              {/* Start, Stop, Reset */}
              <button className="text-white hover:text-blue-200" onClick={handleStart}>Start</button>
              <button className="text-white hover:text-blue-200" onClick={SpeechRecognition.stopListening}>Stop</button>
              <button className="text-white hover:text-blue-200" onClick={resetTranscript}>Reset</button>
              <button className="text-white hover:text-blue-200" onClick={handleToggle}>Enhance with AI</button>
            </div>
        </div>
      </nav>
      <p className='text-white lg:text-2xl my-5'>{transcript}</p>
    </div>
  );
};
export default Dictaphone;
