// Requires react-router-dom: npm install react-router-dom
// Your main.jsx must wrap this component in <BrowserRouter> — see the
// main.jsx example from earlier in this conversation if it isn't already.
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CallCenterServices from './pages/CallCenterServices.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/call-center-services" element={<CallCenterServices />} />
    </Routes>
  )
}