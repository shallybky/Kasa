import '../../styles/App.css';
import {Link} from 'react-router-dom'
import Header from '../../components/Header.js';
import Banner from '../../components/Banner.js';
import Footer from '../../components/Footer.js';
import Thumb from '../../components/Thumb.js';

const data = require ("./../../logements.json");

function Home() {
	    const ul = <ul>
                  <li style={{textDecoration : "underline", textDecorationColor:"#FF6060"}}><Link to="/">Accueil</Link></li>
                  <li><Link to="/a_propos">A Propos</Link></li>
                </ul>
  return (
   <div>
      <Header ul={ul}/>
	      <div id="homeBlock">
		      <Banner />
		     	 <div id="blockThumb">{
		     	 	data.map((appart) =>
		     	 		<Thumb key={appart.id} appart={appart}/>
		     	 	)}
		     	 </div>
	      </div>
	   <Footer />
    </div>
  );
}

export default Home;