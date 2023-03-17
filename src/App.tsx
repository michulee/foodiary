import Footer from '@features/Footer';
import Group from '@features/Group';
import Group2 from '@features/Group2';
import TopNav from '@features/TopNav';
import Home from '@pages/Home';
import Login from '@pages/Login';
import Register from '@pages/Register';
import { Route, Routes } from 'react-router';
import styled, { createGlobalStyle } from "styled-components/macro"

const AppWrapper = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
// min-height: 80vh;
justify-content: space-between;


> :last-child {
  // display: flex;
  // justify-content: end;
  // align-items: end;
}
`
const App = () => {

  return (
    <>  
      {/* FIXME placing Routes here will make content above nav */}

      <AppWrapper>
        <TopNav/>
        {/* ! Home will show despite the change of views */}
        {/* <Home/> */}
        <Footer/>
      </AppWrapper>

      {/* <Routes>
        <Route path='/math' element={<Group />} />
        <Route path='/recipes' element={<Group2 />} />
        <Route path='/recipes/week1' element={<Group />} />
        <Route path='/recipes/week2' element={<Group2 />} />
      </Routes> */}

      {/* FIXME placing Routes here will make content below footer */}
      {/* <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/recipes'/>
            <Route path='/about'/>
            <Route path='/blog'/>
            <Route path='/contact'/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
      </Routes> */}
    </>
  );
}

export default App;
