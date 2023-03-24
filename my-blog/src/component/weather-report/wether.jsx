import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    getReport,
    fetchReport,
} from '../../store/weather/weatherSlice.js'
import './weather.css'

const Weather = () => {
    const dispatch = useDispatch()

    const [disabled, setDisabled] = useState(true)

    const [input, setInput] = useState(' ')

    const weather = useSelector(
        (state) => state.weather.weather
    )

    const confirmInput = () => {
        dispatch(fetchReport(input))
        setInput(' ')
    }

    const fCheckInput = (e) => {
        if (e) {
            setInput(e)
            setDisabled(false)
        } else setDisabled(true)
    }
    useEffect(() => {
        dispatch(fetchReport())
    }, [dispatch])

    return weather ? (
        <div className="wrapper">
            <div className="content-weather">
                <div className="content-weather__description">
                    <h1>{weather?.location?.name}</h1>
                    <h1>{weather?.current?.temp_c} °C</h1>
                </div>
                <div className="img">
                    <img
                        className="img-item"
                        src={
                            weather?.current?.condition
                                ?.icon
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
                div
                class="spinner-grow"
                role="status"
            ></div>
        </div>
    )
}

export default Weather
