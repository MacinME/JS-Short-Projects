export const CharacterInfo_RickAndMorty = ({ character }) => {
    const { name, status, species, image, location, created, gender } = character;
  return (
    <div className="character-info">
        <div className="container character-info_main">
            <div className="character-info_card">
                <div className="character-info_closeButton">
                    <button>
                        X
                    </button>
                </div>
                <div className="character-info_img">
                    <img src={ image } alt={ name } />
                </div>
                <div className="character-info_details">
                    <h4> { name } </h4>
                    <p> { status } - { species } </p>
                    <p> { gender }</p>
                    <div className="character-info_moreInfo">
                        <p>Location <span>: { location.name }</span></p>
                        <p>Created: <span>: { created }</span></p>
                    </div>
                </div> 
                <div className="character-info_buttons">
                    <button>
                        Prev
                    </button>
                    <button>
                        Next
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
