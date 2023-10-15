import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const handleStart = () => {
    SpeechRecognition.startListening({ continuous: true });
  }

  return (
    <div class="not-live">
      <p className='lg:text-3xl my-5 text-white'>Microphone: {listening ? 'on' : 'off'}</p>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-center items-center">
            <div className="space-x-10">
              {/* Start, Stop, Reset */}
              <button className="text-white hover:text-blue-200" onClick={handleStart}>Start</button>
              <button className="text-white hover:text-blue-200" onClick={SpeechRecognition.stopListening}>Stop</button>
              <button className="text-white hover:text-blue-200" onClick={resetTranscript}>Reset</button>
            </div>
        </div>
      </nav>
      <p className='text-white lg:text-xl my-5'>{transcript}</p>
    </div>
  );
};
export default Dictaphone;
