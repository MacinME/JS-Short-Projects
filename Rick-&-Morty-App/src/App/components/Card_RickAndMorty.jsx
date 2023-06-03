export const Card_RickAndMorty = ({ character, setOneCharacter, index }) => {

  const { name, image, location } = character;

  const oneCharacter = {
    id: index + 1,
    character,
    status: true
  }

  return (
    <div className="cards-card_container">
        <div className="cards-card">
            <div className="cards-card_img">
                <img src={ image } alt={ name } />
            </div>
            <div className="cards-card_details">
                <h2 className="cards-card_title">{ name }</h2>
                <p className="cards-card_location">{ location.name } </p>
                <button 
                  onClick={ () => setOneCharacter( oneCharacter ) }
                  className="openUpButton"
                > Open Up</button>
            </div>
        </div>
    </div>
  )
}
