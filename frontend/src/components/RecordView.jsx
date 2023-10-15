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
      <button onClick={handleToggle}>Enhance with AI</button>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default Dictaphone;
