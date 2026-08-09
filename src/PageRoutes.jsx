
import About from './components/About/AboutUs.jsx'
import Home from './Pages/Home.jsx'
import SystemDetail from './components/Programs/Program.jsx'
import { Route,Routes} from 'react-router-dom'
import SystemPage from './Pages/SystemPage.jsx'
import Journey from './Components/Journey/Journey.jsx'
import Activate from './Components/Activate/Activate.jsx'
import ScrollToTop from './Common/ScrolltoTop.jsx'

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
