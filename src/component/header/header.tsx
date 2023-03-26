import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
    const fPushRouter = (route: string) => {
        window.location.href = `/${route}`
    }

    return (
        <div className="header">
            <div className="header__content">
                <div>
                    <Link
                        to={`/weather`}
                        className="header-item"
                    >
                        Погода
                    </Link>
                </div>

                <div
                    className="header-item"
                    onClick={() => {
                        fPushRouter('news')
                    }}
                >
                    <div className="header-item__text">
                        Новости
                    </div>
                </div>
                <div
                    className="header-item"
                    onClick={() => {
                        fPushRouter('gym')
                    }}
                >
                    <div className="header-item__text">
                        Тренировки
                    </div>
                </div>
                <div
                    className="header-item"
                    onClick={() => {
                        fPushRouter('food')
                    }}
                >
                    <div className="header-item__text">
                        Хочу кушать
                    </div>
                </div>
                <div className="avatar">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="white"
                        className="bi bi-person-circle"
                        viewBox="0 0 16 16"
                    >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path
                            fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Header
