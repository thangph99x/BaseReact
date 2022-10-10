// ** React Imports
import { Fragment } from "react";

// ** Custom Components

import Breadcrumbs from "@components/breadcrumbs";

// ** Third Party Components

import { Row, Col } from "reactstrap";

// ** Tables

import TableExpandable from "./TableExpandable";
import TableZeroConfig from "./TableZeroConfig";

import TableWithButtons from "./TableWithButtons";

import TableMultilingual from "./TableMultilingual";

// ** Styles
import "@styles/react/libs/tables/react-dataTable-component.scss";

const Tables = () => (
  <Fragment>
    
    <Breadcrumbs
      breadCrumbTitle="Datatables"
      breadCrumbParent="Home"
      breadCrumbActive="Datatables Basic"
    />
    
    <Row>
      
      <Col sm="24">
        
        <TableZeroConfig />
      </Col>
      
      <Col sm="24">
        
        <TableWithButtons />
      </Col>
      
      <Col sm="24">
        
        <TableExpandable />
      </Col>
      
      <Col sm="24">
        
        <TableMultilingual />
      </Col>
    </Row>
  </Fragment>
);

export default Tables;
