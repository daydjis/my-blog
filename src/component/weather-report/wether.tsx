import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hoook.js'
import { fetchReport } from '../../store/reducer/ActionCreator.js'
import {
   
} from '../../store/reducer/weatherSlice.js'
import './weather.css'

const Weather = () => {
    const dispatch = useAppDispatch()

    const [disabled, setDisabled] = useState(true)

    const [input, setInput] = useState(' ')

    const {weather, isLoading, error} = useAppSelector(state => state.weatherSlice)

    const confirmInput = () => {
        dispatch(fetchReport(input))
        setInput(' ')
    }

    const fCheckInput = (e: string) => {
        if (e) {
            setInput(e)
            setDisabled(false)
        } else setDisabled(true)
    }
    useEffect(() => {
        dispatch(fetchReport("samara"))
    }, [dispatch])

    return !isLoading ? (
        <div className="wrapper">
            <div className="content-weather">
                <div className="content-weather__description">
                    <h1>{weather.location?.name}</h1>
                    <h1>{weather.current?.temp_c} °C</h1>
                </div>
                <div className="img">
                    <img
                        className="img-item"
                        src={
                            weather.current?.condition?.icon
                        }
                        alt="icon"
                    />
                </div>
                <div className="footer-container">
                    <input
                        className="input"
                        placeholder="Введите название города"
                        value={input}
                        type="text"
                        onChange={(e) => {
                            fCheckInput(e.target.value)
                        }}
                    />
                    <button
                        className="btn"
                        disabled={disabled}
                        onClick={() => {
                            confirmInput()
                        }}
                    >
                        Узнать погоду
                    </button>
                </div>
                <h6 className="Error">
                    {disabled
                        ? 'Введи название города'
                        : ''}
                </h6>
            </div>
        </div>
    ) : (
        <div className="wrapper">
            <div
                className="spinner-grow"
                role="status"
            ></div>
        </div>
    )
}

export default Weather
