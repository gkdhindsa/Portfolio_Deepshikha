import critical from '../assets/critical.png'
function PictureCard() {
    return ( 
        <div className='card card-no-flip'>
        <img src={critical} alt="" className='card-image-half'/>  
        <div className="one-side">
            
                <p className="card-title">Project Title</p>
                <p className="card-bod">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, aspernatur. Nostrum, facilis? Pariatur libero, voluptatibus exercitationem accusamus laudantium, atque quo tempore quas expedita molestias ipsum. Nesciunt necessitatibus nulla incidunt sit!
                </p>
                <a href="/project" className='view-more'>View more</a>   
        </div>
            
        </div>
     );
}

export default PictureCard;