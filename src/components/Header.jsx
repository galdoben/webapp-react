import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid d-flex justify-content-center align-items-center">
                    <Link className="navbar-brand d-flex align-items-center" href="#">
                        <img src="https://img.icons8.com/?size=100&id=11139&format=png&color=000000" alt="Logo" width="60" height="54" className="d-inline-block align-text-top" />
                        MovieLand
                    </Link>
                    <Link className="btn btn-warning" to="/movie/add">
                        Aggiungi Film
                    </Link>
                </div>
            </nav>

        </header>
    )
}

export default Header