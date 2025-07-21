import { Outlet } from 'react-router-dom';
import Header1 from '../Header/Header1';
import Header2 from '../Header/Header2';
import Footer from '../Header/Footer';

const RootLayout = ({ likedProducts, toggleHeart, likedCount }) => {
  return (
    <>
      <header className="header1 bg-light z-3">
        <Header1 likedProducts={likedProducts} toggleHeart={toggleHeart} likedCount={likedCount} />
      </header>
      <header className="sticky-top bg-white z-2 header2" style={{ top: '73px' }}>
        <Header2 />
      </header>
      <main>
        <Outlet context={{ likedProducts, toggleHeart }} />
      </main>
      <Footer/>
    </>
  );
};

export default RootLayout;
