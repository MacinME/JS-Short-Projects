export const Pagination_RickAndMorty = ({ results, info, onFetchAPI }) => {
  return (
    <div className="container">
        <div className="pagination">
            <div className="pagination-buttons">
                <button 
                    onClick={ () => onFetchAPI(info.prev) }
                    className="pagination-buttons_click"
                    disabled={ info.prev === null && true }
                >
                    Prev
                </button>
                <button 
                    onClick={ () => onFetchAPI(info.next) }
                    className="pagination-buttons_click"
                    disabled={ info.next === null && true }
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