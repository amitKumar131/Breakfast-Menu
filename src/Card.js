
const Card = (props) =>{
   
return(
    <>
    <div className='cards'>
    <div className='card'>
        <img src={props.imgSrc} className='card_img' />
        <div className='card_info'>
            <h3 className='card_title'>{props.title}</h3>
            <button >Price {props.price}</button>
        </div>
    </div>
    </div>
    </>
)
}

export default Card;