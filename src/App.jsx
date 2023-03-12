import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calender from './Components/pages/calender/Calender';
import Home from './Components/pages/home_page/Home';


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>
    </div>
  )
}

export default App
