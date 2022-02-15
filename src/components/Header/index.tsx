import { ChangeEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Collapse,
    Input,
    Nav,
    Navbar,
    NavbarText,
    NavbarToggler,
    NavItem,
} from "reactstrap";
import { ThemeContext } from "../../contexts/ThemeContext";
import WelcomeMessage from "../WelcomeMessage";
import "./Header.scss";

function Header() {
    //context
    const { theme } = useContext(ThemeContext);

    //state
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState("Frontend");

    const onPositionChange = (e: ChangeEvent<{ value: string }>) =>
        setPosition(e.target.value);

    return (
        <header className="header">
            <Navbar
                color={theme}
                expand="md"
                container={true}
                className={`navbar-${theme}`}
            >
                <Link className="navbar-brand" to="/">
                    HELLO WORLD
                </Link>
                <NavbarToggler
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/todos">
                                Todos
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/news">
                                News
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <WelcomeMessage position={position} />
                        <Input
                            className="mt-2"
                            type="select"
                            value={position}
                            onChange={onPositionChange}
                        >
                            <option value="Frontend">Frontend</option>
                            <option value="Backend">Backend</option>
                            <option value="Fullstack">Fullstack</option>
                        </Input>
                    </NavbarText>
                    <Button color="secondary" className="ms-4">
                        Login
                    </Button>
                </Collapse>
            </Navbar>
        </header>
    );
}

export default Header;
