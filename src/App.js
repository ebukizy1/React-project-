import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AppUser from './data/AppUser';
import User from './data/User';





function App() {

  return (
    <div className="App">


      <Router>
        <Routes>
        <Route path={'/'} element={<AppUser />} />
          <Route path={'/user'} element={<User/>} />

        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
