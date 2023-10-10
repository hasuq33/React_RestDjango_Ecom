import './App.css';
import { Container } from 'react-bootstrap';
import Footer from './components/footer'
import Header from './components/header'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Container>
          <Routes>
       <Route path='/'  exact element={<HomeScreen/>}/>
       <Route path='/products/:id' element={<ProductScreen/>}/>
       <Route path='/cart/:id?/:qty?' element={<CartScreen/>}/>
       </Routes>
      </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
