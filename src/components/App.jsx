import Footer from "./Footer";
import Header from "./Header/Header";
import ItemModal from "./ItemModal";
import Main from "./Main/Main";
import ModalWithForm from "./ModalWithForm";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <ModalWithForm />
      <ItemModal />
    </div>
  );
}

export default App;
