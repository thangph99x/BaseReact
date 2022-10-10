import { Fragment } from "react";

import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  Row,
  Col,
  Button,
} from "reactstrap";

const CardTextAlignment = () => (
  <Fragment>
    
    <h5 className="mt-3 mb-2">Text alignment</h5>
    
    <Row>
      
      <Col lg="8" md="12">
        
        <Card className="mb-3">
          
          <CardBody>
            
            <CardTitle tag="h4">Special title treatment</CardTitle>
            
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            
            <Button.Ripple color="primary" outline>
              Go somewhere
            </Button.Ripple>
          </CardBody>
        </Card>
      </Col>
      
      <Col lg="8" md="12">
        
        <Card className="text-center mb-3">
          
          <CardBody>
            
            <CardTitle tag="h4">Special title treatment</CardTitle>
            
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            
            <Button.Ripple color="primary" outline>
              Go somewhere
            </Button.Ripple>
          </CardBody>
        </Card>
      </Col>
      
      <Col lg="8" md="12">
        
        <Card className="text-right mb-3">
          
          <CardBody>
            
            <CardTitle tag="h4">Special title treatment</CardTitle>
            
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            
            <Button.Ripple color="primary" outline>
              Go somewhere
            </Button.Ripple>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Fragment>
);

export default CardTextAlignment;
