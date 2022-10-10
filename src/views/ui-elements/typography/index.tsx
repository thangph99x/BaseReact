import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";
import Breadcrumbs from "@components/breadcrumbs";
import HTMLHeadings from "./HTMLHeadings";
import LightBoldHeadings from "./LightBoldHeadings";
import CustomizingHeadings from "./CustomizingHeadings";
import HeadingColors from "./HeadingColors";
import DisplayHeadings from "./DisplayHeadings";
import BlockquoteDefault from "./BlockquoteDefault";
import NamingSource from "./NamingSource";
import BlockquoteStyling from "./BlockquoteStyling";
import BlockquoteAvatar from "./BlockquotesAvatar";
import ListUnstyled from "./ListUnstyled";
import ListUnordered from "./ListUnordered";
import ListOrdered from "./ListOrdered";
import ListIcons from "./ListIcons";
import ListInline from "./ListInline";
import DescriptionList from "./DescriptionList";
import DescriptionListVertical from "./DescriptionListVertical";
import DescriptionListText from "./DescriptionListText";

const Typography = () => (
  <Fragment>
    <Breadcrumbs
      breadCrumbTitle="Typography"
      breadCrumbParent="UI"
      breadCrumbActive="Typography"
    />
    <Row className="match-height">
      <Col md="12" sm="24">
        <HTMLHeadings />
      </Col>
      <Col md="12" sm="24">
        <LightBoldHeadings />
      </Col>
      <Col md="12" sm="24">
        <CustomizingHeadings />
      </Col>
      <Col md="12" sm="24">
        <HeadingColors />
      </Col>
      <Col sm="24">
        <DisplayHeadings />
      </Col>
      <Col sm="24" className="mt-1">
        <div className="group-area">
          <h4>BlockQuotes</h4>
          <p>
            For quoting blocks of content from another source within your
            document. Wrap{" "}
            <code>&lt;blockquote className="blockquote"&gt;</code> around any
            HTML as the quote.
          </p>
          <hr />
        </div>
      </Col>
      <Col md="12" sm="24">
        <BlockquoteDefault />
      </Col>
      <Col md="12" sm="24">
        <NamingSource />
      </Col>
      <Col md="12" sm="24">
        <BlockquoteStyling />
      </Col>
      <Col md="12" sm="24">
        <BlockquoteAvatar />
      </Col>
      <Col sm="24" className="mt-1">
        <div className="group-area">
          <h4>Lists</h4>
          <p>
            All lists - <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, and{" "}
            <code>&lt;dl&gt;</code> - have their margin-top removed and a{" "}
            <code>margin-bottom: 1rem</code>. Nested lists have no{" "}
            <code>margin-bottom</code>.
          </p>
          <hr />
        </div>
      </Col>
      <Col md="8" sm="24">
        <ListUnstyled />
      </Col>
      <Col md="8" sm="24">
        <ListUnordered />
      </Col>
      <Col md="8" sm="24">
        <ListOrdered />
      </Col>
      <Col md="12" sm="24">
        <ListIcons />
      </Col>
      <Col md="12" sm="24">
        <ListInline />
      </Col>
      <Col sm="24" className="mt-1">
        <div className="group-area">
          <h4>Description list alignment</h4>
          <p>
            Align terms and descriptions horizontally by using our grid system’s
            predefined classes (or semantic mixins). For longer terms, you can
            optionally add a <code>.text-truncate</code> class to truncate the
            text with an ellipsis.
          </p>
          <hr />
        </div>
      </Col>
      <Col md="12" sm="24">
        <DescriptionList />
      </Col>
      <Col md="12" sm="24">
        <DescriptionListVertical />
      </Col>
      <Col sm="24">
        <DescriptionListText />
      </Col>
    </Row>
  </Fragment>
);
export default Typography;
