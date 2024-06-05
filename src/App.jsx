import AppBar from './components/AppBar'
import Banner from './components/Banner'
import CardList from './components/CardList'
import Description from './components/Description'
import ImportantArea from './components/ImportantArea'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import "./App.css";

export default function App() {
  return (
    <>
      <AppBar />
      <Banner />
      <CardList />
      <Description />
      <ImportantArea />
      <ContactSection />
      <Footer />
    </>
  );
}
