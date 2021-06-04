import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Christmas from "./Components/Christmas/Christmas";
import Subheader from "./Components/Subheader/Subheader";
import Disney from "./Components/Disney/Disney";
import Movies from "./Components/Movies/Movies";
import Sagradafamilia from "./Components/Sagradafamilia/Sagradafamilia";
import Dreams from "./Components/Dreams/Dreams";
import "./index.scss";

const App = () => {
  return( 
    <div className='main-div'>
      <Header />
      <Subheader title='Hobbies'/>
      <Dreams />
      <Subheader title='Proyectos'/>
      <Disney />
      <Subheader title='Herramientas'/>
      <Sagradafamilia />
      <Subheader title='Habilidades'/>
      <Movies />
      <Subheader title='Tecnologías por aprender'/>
      <Christmas />
      <Footer />
    </div>);
};

ReactDOM.render(<App />, document.querySelector("#root"));