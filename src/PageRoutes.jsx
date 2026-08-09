
import About from './components/About/AboutUs'
import Home from './Pages/Home'
import SystemDetail from './components/Programs/Program'
import { Route,Routes} from 'react-router-dom'
import SystemPage from './Pages/SystemPage'
import Journey from './Components/Journey/Journey'
import Activate from './Components/Activate/Activate'
import ScrollToTop from './Common/ScrolltoTop'

const PageRoutes = () => {
  return (
    <div>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/journeys" element={<Journey />} />
          <Route path="/system/:id" element={<SystemDetail />} />
          <Route path="/System" element={<SystemPage />} />
          <Route path="/Contact" element={<Activate />} />
        </Routes>
    </div>
  )
}

export default PageRoutes
