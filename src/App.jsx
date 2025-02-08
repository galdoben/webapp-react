import HomePage from './pages/HomePage';
import DefLayout from './assets/layouts/DefLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import ReviewsMovie from './pages/ReviewsMovie';


function App() {


  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/movies/:id' element={<ReviewsMovie />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </GlobalProvider>
  )
}

export default App
