import  React from 'react';
import { useState } from 'react';
import {Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
    NavLink }from 'reactstrap';

const AppNavbar=()=> {
    
    const[isOpen , setIsOpen] = useState(false);
    const handleToggle =()=> setIsOpen(!isOpen); 
    // state={
    //     isOpen:false
    // }
    // toggle=()=>{
    //     this.setState=({
    //         isOpen:!this.state.isOpen
    //     });
    // }
        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5" >
                    {/* <Container> */}
                    <NavbarBrand className="mr-auto" href="/">ShoppingList</NavbarBrand>
                        <NavbarToggler className="mr-2" onClick={handleToggle} />
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                 <NavItem> 
                                <NavLink href = 'https://www.github.com'> Github</NavLink>
                                </NavItem>
                                <NavItem> 
                                <NavLink href = 'https://www.google.com'> Google</NavLink>
                                </NavItem>
                                </Nav>
                            </Collapse>
                    {/* </Container> */}     
                </Navbar>
                </div>
        );
    
}


export default AppNavbar;