import Header from './components/Header/Header';
import { Routes, Route } from 'react-router';

import Main from './pages/Main/Main';
import ProductList from './pages/ProductList/ProductList';
import Bookmark from './pages/Bookmark/Bookmark';
import Footer from './components/Footer/Footer';

import { Container, MainContainer } from './style/App.styled';
function App() {
  return (
    <Container>
      <Header />

      <MainContainer>
        <Routes>
          {/* routes 에 직접 스타일을 줄 수 있을까? */}
          <Route path="/" element={<Main />} />
          <Route path="/products/list" element={<ProductList />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
      </MainContainer>

      <Footer />
    </Container>
  );
}

export default App;
