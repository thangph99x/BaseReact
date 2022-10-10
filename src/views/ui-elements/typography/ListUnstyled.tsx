import { Card, CardHeader, CardTitle, CardBody, CardText } from "reactstrap";
import React from "react";

const ListUnstyled = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h4">Lists Unstyled</CardTitle>
    </CardHeader>

    <CardBody>
      <CardText>
        <strong>This only applies to immediate children list items</strong>
      </CardText>
      <ul className="list-unstyled">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Integer molestie lorem at massa</li>
        <li>Facilisis in pretium nisl aliquet</li>
        <li>
          <ul>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Vestibulum laoreet porttitor sem</li>
            <li>Ac tristique libero volutpat at</li>
          </ul>
        </li>
        <li>Faucibus porta lacus fringilla vel</li>
        <li>Aenean sit amet erat nunc</li>
        <li>Eget porttitor lorem</li>
      </ul>
    </CardBody>
  </Card>
);
export default ListUnstyled;
