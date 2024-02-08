
import { Nav, Navbar, NavDropdown, Col, Row, Container, Dropdown } from "react-bootstrap";
import "./Navbar.css";




export function MyNavbar() {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="shadow p-3 bg-white">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        
                        <Nav className="me-auto">
                            <NavDropdown title="COMMERCIAL VEHICLE" id="basic-nav-dropdown" >
                                <Container className="Nav__dropdownList pt-0 mt-0">
                                    <Row className="">
                                        <Col xs="12"  className="text-left mt-3">
                                            <Nav.Link href="https://raceautoindia.com/Commercial-Vehicle">All</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/Commercial-Vehicle/bus-and-coach">Bus and Coach</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/Commercial-Vehicle/truck">Truck</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/Commercial-Vehicle/trailer">Trailer</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/Commercial-Vehicle/application-builders">Application Builders</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/Commercial-Vehicle/Industry">Industry</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/Commercial-Vehicle/logistics-and-fleet">Logistics and Fleet</Nav.Link>
                                        </Col>

                                    
                                    </Row>
                                </Container>
                            </NavDropdown>
                            <NavDropdown title="AUTO COMPONENTS" id="basic-nav-dropdown">
                                <Container className="Nav__dropdownList pt-0 mt-0">
                                    <Row className="">
                                        <Col xs="12"  className="text-left mt-3">
                                            <Nav.Link href="https://raceautoindia.com/auto-components">All</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/auto-components/agro-segment">Agro Segment</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/auto-components/battery-infra">Battery & Infra</Nav.Link>
                                            <Dropdown.Divider /> 
                                            <Nav.Link href="https://raceautoindia.com/auto-components/auto-finance">Auto Finance</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/auto-components/accessories">Accessories</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/auto-components/wheels-braking">Wheels & Brakings</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/auto-components/cooling-lubes">Cooling & Lubes</Nav.Link>
                                            
                                        </Col>

                                        
                                    </Row>
                                </Container>
                            </NavDropdown>
                            <NavDropdown title="TECHNOLOGY" id="basic-nav-dropdown">
                                <Container className="Nav__dropdownList pt-0 mt-0">
                                    <Row className="">
                                        <Col xs="12" className="text-left mt-3">
                                            <Nav.Link href="https://raceautoindia.com/technology">All</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/technology/engine-powertrain">Engine & Powertrain</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/technology/braking-system">Braking System</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/technology/running-gear">Running gear</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/technology/on-off-chassis-application">On & Off Chassis Application</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/technology/electrical-electronic-systems">Electrical & Electronic Systems</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/technology/safety-connectivity">Safety & Connectivity</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/technology/chassis">Chassis</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/technology/new-energy-technology">New Energy Technology</Nav.Link>
                                        </Col>

                                        
                                    </Row>
                                </Container>
                            </NavDropdown>
                            <NavDropdown title="BUSINESS" id="basic-nav-dropdown">
                                <Container className="Nav__dropdownList pt-0 mt-0">
                                    <Row className="">
                                        <Col xs="12" className="text-left mt-3">
                                            <Nav.Link href="https://raceautoindia.com/FINACIALS">All</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/FINACIALS/policy-regulations">Policy & Regulations</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/FINACIALS/joint-venture">Joint Venture</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/FINACIALS/investment">Investment</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/FINACIALS/mergers-acquisition">Mergers & Acquisition</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/FINACIALS/financials">Financials</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/FINACIALS/appointments-restructure">Appointments & Restructure</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/FINACIALS/startups">Startups</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/FINACIALS/agreements-stratergies">Agreements & Stratergies</Nav.Link>
                                        </Col>

                                        
                                    </Row>
                                </Container>
                            </NavDropdown>
                            <NavDropdown title="CLASSIFIEDS" id="basic-nav-dropdown">
                                <Container className="Nav__dropdownList pt-0 mt-0">
                                    <Row className="">
                                        <Col xs="12" className="text-left mt-3">
                                            <Nav.Link href="https://raceautoindia.com/Classifieds">All</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/Classifieds/bus">Bus</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/Classifieds/truck-50">Truck</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/Classifieds/construction-equipment">Construction Equipment</Nav.Link>
                                            <Dropdown.Divider />
                                            <Nav.Link href="https://raceautoindia.com/Classifieds/equipment-machineries">Equipment & Machineries</Nav.Link>
                                        
                                        </Col>

                                        
                                    </Row>
                                </Container>
                            </NavDropdown>
                            <NavDropdown title="MORE" id="basic-nav-dropdown">
                                <Container className="Nav__dropdownList pt-0 mt-0">
                                    <Row className="">
                                        <Col xs="12" className="text-left">
                                            <Nav.Link href="https://raceautoindia.com/gallery">Gallery</Nav.Link>  
                                        </Col>

                                        
                                    </Row>
                                </Container>
                            </NavDropdown>
                           
                        </Nav>
                        <Nav>
                            <Nav.Link href="https://raceautoindia.com/contact">Contact</Nav.Link>
                            <Nav.Link eventKey={2} href="https://raceautoindia.com/about-us">
                                About Us
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
