import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Politics from './pages/Politics';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politics" element={<Politics />} />
      </Routes>
    </BrowserRouter>
  );
}
