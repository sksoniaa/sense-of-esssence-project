import Header from './components/Header/Header'
//import Footer from './components/Footer/Footer'
import New from './pages/New/New'
import Trending from './pages/Trending/Trending'
import Samplings from './pages/Samplings/Samplings'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Linterdit from './pages/perfumes/Linterdit/Linterdit'
import DGLightBlue from './pages/perfumes/DGLightBlue/DGLightBlue'
import GucciBloom from './pages/perfumes/GucciBloom/GucciBloom'
import GucciFlora from './pages/perfumes/GucciFlora/GucciFlora'
import YslLibre from './pages/perfumes/YslLibre/YslLibre'


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
          <Route path='/perfume/linterdit' element={<Linterdit />} />
          <Route path='/perfume/dolce-gabbana-light-blue' element={<DGLightBlue />} />
          <Route path='/perfume/gucci-bloom' element={<GucciBloom />} />
          <Route path='/perfume/gucci-flora' element={<GucciFlora />} />
          <Route path='/perfume/yves-saint-laurent-libre' element={<YslLibre />} />
        </Routes>
      </div>
    </>
  )
}

export default App
