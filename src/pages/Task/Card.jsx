import './Card.css'
const Card = (props) =>{
    return(
    
    <div className={`card ${props.viewType.toLowerCase()}`}>
        <img src={props.image} alt={props.title} />
        <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-category">{props.category}</p>
        <p className="card-price">${props.price}</p>
        <p className="card-description">{props.description}</p>
        <p className="card-rating">Rating: {props.rating.rate} ({props.rating.count})</p>
        </div>
    </div>  
              
        )
       
}
export default Card;
