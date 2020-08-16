import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage";
import NotFoundPage from "../../components/NotFoundPage";
import NavbarHeader from "../NavbarHeader";
import { Container, Row, Col } from "react-bootstrap";
import SideMenu from "../SideMenu";
import GalleryPage from "../GalleryPage";
import AlertMsg from "../AlertMsg";

const Routes = () => {
  return (
    <>
      <NavbarHeader />
      <Container fluid>
        <Row>
          <SideMenu />
          <Col md={9} className="d-flex justify-content-center">
            <AlertMsg />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/gallery" component={GalleryPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Routes;
