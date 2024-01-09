import { useParams } from 'react-router-dom'

import '../../styles/App.css';
import '../../styles/logement.css';

import Header from '../../components/Header.js';
import TAG from '../../components/Tag.js';
import Footer from '../../components/Footer.js';
import Collapse from '../../components/Collapse.js';
import Slideshow from '../../components/Slideshow.js';

import star from '../../assets/star.svg';

const data = require ("./../../logements.json");

function Fiche_Logement() {

const {id} = useParams ()
let logement = data.find((appart) => appart.id === id)
const motsClès = logement.tags
const slides = logement.pictures
const host = logement.host
const arrayRating = [1,2,3,4,5]
const score = logement.rating


let key = 0

  return (
    <div>
      <Header />
      <Slideshow slides={slides}/>
          <div>
              <div id="title">
                <h3>{logement.title}</h3>
                <p>{logement.location}</p>
              </div>

              <div id="titleTag">{
                motsClès.map((tag)=>
                  <TAG key={key++} tag={tag}/>
                )
              }
              </div>
                <div id="host">
                  <p>{host.name}</p>
                  <img id="profilHost" src={host.picture} alt={host.name}/>
                </div>
                <div id="rate">{
                  arrayRating.map((rate) => {
                    return (
                      <img className={rate > score ? "" : "star-active"} src={star} alt="star"/>
                    );
                  })}
                </div>
        </div>
        <div id="details">
             <Collapse key={logement.id} title={"Description"} description={logement.description}/>
             <Collapse key={logement.id} title={"Équipements"} description={logement.equipments}/>
        </div>
        <Footer />
    </div>
  );
}

export default Fiche_Logement;
