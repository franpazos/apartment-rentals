import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ApartmentsList from './components/ApartmentsList/ApartmentsList'
import SideBar from './components/SideBar/SideBar'

const App = () => {

  return (
    <div className='App'>
      <NavBar
        text={'EcoHomes'}
        image={'./src/assets/logo.png'} />

      <SideBar />

      <ApartmentsList>

      </ApartmentsList>


      <Footer
        link={'https://github.com/franpazos/apartment-rentals'}
        text={'Enlace al repositorio'}
      />
    </div>
  )
}

export default App
