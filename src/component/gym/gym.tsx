import { useAppDispatch, useAppSelector } from '../../store/hooks/hoook'
import './gym.scss'
import { fAddNewDay } from '../../store/reducer/gymSlice'
import { useState } from 'react'
const Gym = () => {
  const [modalStatus, setModalStatus] = useState(false)

  const [newDay, setNewDay] = useState('')

  const menuItem = useAppSelector((state) => state.gymSlice.day)

  const dispatch = useAppDispatch()

  const [exerciseСompleted, setExerciseСompleted] = useState([])

  const [newItem, setNewItem] = useState(null)

  const onDragStart = (item) => {
    setNewItem(item)
  }

  const onDragEnd = () => {
    setExerciseСompleted([...exerciseСompleted, newItem])

    mokinfo = mokInfo.filter((e) => e.id !== newItem.id)
    setMokinfo(mokinfo)
  }

  const choiceCurrentDay = (id: number) => {
    console.log(id)

    mokinfo = mokinfo.filter((item) => item.id === id)
    console.log(mokinfo)

    setMokinfo(mokinfo)
  }

  let mokinfo = [
    {
      id: 1,
      text: 'армейский жим',
      count: 20,
      weight: 100,
    },
    {
      id: 2,
      text: 'жим штанги от груди',
      count: 20,
      weight: 100,
    },
    {
      id: 3,
      text: 'жим штанги на наклонной скамье',
      count: 20,
      weight: 100,
    },
    {
      id: 1,
      text: 'триц',
      count: 20,
      weight: 100,
    },
    {
      id: 1,
      text: 'тяга штанги',
      count: 20,
      weight: 100,
    },
    {
      id: 1,
      text: 'бицепс',
      count: 20,
      weight: 100,
    },
    {
      id: 1,
      text: 'трицепс',
      count: 20,
      weight: 100,
    },
    {
      id: 1,
      text: 'что то ещё',
      count: 20,
      weight: 100,
    },
  ]

  const [mokInfo, setMokinfo] = useState([])
  const addNew = (title: string) => {
    if (title) {
      dispatch(fAddNewDay({ id: menuItem[menuItem.length - 1].id + 1, name: title }))
    }
  }

  return (
    <div className='container'>
      {modalStatus ? (
        <div className='modal'>
          <div className='modal-content'>
            <input
              className='modal-input'
              type='text'
              autoFocus={true}
              placeholder='Введите название дня'
              value={newDay}
              onChange={(e) => {
                setNewDay(e.target.value)
              }}
            />
            <div className='modal-container'>
              <button
                className='plus'
                onClick={() => {
                  addNew(newDay)
                  setTimeout(() => {
                    setModalStatus(false)
                    setNewDay('')
                  }, 100)
                }}
              >
                ок
              </button>
              <button
                className='plus'
                style={{ color: 'red' }}
                onClick={() => {
                  setModalStatus(false)
                }}
              >
                x
              </button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
      <div className='menu'>
        {menuItem.map((item) => (
          <div
            key={item.id}
            className='menu__item'
            onClick={() => {
              choiceCurrentDay(item.id)
            }}
          >
            {item.name}
          </div>
        ))}
        <button
          className='plus'
          onClick={() => {
            setModalStatus(true)
          }}
        >
          {' '}
          +{' '}
        </button>
      </div>
      <hr />
      <div className='table'>
        <div className='item'>
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
                onDragLeave={(e) => {}}
                onDragEnd={(e) => {
                  onDragEnd()
                }}
                onDragOver={(e) => {
                  console.log('qwe')
                }}
                onDrop={(e) => {
                  console.log(e)
                }}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
        <div className='item'>
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
      </div>
    </div>
  )
}
export default Gym
