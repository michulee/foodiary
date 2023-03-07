import Group from '@features/Group';
import Group2 from '@features/Group2';
import Home from '@pages/Home';
import { Route, Routes } from 'react-router';

const App = () => {
  return (
    <>  
      <Home/>
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
