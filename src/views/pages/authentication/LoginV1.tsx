import { Link, useHistory } from "react-router-dom";
import { Facebook, Twitter, Mail, GitHub, Coffee } from "react-feather";

import InputPasswordToggle from "@components/input-password-toggle";

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Button,
} from "reactstrap";
import "@styles/base/pages/page-auth.scss";
import themeConfig from "../../../configs/themeConfig";
import { useForm } from "react-hook-form";
import { getHomeRouteForLoggedInUser, isObjEmpty } from "@utils";
import { encodePass } from "../../../utility/Utils";
import React, { Fragment, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { AbilityContext } from "@src/utility/context/Can";
import { useSkin } from "@hooks/useSkin";
import useApi from "../../../services/UseAppApi";
import { handleLogin } from "@store/actions/auth";
import classnames from "classnames";
import Avatar from "@components/avatar";
import { Slide, toast } from "react-toastify";

const ToastContent = ({ name, role }: any) => (
  <Fragment>
    
    <div className="toastify-header">
      
      <div className="title-wrapper">
        
        <Avatar size="sm" color="success" icon={<Coffee size={12} />} />
        
        <h6 className="toast-title font-weight-bold">Welcome, {name}</h6>
      </div>
    </div>
    
    <div className="toastify-body">
      
      <span>
        You have successfully logged in as an {role} user to TVSI. Now you can
        start to explore. Enjoy!
      </span>
    </div>
  </Fragment>
);

const LoginV1 = () => {
  const { register, errors, handleSubmit } = useForm();
  const [skin, setSkin] = useSkin();
  const ability = useContext(AbilityContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const [userId, setUserId] = useState("000766");
  const [passwordEn, setPasswordEn] = useState("12345678");

  const onSubmit = (data: any) => {
    if (isObjEmpty(errors)) {
      const password = encodePass(passwordEn);
      const DeviceInfo = JSON.stringify({
        FirebaseDeviceToken: "web-000766",
        uniqueId: "web-000766",
        brand: "web",
        buildNumber: "0",
        carrier: "",
        deviceName: "web",
        firstInstallTime: 0,
        fingerprint: "",
        fontScale: 0,
        freeDiskStorage: 0,
        ip: "",
        lastUpdateTime: 0,
        manufacturer: "",
        maxMemory: 0,
        model: "",
        systemName: "web",
        systemVersion: "0",
        buildId: "",
        TotalDiskCapacity: 0,
        totalMemory: 0,
      });
      console.log("passwordEn: ", password);
      useApi
        .login({ userId, password, DeviceInfo })
        .then((res) => {
          if (res.data.success) {
            const userData = {
              id: 1,
              fullName: "John Doe",
              username: "johndoe",
              avatar: "/static/media/avatar-s-11.1d46cc62.jpg",
              email: "admin@demo.com",
              role: "admin",
              ability: [
                {
                  action: "manage",
                  subject: "all",
                },
              ],
              extras: {
                eCommerceCartItemsCount: 5,
              },
              accessToken:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUyODY3NTY3LCJleHAiOjE2NTI4NjgxNjd9.L8aW6C5-_eKz83NK2hOMV70xCWMtGDEk8-xQ7yqeXt0",
              refreshToken:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUyODY3NTY3LCJleHAiOjE2NTI4NjgxNjd9.Hf5WZI_CWLGF1MNCn3PJWvIW4quwAIXGoo9qf9NDtIQ",
            };
            const data = {
              ...userData,
              accessToken: res.data.data.accessToken,
              refreshToken: res.data.data.refreshToken,
            };
            dispatch(handleLogin(data));
            
            ability.update(userData.ability);
            // history.push(getHomeRouteForLoggedInUser(data.role))
            history.push(getHomeRouteForLoggedInUser("admin"));
            toast.success(
                          <ToastContent
                name={data.fullName || data.username || "John Doe"}
                role={data.role || "admin"}
              />,
              { transition: Slide, hideProgressBar: true, autoClose: 2000 }
            );
          } else {
            toast.error(
                          <ToastContent name={"Có lỗi!"} role={"admin"} />,
              { transition: Slide, hideProgressBar: true, autoClose: 2000 }
            );
          }
        })
        .catch((err) => console.log(err));
    }
  };
  
  return (
    <div className="auth-wrapper auth-v1 px-2">
    
    <div className="auth-inner py-2">
      
      <Card className="mb-0">
        <CardBody>
          
          
          <Link
            className="brand-logo"
            to="/"
            onClick={(e) => e.preventDefault()}
          >
            
            <img src={themeConfig.app.appLogoImage} alt="logo" />
  
            {/* <h2 className="brand-text text-primary ml-1">TVSI</h2> */}
          </Link>
          
          <CardTitle tag="h4" className="mb-1">
            
           Welcome to TVSI! 👋
          </CardTitle>
          
          
          <CardText className="mb-2">
            Please sign-in to your account and start the adventure
          </CardText>
          
          
          <Form
            className="auth-login-form mt-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormGroup>
              
              
              <Label className="form-label" for="login-email">
                
               Tài khoản
              </Label>
              
              
              <Input
                autoFocus
                type="text"
                value={userId}
                id="login-email"
                name="login-email"
                placeholder="john@example.com"
                onChange={(e: any) => setUserId(e.target.value)}
                // className={classnames({ 'is-invalid': errors['login-email'] })}
                innerRef={register({
                  required: true,
                  validate: (value) => value !== "",
                })}
              />
            </FormGroup>
            <FormGroup>

              <div className="d-flex justify-content-between">
                
                
                <Label className="form-label" for="login-password">
                  
                   Password
                </Label>
                
                
                <Link to="/pages/forgot-password-v1">
                  
                  
                  <small>Forgot Password?</small>
                </Link>
              </div>
              
              
              <InputPasswordToggle
                value={passwordEn}
                id="login-password"
                name="login-password"
                className="input-group-merge"
                onChange={(e: any) => setPasswordEn(e.target.value)}
                
                className={classnames({
                  "is-invalid": errors["login-password"],
                })}
                innerRef={register({
                  required: true,
                  validate: (value) => value !== "",
                })}
              />
            </FormGroup>
            <FormGroup>
              
              
              <CustomInput
                type="checkbox"
                className="custom-control-Primary"
                id="remember-me"
                label="Remember Me"
              />
            </FormGroup>
            
            <Button.Ripple type="submit" color="primary" block>
              
             Sign in
            </Button.Ripple>
          </Form>
          
          <p className="text-center mt-2">
            
            <span className="mr-25">New on our platform?</span>
            
            <Link to="/pages/register-v1">
              
              
              <span>Create an account</span>
            </Link>
          </p>
          
          <div className="divider my-2">
            
            <div className="divider-text">or</div>
          </div>
          
          <div className="auth-footer-btn d-flex justify-content-center">
            
            <Button.Ripple color="facebook">
              
              
              <Facebook size={14} />
            </Button.Ripple>
            
            <Button.Ripple color="twitter">
              
              
              <Twitter size={14} />
            </Button.Ripple>
            
            <Button.Ripple color="google">
              
              
              <Mail size={14} />
            </Button.Ripple>
            
            
            <Button.Ripple className="mr-0" color="github">
              
              
              <GitHub size={14} />
            </Button.Ripple>
          </div>
        </CardBody>
      </Card>
    </div>
  </div>
  )
};

export default LoginV1;
