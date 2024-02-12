import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ApartmentsList from './pages/ApartmentsList'
import SideBar from './components/SideBar/SideBar'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'
import DetailsPage from './pages/DetailsPage'
import EditForm from './pages/EditForm'


const App = () => {

  return (
    <div className='App'>
      <NavBar />

      <SideBar />

      <Routes>
        <Route path='/' element={<ApartmentsList />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/detailspage/:apartment_id' element={<DetailsPage />} />
        <Route path='/editapartment/:apartment_id' element={EditForm}></Route>
        <Route path='*' element={<NotFoundPage />} />


      </Routes>

      <Footer />
    </div>
  )
}

export default App
