import './index.css'

export const Pagination = (props) => {
  const { page, setPage, allPages } = props

  return (
    <div className="pagination">
      <button 
        className="btn"
        disabled={page === 1}
        onClick={() => { setPage(page - 1) }}
      >
        Пред
      </button>
      <div className="current">{page} из {allPages}</div>
      <button 
        className="btn"
        disabled={page === allPages}
        onClick={() => { setPage(page + 1) }}
      >
        След
      </button>
    </div>
  )
}