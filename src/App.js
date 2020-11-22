
import './App.scss';
import Navbar from './components/navbar/Navbar'
import MyCarousel from './components/Carousel/MyCarousel'
import TextCasual from './components/TextCasual/TextCasual'
import Services from './components/OurServices/Services'
import ImgBg from './components/imgBg/ImgBg'
import CardBlog from './components/BlogCardCarousel/CardBlog'
import BtnCarousel from './components/Carousel/BtnCarousel'
import  Form from './components/Form/Form'
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <header>
        <Navbar className='NavbarFixed' />
      </header>
      <main>
        <MyCarousel/>
        <BtnCarousel/>
        <TextCasual/>
        <Services/>
        <ImgBg/>
        <CardBlog/>
        <Form/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
