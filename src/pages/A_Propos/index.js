import {Link} from 'react-router-dom'
import Header from '../../components/Header.js';
import BannerA from '../../components/BannerA.js';
import Collapse from '../../components/Collapse.js';
import Footer from '../../components/Footer.js';

const apropos = [
    {
        id : 0,
        title : "Fiabilité",
        description :"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    }, {
        id : 1,
        title : "Respect",
        description : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une excursion de notre plateforme."
    }, {
        id : 2,
        title : "Service",
        description :"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une excursion de notre plateforme."
    }, {
        id : 3,
        title : "Sécurité",
        description : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspondand aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes."
    }
]


function A_Propos() {
  const ul = <ul>
                <li><Link to="/">Accueil</Link></li>
                <li style={{textDecoration : "underline", textDecorationColor:"#FF6060"}}><Link to="/a_propos">A Propos</Link></li>
              </ul>
return (
  <div>
    <Header ul={ul}/>
     <div id="homeBlock">
        <BannerA />
        <div id="aproposBlock">{
          apropos.map((properties) =>
            <Collapse key={properties.id} title={properties.title} description={properties.description}/>
          )}
        </div>
     </div>
       <Footer />
  </div>
);
}

export default A_Propos;
