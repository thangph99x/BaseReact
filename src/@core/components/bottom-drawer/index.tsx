import styled from "@emotion/styled";
import { Button, ButtonGroup } from "reactstrap";
import { Drawer } from "antd";
import React, { useState } from "react";
import "./style.scss";

interface TabDrawer {
  id: number | null;
  label: string | null;
}

const ButtonDrawer = ({ drawerButtons }: any) => {
  const [tabDrawer, setTabDrawer] = useState<TabDrawer>();
  const [content, setContent] = useState(null);
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setTabDrawer({ id: null, label: null });
    setVisible(false);
    setContent(null);
  };
  const toggleDrawer = (value: any) => {
    if (tabDrawer && tabDrawer.id === value.id) {
      onClose();
    } else {
      setContent(value.children);
      setTabDrawer(value);
      setVisible(true);
    }
  };

  return (
    <>
      <Container>
        <div className="space-align-block">
          <ButtonGroup>
            {drawerButtons.map((value: any) => (
              <Button
                key={value.label}
                color={
                  tabDrawer && value.id === tabDrawer.id
                    ? "primary"
                    : "secondary"
                }
                className="btn_footer_vtsi"
                onClick={() => toggleDrawer(value)}
              >
                {value.label}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </Container>
      <Drawer
        title={<Title>{tabDrawer && tabDrawer.label}</Title>}
        placement="bottom"
        height={482}
        onClose={onClose}
        visible={visible}
        getContainer={false}
        headerStyle={{
          backgroundColor: "#434853",
          border: 0,
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          textAlign: "center",
          padding: "10px 0 0 0",
        }}
        bodyStyle={{ background: "#282b30" }}
        className="drawer_tvsi"
      >
        <Content style={{ alignItems: "center" }}>{content}</Content>
      </Drawer>
    </>
  );
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #292b30;
  z-index: 1005;
  position: absolute;
  bottom: 0;
`;

export const Title = styled.h4`
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 1.1px;
`;

export const Content = styled.div`
  background: #292b30;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-stat;
  padding: 5px 10px;
  border-radius: 5px;
`;

export default ButtonDrawer;
