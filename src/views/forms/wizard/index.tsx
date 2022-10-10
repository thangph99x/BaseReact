import { Fragment } from "react";

import { Row, Col } from "reactstrap";

import WizardModern from "./WizardModern";

import WizardVertical from "./WizardVertical";

import WizardHorizontal from "./WizardHorizontal";

import WizardModernVertical from "./WizardModernVertical";

import BreadCrumbs from "@components/breadcrumbs";

const Wizard = () => (
  <Fragment>
    
    <BreadCrumbs
      breadCrumbTitle="Form Wizard"
      breadCrumbParent="Form"
      breadCrumbActive="Form Wizard"
    />
    
    <Row>
      
      <Col sm="24">
        
        <WizardHorizontal />
      </Col>
      
      <Col sm="24">
        
        <WizardVertical />
      </Col>
      
      <Col sm="24">
        
        <WizardModern />
      </Col>
      
      <Col sm="24">
        
        <WizardModernVertical />
      </Col>
    </Row>
  </Fragment>
);
export default Wizard;
