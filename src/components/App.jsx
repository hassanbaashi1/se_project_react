import { useState } from "react";
import { defaultClothingItems } from "../utils/clothingItems";
import Footer from "./Footer";
import Header from "./Header/Header";
import ItemModal from "./ItemModal";
import Main from "./Main/Main";
import ModalWithForm from "./ModalWithForm";

function App() {
  const [clothingItems] = useState(defaultClothingItems);
  return (
    <div className="page">
      <Header />
      <Main clothingItems={clothingItems} />
      <Footer />
      <ModalWithForm />
      <ItemModal />
    </div>
  );
}

export default App;
