import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Navbar from './components/Navbar'


import Home from './pages/Home'
import Verify from './pages/Verify'

function App() {
  return (
    <div className="min-h-screen">
      <Toaster
  position="top-right"
  toastOptions={{
    style: {
      zIndex: 99999,
    },
  }}
/>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </div>
  )
}

export default App