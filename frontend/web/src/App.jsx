import { BrowserRouter, Route, Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import OfferList from './components/OfferList.jsx'
import UserList from './components/UserList.jsx';
import Header from './components/Header.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<OfferList />}></Route>
            <Route path='/users' element={<UserList />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
