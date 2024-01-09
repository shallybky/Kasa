import '../styles/banner.css';
import banner from '../assets/banner.svg';

 
function Banner({ appart }) {
    return (
    	<div>
        	<div className="banner">
        		<p> Chez vous, partout et ailleurs </p>
        	</div>
        	<div className="bannerunder">
        		<img className="imgbanner" src={banner} alt="KASA" />
        	</div>
        </div>
        
    )
}

export default Banner;