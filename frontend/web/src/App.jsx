import { BrowserRouter, Route, Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import OfferList from './components/OfferList.jsx'
import Header from './components/Header.jsx';
import HomeHeader from './pages/home/HomeHeader.jsx';
import Home from './pages/home/Home.jsx';
import AdminHome from './pages/admin_view/AdminHome.jsx';
import CreateUserAdmin from './pages/admin_view/CreateInternUser.jsx'
import Login from './pages/login/Login.jsx';
import Register from './pages/register/register.jsx';
import UserProfile from './pages/Profile/ProfileUser.jsx';
import UserList from './pages/admin_view/UserList.jsx';
import EditUser from './pages/admin_view/EditUser.jsx';
import InternUserList from './pages/admin_view/InternUserList.jsx';
import RestorePassword from './pages/login/RestorePassword.jsx';
import ForgotPassword from './pages/login/ForgotPassword.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <HomeHeader />
        <div className="container mx-auto">
          <Routes>
            <Route path="/profile" element={<UserProfile />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path='/admin' element={<AdminHome />}></Route>
            <Route path='/admin/create-user' element={<CreateUserAdmin />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/admin/user-list' element={<UserList />}></Route>
            <Route path='/admin/edit-user/:id' element={<EditUser />}></Route>
            <Route path='/admin/intern-user-list' element={<InternUserList />}></Route>
            <Route path='/restore-password' element={<RestorePassword />}></Route>
            <Route path='/forgot-password' element={<ForgotPassword />}></Route>
          </Routes> 
        </div> 
      </BrowserRouter>
    </>
  )
}

export default App
