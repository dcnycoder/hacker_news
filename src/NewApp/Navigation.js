import React from 'react'
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import SearchNew from './SearchNew'


function Navigation() {
  return (
    <div className='top-nav'>

    </div>
  )
}

export default Navigation;



// const NavigationNew = ({children}) => {
//   return (
//     <Navbar bg="light" expand="lg" className="w-100 navbar">
//       <Navbar.Brand href="#home">HACKER NEWS</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#link">Link</Nav.Link>
//           <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//         <Form inline>
//           <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//           {/* {children} */}
          
//           <Button variant="outline-success">Search</Button>
//         </Form>
//       </Navbar.Collapse>
//       {/* <SearchNew /> */}
//     </Navbar>
//   )
// }

// export default NavigationNew