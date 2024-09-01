
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import ComingSoon from './pages/ComingSoon/ComingSoon'
import CurrentPlaying from './pages/CurrentPlaying/CurrentPlaying'
import Booking from './pages/Booking/Booking'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coming_soon" element={<ComingSoon/>}/>
        <Route path="/current_playing" element={<CurrentPlaying/>}/>
        <Route path="/booking/:id" element={<Booking/>}/>
      </Routes>
    </>
  )
}

export default App
