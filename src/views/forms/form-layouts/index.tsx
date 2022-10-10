import { Fragment } from "react";

import { Row, Col } from "reactstrap";

import Breadcrumbs from "@components/breadcrumbs";
import HorizontalForm from "./HorizontalForm";
import HorizontalFormIcons from "./HorizontalFormIcons";
import VerticalForm from "./VerticalForm";
import VerticalFormIcons from "./VerticalFormIcons";
import MultipleColumnForm from "./MultipleColumnForm";

const FormLayouts = () => (
  <Fragment>
    
    <Breadcrumbs
      breadCrumbTitle="Form Layouts"
      breadCrumbParent="Form"
      breadCrumbActive="Form Layouts"
    />
    
    <Row>
      
      <Col md="12" sm="24">
        
        <HorizontalForm />
      </Col>
      
      <Col md="12" sm="24">
        
        <HorizontalFormIcons />
      </Col>
      
      <Col md="12" sm="24">
        
        <VerticalForm />
      </Col>
      
      <Col md="12" sm="24">
        
        <VerticalFormIcons />
      </Col>
      
      <Col sm="24">
        
        <MultipleColumnForm />
      </Col>
    </Row>
  </Fragment>
);
export default FormLayouts;
