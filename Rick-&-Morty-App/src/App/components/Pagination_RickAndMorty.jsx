export const Pagination_RickAndMorty = ({ results, info, onFetchAPI }) => {
    const { count, pages } = info;
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
                <p>R: <span>{ count }</span> </p>
                <p>D: <span>{ results.length }</span>  </p>
            </div>
        </div>
    </div>
  )
}
