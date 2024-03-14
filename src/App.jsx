import Header from './components/Header/Header'
//import Footer from './components/Footer/Footer'
import New from './pages/New/New'
import Trending from './pages/Trending/Trending'
import Samplings from './pages/Samplings/Samplings'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/samplings' element={<Samplings />} />
          <Route path='/new' element={<New />} />
          <Route path='/trending' element={<Trending />} />
        </Routes>
      </div>
    </>
  )
}

export default App
