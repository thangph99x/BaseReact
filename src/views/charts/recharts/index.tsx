// ** React Imports
import { Fragment, useContext } from "react";

// ** Third Party Components

import { Row, Col } from "reactstrap";

// ** Custom Components

import Breadcrumbs from "@components/breadcrumbs";

// ** Charts

import PieChart from "./PieChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import AreaChart from "./AreaChart";
import RadarChart from "./RadarChart";
import ScatterChart from "./ScatterChart";

// ** Context

import { ThemeColors } from "@src/utility/context/ThemeColors";

// ** Styles
import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/libs/charts/recharts.scss";

const Recharts = () => {
  // ** Context
  const { colors } = useContext(ThemeColors);

  // ** Vars
  const donut = {
    series1: "#ffe700",
    series2: "#00d4bd",
    series3: "#826bf8",
    series4: "#2b9bf4",
    series5: "#FFA1A1",
  };

  return (
      <Fragment>
      
      <Breadcrumbs
        breadCrumbTitle="Recharts"
        breadCrumbParent="Charts"
        breadCrumbActive="Recharts"
      />
      
      <Row className="match-height">
        
        <Col sm="24">
          
          <p>
            React Chart component with bootstrap and material ui. Click 
            <a
              href="https://github.com/recharts/recharts"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>{" "}
            for github repo.
          </p>
        </Col>
        
        <Col sm="24">
          
          <LineChart warning={colors.warning.main} />
        </Col>
        
        <Col sm="24">
          
          <AreaChart primary={colors.primary.main} />
        </Col>
        
        <Col sm="24">
          
          <ScatterChart
            primary={colors.primary.main}
            danger={colors.danger.main}
            success={colors.success.main}
          />
        </Col>
        
        <Col sm="24">
          
          <BarChart primary={colors.primary.main} />
        </Col>
        
        <Col xl="12" lg="24">
          
          <RadarChart series1={donut.series1} series3={donut.series3} />
        </Col>
        
        <Col xl="12" lg="24">
          
          <PieChart
            series1={donut.series1}
            series2={donut.series2}
            series3={donut.series3}
            series5={donut.series5}
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Recharts;
