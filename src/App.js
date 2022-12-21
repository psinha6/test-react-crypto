import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Details from './routes/details/details';
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';

function App() {
  return (
    <div className='wrapper'>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="details/:id" element={<Details />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
