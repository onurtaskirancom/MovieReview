import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import EmailVerification from './components/auth/EmailVerification';
import Home from './components/Home';
import Navbar from './components/user/Navbar';
import ForgetPassword from './components/auth/ForgetPassword';
import ConfirmPassword from './components/auth/ConfirmPassword';
import NotFound from './components/NotFound';
import { useAuth } from './hooks';

export default function App() {
  const { authInfo } = useAuth();
  console.log(authInfo);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/signin" element={<Signin />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/verification" element={<EmailVerification />} />
        <Route path="/auth/forget-password" element={<ForgetPassword />} />
        <Route path="/auth/reset-password" element={<ConfirmPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
