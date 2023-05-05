// import logo from './logo.svg';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Nav from './routes/navigation/nav.component';
// import './routes/navigation/navigation.styles.scss';

const Shop = () => {
  return (
  <div>
    <p>This is the shop page</p>
    <Outlet />
  </div>
  );
}

const SubShop = () => {
  return (
  <div>
    <p>2 This is the sub shop page</p>
  </div>
  );
}
 

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />}>
          <Route path='subshop' element={<SubShop />}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
