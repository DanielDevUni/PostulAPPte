import { BrowserRouter, Route, Routes } from 'react-router';
import * as Icons from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/offers/List.jsx'
import UserList from './components/UserList.jsx';
import Header from './components/Header.jsx';
import Login from './components/auth/login.jsx';
import Register from './components/auth/register.jsx';
import Dashboard from './components/dashboard/admin.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/users' element={<UserList />}></Route>
            <Route path='/offers' element={<List />}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
