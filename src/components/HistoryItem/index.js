import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list-class">
      <p className="paragraph">{timeAccessed}</p>
      <div className="display-row">
        <img src={logoUrl} alt="domain logo" className="logo-image" />
        <p className="title-class">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        type="button"
        testid="delete"
        onClick={onDelete}
        className="button-class"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
