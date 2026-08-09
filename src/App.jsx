import Header from './Common/Header/Header'
import "../public/css/colors/scheme-02.css"
import Footer from './Common/Footer'
import PageRoutes from './PageRoutes'

const App = () => {
  return (
    <div>
      <div id="wrapper">
      <Header/>
      <PageRoutes/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
