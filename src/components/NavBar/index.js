import React from "react";
import {Container, NavLink, Navbar, Button} from "react-bootstrap";
import {StyledNav} from "./styles";
import constants from "../../constants";
import {Link, useNavigate} from "react-router-dom";
import {removeToken} from "../../utils/token";

const menu = [
    {path: constants.ROUTES.FOOD_LIST, text: "Food List"},
    {path: constants.ROUTES.TABLE_LIST, text: "Table List"}
]


const NavBarComp = () => {
    const navigate = useNavigate();

    const onLogoutHandler = () => {
        removeToken();
        navigate(constants.ROUTES.LOGIN);
    }

    return (
        <Navbar bg="light" expand="light" sticky={"top"}>
            <Container>
                <Navbar.Brand onClick={() => navigate(constants.ROUTES.DASHBOARD)}
                              style={{cursor: "pointer"}} className="text-success fw-bold">
                    /WMB
                </Navbar.Brand>
                <StyledNav>
                    {menu?.map((item, index) => (

                            <Link className="nav-link mx-3" to={item.path} key={index}>{item.text}
                            </Link>
                        // <Button variant="outline-dark my-3" onClick={() => navigate(item.path)}
                        // className="mx-2">{item.text}
                        // </Button>
                        )
                    )}
                </StyledNav>
                <Navbar.Text>
                    <a href="" onClick={onLogoutHandler}>Logout</a>
                </Navbar.Text>
            </Container>
        </Navbar>
    );
}

export default NavBarComp;
