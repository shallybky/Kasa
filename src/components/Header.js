import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/Header.css';

 
function Header({ul}) {
	const original = <ul>
			            <li><Link to="/">Accueil</Link></li>
			            <li><Link to="/a_propos">A Propos</Link></li>
		       		 </ul>
    return (
        <nav className="Header">
        	<div>
        		<img src={logo} alt="Kasa" />
        	</div>
        	<div>
	        	{ul ? ul : original}
		    </div>
        </nav>
    )
}

export default Header