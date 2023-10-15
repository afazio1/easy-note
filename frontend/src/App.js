import './App.css';
import RecordView from './components/RecordView';
import { Route, Routes } from 'react-router-dom';
import SidePage from './components/SidePage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<RecordView />} />
      <Route path="/side" element={<SidePage />} />
    </Routes>
  );
}

export default App;
