const TableDone = ({ exerciseСompleted }) => {
  return (
    <div>
      <h1 className='table-label'>Завершено</h1>
      <div className='table-done'>
        {exerciseСompleted.map((item) => (
          <div
            key={item.text}
            className='table__item'
            draggable={true}
            onDragStart={(e) => {}}
            onDragLeave={(e) => {}}
            onDragEnd={(e) => {}}
            onDragOver={(e) => {}}
            onDrop={(e) => {}}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TableDone
