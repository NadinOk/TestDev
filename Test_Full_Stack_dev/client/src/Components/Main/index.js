// Routing
import { Outlet } from "react-router-dom";
// Styles
import Styles from "./styles.module.scss";
// Components
import Header from "../Header";
import Footer from "../Footer";
import {MainPage} from "../../Pages";

const Main = ({ footer }) => {
    return (
        <div className={Styles.container}>
            <Header />
            <main className={Styles.main_content}>
                <MainPage />
            </main>
            <div style={{ width: "100%", height: '20%', background: "#1C3B55" }}>
                {footer && <Footer />}
            </div>

        </div>
    );
};

export default Main;
