import { useContext, useEffect, useState } from "react";
import { Container } from "reactstrap";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Footer.scss";

function Footer() {
    //context
    const { theme } = useContext(ThemeContext);

    const [time, setTime] = useState(() => new Date(Date.now()));

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <footer className={`${"footer"} ${theme}`}>
            <Container>
                <span>{time.toUTCString()}</span>
            </Container>
        </footer>
    );
}

export default Footer;
