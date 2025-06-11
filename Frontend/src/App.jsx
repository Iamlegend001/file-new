import { useEffect } from 'react';
import Nav from './Components/Nav';
import MainRoutes from './Routes/MainRoutes';
import { useDispatch } from 'react-redux';
import { asyncCurrentUser } from './Store/Actions/userActions';
import { asyncLoadProducts } from './Store/Actions/productActions';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncCurrentUser())
    dispatch(asyncLoadProducts())
  }, [dispatch])

  return (
    <div className=" overflow-auto min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Nav />
        <MainRoutes />
      </div>
    </div>
  )
}

export default App;
