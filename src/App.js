

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Homepage from './components/Homepage';
import RecipeProvider from './MealContext';
import NavBar from './components/NavBar';


function App() {
  return (
    <RecipeProvider>
 <Container>
 <NavBar/>
  <Routes>
   <Route path = '/' element={<Homepage/>}/>
  </Routes>
 </Container>
 </RecipeProvider>
  );
}

export default App;
