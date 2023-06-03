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
                <p>Results: <span>{ count }</span> </p>
                <p>Displayed: <span>{ results.length }</span>  </p>
                <p>Pages: <span>{ pages }</span> </p>
            </div>
        </div>
    </div>
  )
}
