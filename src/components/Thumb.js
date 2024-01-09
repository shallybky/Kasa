import '../styles/thumb.css';
import {Link} from 'react-router-dom'

 
function Thumb({ appart }) {
    const link = "/fiche_logement/"
    return (
        <div>
            <Link to={`${link}${appart.id}`} >
            	<div className="thumb">
            		<p> {appart.title} </p>
            	</div>
            	<div className="thumbunder">
            		<img className="imgthumb" src={appart.cover} alt={appart.title} />
            	</div>
            </Link>
        </div>
        
    )
}

export default Thumb;