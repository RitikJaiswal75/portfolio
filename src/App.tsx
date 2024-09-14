import { BrowserRouter as Router } from 'react-router-dom'
import About from './components/About'
import DownloadResume from './components/DownloadResume'
import HeroSection from './components/HeroSection'
import KnowMoreInfo from './components/KnowMoreInfo'
import ComingSoon from './components/Loaders/ComingSoon'

function App() {

  return (
    <Router>
      <HeroSection />
      <KnowMoreInfo />
      <About />
      <ComingSoon />
      <DownloadResume />
    </Router>
  )
}

export default App
