import { useRouteError, Link } from "react-router-dom";
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import '../../styles/error.css';

function P_404() {
  let error = {}
  error.status = 404;


const elementHtml = <div id="divError">
  <p id="errorElement" >404</p>
  <p id="errorElementP">Oups! La page que vous demandez n'existe pas.</p> 
  <Link to="/" id="link">Retourner sur la page d’accueil</Link>
</div>

  return (
     <div>
      <Header />
        {error.status === 404 ? elementHtml : ""}
        <Footer />
    </div>
  );
}

export default P_404;