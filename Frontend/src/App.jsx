import React, { useEffect } from 'react';
import MainRoutes from './Routes/mainRoutes';
import Navbar from './Components/Navbar';
import { asyncCurrentUser } from './Store/actions/userActions';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCurrentUser());
  }, [dispatch]);

  return (
    <div className='px-10 bg-black w-screen h-screen text-white'>
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
