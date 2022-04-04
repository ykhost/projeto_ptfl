
import { GlobalStyle } from "./styles/global";
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from "./components/Footer";


export default function App() {
  return (
    <>
      <Header/>
      <Home/>
      <GlobalStyle/>
      <Footer/>
    </>
  );
}
