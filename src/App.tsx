import Footer from '@features/Footer';
import Group from '@features/Group';
import Group2 from '@features/Group2';
import TopNav from '@features/TopNav';
import Home from '@pages/Home';
import { Route, Routes } from 'react-router';
import styled from 'styled-components';

const App = () => {
  const AppWrapper = styled.div`
  // display: flex;
  // flex-direction: column;
  height: 100vh;

  > :last-child {
    justify-content: end;
    align-items: end;
  }
  `

  return (
    <>  
      <AppWrapper>
        <TopNav/>
        <Home/>
        <Footer/>
      </AppWrapper>

      <Routes>
        <Route path='/math' element={<Group />} />
        <Route path='/recipes' element={<Group2 />} />
        <Route path='/recipes/week1' element={<Group />} />
        <Route path='/recipes/week2' element={<Group2 />} />
      </Routes>

    </>
  );
}

export default App;
