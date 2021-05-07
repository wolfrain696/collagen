import './App.css';
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Technologies from "./Components/technologies/Technologies";
import PropertiesList from "./Components/ PropertiesList/ PropertiesList";
import Advantages from "./Components/Advantages/Advantages";
import Product from "./Components/Product/Product";
import Application from "./Components/ Application/ Application";
import Socials from "./Components/Socials/Socials";
import {useState} from "react";
import Modal from "./Components/Modal/Modal";



function App() {

    const [modalActive, setModalActive] = useState(false)

    return (
        <div  className="App">
            <Header/>
            <About/>
            <Technologies/>
            <PropertiesList/>
            <Advantages/>
            <Product setActive={setModalActive}/>
            <Application setActive={setModalActive}/>
            <Socials/>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
);
}

export default App;
