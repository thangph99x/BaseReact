import { Fragment } from "react";

import { Row, Col } from "reactstrap";

import Breadcrumbs from "@components/breadcrumbs";


import BasicHookForm from "./BasicHookForm";
import ValidationSchema from "./ValidationSchema";
import AsyncValidationForm from "./AsyncValidation";

import ValidationThirdPartyComponents from "./ValidationThirdPartyComponents";

const ReactHookForm = () => (
  <Fragment>
    
    <Breadcrumbs
      breadCrumbTitle="React Hook Form"
      breadCrumbParent="Form"
      breadCrumbActive="React Hook Form"
    />
    
    <Row className="match-height">
      
      <Col lg="12" md="24">
        
        <BasicHookForm />
      </Col>
      
      <Col lg="12" md="24">
        
        <ValidationThirdPartyComponents />
      </Col>
      
      <Col lg="12" md="24">
        
        <ValidationSchema />
      </Col>
      
      <Col lg="12" md="24">
        
        <AsyncValidationForm />
      </Col>
    </Row>
  </Fragment>
);

export default ReactHookForm;
