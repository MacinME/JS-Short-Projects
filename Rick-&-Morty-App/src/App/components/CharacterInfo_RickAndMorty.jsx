export const CharacterInfo_RickAndMorty = ({ 
    oneCharacter, 
    setOneCharacter, 
    onNextCharacter, 
    onPrevCharacter,
    length
}) => {
    const { name, status, species, image, location, gender } = oneCharacter.character;

    const closeCharacter = {
        id: null,
        ...oneCharacter,
        status: false
    }
  return (
    <div className="character-info">
        <div className="container character-info_main">
            <div className="character-info_card">
                <div className="character-info_closeButton">
                    <button 
                        onClick={ () => setOneCharacter( closeCharacter ) }
                    >
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
                    </div>
                </div> 
                <div className="character-info_buttons">
                    {
                        oneCharacter.id !== 1 && (
                            <button
                                onClick={ () => onPrevCharacter(oneCharacter.id - 1) }
                            >
                                Prev
                            </button>
                        )
                    }
                    {
                        oneCharacter.id !== length && (
                            <button
                                onClick={ () => onNextCharacter(oneCharacter.id + 1) }
                            >
                                Next
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
