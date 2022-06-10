import './index.css'

export const List = (props) => {
	const { list, fields, current, itemClick } = props

	return (
		<div className="lists">
			{
				list?.map((item, index) => {
					return (
						<div className={current === item.id ? 'active-item list-item' : 'list-item' } key={index} onClick={() => { itemClick(item) }}>
							{
								fields.map((field, ind) => {
									return (
										<div className="list-item-title" key={ind}>{item[field]}</div>
									)
								})
							}
						</div>
					)
				})
			}
		</div>
	)
}