import '../styles/footer.css';
import kasa from '../assets/kasa.svg';

 
function Footer({ appart }) {
    return (
        	<div className="footer">
        		<img src={kasa} alt="KASA"/>
        		<p> &copy; 2020 Kasa. All rights reserved</p>
        	</div>        
    )
}

export default Footer;