import { BrowserRouter, Route, Routes } from 'react-router';
import * as Icons from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import List from './components/offers/List.jsx'
import UserList from './components/UserList.jsx';
import Header from './components/Header.jsx';
import Login from './components/auth/login.jsx';
import Register from './components/auth/register.jsx';
import Dashboard from './components/dashboard/admin.jsx';
=======
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
>>>>>>> 6a68097e31bbec786eda051083ca5d2112e8d605

function App() {

  return (
    <>
      <BrowserRouter>
<<<<<<< HEAD
        <Header />
          <Routes>
            <Route path='/users' element={<UserList />}></Route>
            <Route path='/offers' element={<List />}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
          </Routes>
=======
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
>>>>>>> 6a68097e31bbec786eda051083ca5d2112e8d605
      </BrowserRouter>
    </>
  )
}

export default App
