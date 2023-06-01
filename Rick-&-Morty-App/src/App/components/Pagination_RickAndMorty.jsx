export const Pagination_RickAndMorty = ({ results, info, onFetchAPI }) => {
      
  return (
    <div className="container">
        <div className="pagination">
            <div className="pagination-buttons">
                <button className="pagination-buttons_click">
                    Prev
                </button>
                <button 
                    onClick={ () => onFetchAPI(info.next) }
                    className="pagination-buttons_click"
                >
                    Next
                </button>
            </div>
            <div className="pagination-counter">
                <p>Displayed: { results.length }  </p>
            </div>
        </div>
    </div>
  )
}
