import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className='w-100 h-screen'>
      <Navbar />
      <div className=' border-2 border-blue-400 mt-10 h-full w-full flex flex-col gap-4'>

        <Header />
        <Main />

      </div>
      <Footer />
    </div>
  )
}

export default App
