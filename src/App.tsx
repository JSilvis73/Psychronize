import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <div className='w-100 h-screen'>
    <div className='mt-10 h-full w-full flex flex-col gap-4'>
    <Navbar />
    <Header />
    <Main />
    <Footer />
    </div>
    </div>
  )
}

export default App
