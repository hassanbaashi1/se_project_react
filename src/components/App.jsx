import Footer from "./Footer";
import Header from "./Header";
import ItemModal from "./ItemModal";
import Main from "./Main";
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
