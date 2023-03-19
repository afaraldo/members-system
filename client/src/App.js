import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import MainPerson from './views/people/Main';
import CreatePerson from './views/people/Create';
import ShowPerson from './views/people/Show';
import Login from './views/users/Login';
import Signup from './views/users/Signup';
import CustomNavBar from './components/common/CustomNavBar'
function App() {

  const ProtectedRoute = ({ user, redirectPath = '/login' }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);  
    const [userTokenCookie, setUserTokenCookie, removeUserTokenCookie] = useCookies(['userToken']);  
    if (!userTokenCookie['userToken']) {
      removeCookie('userToken')
    }

    if (!cookies['user']) {
      
      return <Navigate to={redirectPath} replace />;
    }
  
    return <>
      <CustomNavBar/>
      <Outlet />;
    </>
  };

  return (
    <div className="App">
        <BrowserRouter>
          <div className="container">  
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<MainPerson/>}/>
                <Route path="/people/:personId" element={<ShowPerson/>}/>
                <Route path="/people/new" element={<CreatePerson/>}/>
              </Route>
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<Signup/>} />
              <Route path='/*' element={<h1>Error</h1>}/>
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}
export default App;