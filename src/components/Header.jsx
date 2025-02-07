import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid d-flex justify-content-center align-items-center">
                    <Link class="navbar-brand d-flex align-items-center" href="#">
                        <img src="https://img.icons8.com/?size=100&id=11139&format=png&color=000000" alt="Logo" width="60" height="54" class="d-inline-block align-text-top" />
                        MovieLand
                    </Link>
                </div>
            </nav>

        </header>
    )
}

export default Header