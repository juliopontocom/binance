import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Precos from './pages/precos'

function App() {

  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Precos />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
