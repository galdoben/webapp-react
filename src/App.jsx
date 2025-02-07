import HomePage from './pages/HomePage';
import DefLayout from './assets/layouts/DefLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefLayout />}>
            <Route path='/' element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
