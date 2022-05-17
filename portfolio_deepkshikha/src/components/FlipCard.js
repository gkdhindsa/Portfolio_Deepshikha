import critical from '../assets/critical.png'
import Card from 'react-bootstrap/Card'

function FlipCard() {
    return ( 
        <div className='card'>
            <div className="front">
                <img src={critical} alt="" className='card-image-full'/>
            </div>
            <div className="back">
                <p className="card-title">Project Title</p>
                <p className="card-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, aspernatur. Nostrum, facilis? Pariatur libero, voluptatibus exercitationem accusamus laudantium, atque quo tempore quas expedita molestias ipsum. Nesciunt necessitatibus nulla incidunt sit!
                </p>

            </div>
        </div>
     );
}

export default FlipCard;