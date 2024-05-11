
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import UpdateUser from './components/updateUser/updateUser';
import PostUser from './components/postUser/postUser';
import Header from './components/header/header';
import NoMatch from './components/nomatch/nomatch';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user" element={<PostUser />} />
            {/* for getting id like user/48 */}
        <Route path="user/:id" element={<UpdateUser />} />
        {/*  for getting every endpoint */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
