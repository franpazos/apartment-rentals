import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import SideBar from './Components/Sidebar/SideBar'
import ApartmentsList from './components/ApartmentsList/ApartmentsList'

const App = () => {

  return (
    <div className='App'>
      <NavBar
        text={'EcoHomes'}
        image={'./src/assets/logo.png'} />
      <SideBar
        link={'/Home'}
        text={'Home'}
      />
      <SideBar
        link={'/About'}
        text={'About'}
      />
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
