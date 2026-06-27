import { Route, Routes, useLocation } from "react-router-dom"
import Community from "./pages/Community"
import Home from "./pages/Home"
import MyProjects from "./pages/MyProjects"
import Preview from "./pages/Preview"
import Pricing from "./pages/Pricing"
import Projects from "./pages/Projects"
import View from "./pages/View"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  const {pathname} = useLocation()

  const hideNavbar = pathname.startsWith('/projects/') && pathname !== '/projects' || pathname.startsWith('/view/') || pathname.startsWith('/preview/')
  const hideFooter = pathname.startsWith('/projects/') && pathname !== '/projects' || pathname.startsWith('/view/') || pathname.startsWith('/preview/')

  return (
    <div className="App">
      {!hideNavbar && <Navbar></Navbar>}
      
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/projects/:projectId" element={<Projects />} />
      <Route path="/projects" element={<MyProjects />} />
      <Route path="/preview/:projectId" element={<Preview />} />
      <Route path="/preview/:projectId/:versionId" element={<Preview />} />
      <Route path="/community" element={<Community />} />
      <Route path="/view/:projectId" element={<View />} />
     </Routes>
      {!hideFooter && <Footer/>}
    </div>
  )
}

export default App
