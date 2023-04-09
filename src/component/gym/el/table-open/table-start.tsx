const TableStart = ({ mokInfo, onDragStart, onDragEnd }) => {
  return (
    <div>
      <h1 className='table-label'>Не начато</h1>
      <div className='table-open'>
        {mokInfo.map((item) => (
          <div
            key={item.text}
            className='table__item'
            draggable={true}
            onDragStart={(e) => {
              onDragStart(item)
            }}
            onDragEnd={(e) => {
              onDragEnd()
            }}
          >
            {item.text}
          </div>
        ))}
        <button className='btn'> + </button>
      </div>
    </div>
  )
}

export default TableStart
