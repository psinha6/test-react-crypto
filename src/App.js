import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Details from './routes/details/details';
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="details/:id" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
