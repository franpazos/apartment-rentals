import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ApartmentsList from './pages/ApartmentsList'
import SideBar from './components/SideBar/SideBar'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'
import DetailsPage from './pages/DetailsPage'

const App = () => {

  return (
    <div className='App'>
      <NavBar
        text={'EcoHomes'}
        image={'./src/assets/logo.png'} />

      <SideBar />

      <Routes>
        <Route path='/' element={<ApartmentsList />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/detailspage/:apartment_id' element={<DetailsPage />} />
        <Route path='*' element={<NotFoundPage />} />


      </Routes>

      <Footer
        link={'https://github.com/franpazos/apartment-rentals'}
        text={'Enlace al repositorio'}
      />
    </div>
  )
}

export default App
