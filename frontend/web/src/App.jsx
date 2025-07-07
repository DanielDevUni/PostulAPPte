import { BrowserRouter, Route, Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import OfferList from './components/OfferList.jsx'
import UserList from './components/UserList.jsx';
import Header from './components/Header.jsx';
import HomeHeader from './pages/home/HomeHeader.jsx';
import Home from './pages/home/Home.jsx';
import AdminHome from './pages/admin_view/AdminHome.jsx';
import CreateUserAdmin from './pages/admin_view/CreateInternUser.jsx'
import Login from './pages/login/Login.jsx';
import Register from './pages/register/register.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <HomeHeader />
        <div className="container mx-auto">
          <Routes>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/offers" element={<OfferList />}></Route>
            <Route path='/users' element={<UserList />}></Route>
            <Route path='/admin' element={<AdminHome />}></Route>
            <Route path='/admin/create-user' element={<CreateUserAdmin />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes> 
        </div> 
      </BrowserRouter>
    </>
  )
}

export default App
