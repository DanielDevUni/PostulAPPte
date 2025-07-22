import { BrowserRouter, Route, Routes } from 'react-router';
import * as Icons from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/offers/List.jsx'
import UserList from './components/UserList.jsx';
import Header from './components/Header.jsx';
import Login from './components/auth/login.jsx';
import Register from './components/auth/register.jsx';
import Dashboard from './components/dashboard/admin.jsx';
import ApplicationForm from './components/Applicants/ApplicationForm.jsx'
import JobOfferForm from './components/offers/JobOfferForm.jsx'
import ApplicationList from './components/Applicants/ApplicationList.jsx'
import HumanTalentHome from './pages/human_talent_view/HumanTalentHome.jsx';
import EditJobOffer from './components/offers/EditJobOffer.jsx'

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
            <Route path='/applicationform' element={<ApplicationForm />}></Route>
            <Route path='/human-talent/job-offer-form' element={<JobOfferForm />}></Route>
            <Route path='/application-list' element={<ApplicationList />}></Route>
            <Route path='/human-talent' element={<HumanTalentHome />}></Route>
            <Route path='/human-talent/edit-job-offer/:id' element={<EditJobOffer />}></Route>

          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
