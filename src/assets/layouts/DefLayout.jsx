import { Outlet } from "react-router-dom";
import Header from "../../components/Header";


const DefLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default DefLayout