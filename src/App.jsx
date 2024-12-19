import './App.css'
import { BrowserRouter } from 'react-router-dom';
// import { MovieList } from './pages/MovieList';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AllRoutes } from './routes/AllRoutes';


function App() {
  
  return (
    
      <BrowserRouter future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
      }}>
      <Header />
      <AllRoutes />
      <Footer />
      </BrowserRouter>
    
  )
}

export default App
