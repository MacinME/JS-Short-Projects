export const Card_RickAndMorty = ({ name, status, image, species, location}) => {
  return (
    <div className="cards-card_container">
        <div className="cards-card">
            <div className="cards-card_img">
                <img src={ image } alt={ name } />
            </div>
            <div className="cards-card_details">
                <h2 className="cards-card_title">{ name }</h2>
                <p className="cards-card_status">{ status } - { species }</p>
                <p className="cards-card_location">{ location.name } </p>
                <button className="openUpButton"> Open Up</button>
            </div>
        </div>
    </div>
  )
}
