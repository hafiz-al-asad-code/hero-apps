import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet, useNavigation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import logoImg from '../assets/logo.png';

const Root = () => {

  const navigation = useNavigation();
  console.log(navigation.state);
  const isLoading = navigation.state === "loading";

  return (
    <div>
      <Navbar></Navbar>
      {
        isLoading ?
          <div className='text-5xl font-bold opacity-50 flex justify-center items-center my-20'>L<img className='animate-spin w-[80px] inline-block mx-5' src={logoImg} alt="" />ading</div>
          :
          <Outlet></Outlet>
      }
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Root;