import { useAppDispatch } from '../../../../store/hooks/hoook'
import { fRemoveDay } from '../../../../store/reducer/gymSlice'

const Menu = ({ menuItem, choiceCurrentDay, setModalStatus }) => {
  const dispatch = useAppDispatch()

  return (
    <div className='menu'>
      {menuItem.map((item) => (
        <div key={item.id} className='menu-wrapper'>
          <div
            className='menu__item'
            onClick={() => {
              choiceCurrentDay(item.id)
            }}
          >
            {item.name}
          </div>
          <button
            className='minus'
            onClick={() => {
              dispatch(fRemoveDay(item.id))
            }}
          >
            -
          </button>
        </div>
      ))}
      <button
        className='plus'
        onClick={() => {
          setModalStatus(true)
        }}
      >
        +
      </button>
    </div>
  )
}

export default Menu
