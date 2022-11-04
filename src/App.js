import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';


export default function App() {
  const [user, setUser] = useState()
  return (
    <Routes>
      {user
        ? <Profile />
        : <>
          <Route path="/signup" element={<Signup />} />
          <Route path='*' element={<Login />} />
        </>
      }
    </Routes>
  );
}
