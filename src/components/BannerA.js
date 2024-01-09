import '../styles/banner.css';
import bannerA from '../assets/bannerA.svg';

 
function BannerA() {
    return (
    	<div>
        	<div className="banner">
        	</div>
        	<div className="bannerunder">
        		<img className="imgbanner" src={bannerA} alt="KASA" />
            </div>
        </div>
    )
}

export default BannerA;