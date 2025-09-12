  import { Outlet } from 'react-router-dom';
  import Header1 from '../Header/Header1';
  import Header2 from '../Header/Header2';
  import Footer from '../Header/Footer';

  const RootLayout = ({ likedProducts, toggleHeart, likedCount, cartCount }) => {
    return (
      <>
        <header className="header1 bg-light" style={{zIndex: 1050}}>
          <Header1 likedProducts={likedProducts} toggleHeart={toggleHeart} likedCount={likedCount} cartCount={cartCount}/>
        </header>
        <header className="sticky-top bg-white header2" style={{ top: '73px' ,zIndex:1040}}>
          <Header2 />
        </header>
        <main>
          <Outlet context={{ likedProducts, toggleHeart,cartCount }} />
        </main>
        <Footer/>
      </>
    );
  };

  export default RootLayout;
