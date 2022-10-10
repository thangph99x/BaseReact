import { Fragment, useState } from "react";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
  Row,
  Col,
} from "reactstrap";

const ModalDestructuring = () => {
  const [visibility, setVisibility] = useState(false);
  const [unmountOnClose, setUnmountOnClose] = useState(true);

  const changeUnmountOnClose = (e: any) => {
    const { value } = e.target;
    setUnmountOnClose(JSON.parse(value));
  };

  return (
      <Fragment>
      
      <Form onSubmit={(e: any) => e.preventDefault()}>
        
        <Row>
          
          <Col className="mb-sm-0 mb-1" sm="12" md="8" lg="4">
            
            <Input
              type="select"
              name="unmountOnClose"
              id="unmountOnClose"
              onChange={(e: any) => changeUnmountOnClose(e)}
            >
              
              <option value="true">true</option>
              
              <option value="false">false</option>
            </Input>
          </Col>
          
          <Col sm="12" md="8" lg="4">
            
            <Button
              color="success"
              onClick={() => setVisibility(!visibility)}
              outline
            >
              Launch Modal
            </Button>
          </Col>
        </Row>
      </Form>
      
      <Modal
        isOpen={visibility}
        toggle={() => setVisibility(!visibility)}
        unmountOnClose={unmountOnClose}
      >
        
        <ModalHeader toggle={() => setVisibility(!visibility)}>
          Modal title
        </ModalHeader>
        
        <ModalBody>
          
          <Input
            type="textarea"
            placeholder="Write something (data should remain in modal if unmountOnClose is set to false)"
            rows={5}
          />
        </ModalBody>
        
        <ModalFooter>
          
          <Button
            color="primary"
            onClick={() => setVisibility(!visibility)}
            outline
          >
            Accept
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};
export default ModalDestructuring;
