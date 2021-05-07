import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Typography, Form, Input, Button, Checkbox } from 'antd';
import {
  CaretDownOutlined
} from '@ant-design/icons';

import LoginDiv from './Login.style';
import { LoginUser } from '../../redux/actions/auth';

const { Title, Text, Link } = Typography;

function Login({ LoginUser, history }) {

  const [state, setState] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    })
  };

  const handleLogin = () => {

    LoginUser(state, history);
  }

  return (
    <LoginDiv>
      <i className="a-icon a-icon-logo" role="img" aria-label="Amazon"></i>
      <div className="login-container">
        <Title level={3}>Sign-In</Title>
        <Form
          layout="vertical"
        >
          <Form.Item label="Email or mobile phone number">
            <Input value={state.email} name="email" onChange={handleChange} />
          </Form.Item>
          <Form.Item label="Password">
            <Input type="password" value={state.password} name="password" onChange={handleChange} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" block className="sign-in" onClick={handleLogin}>Sign-In</Button>
          </Form.Item>
          <div>
            <Text className="info">By continuing, you agree to Amazon's <Link href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088" target="_blank">Conditions of Use</Link> and <Link href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496" target="_blank">Privacy Notice</Link>.</Text>
          </div>
          <Form.Item>
            <Checkbox>
              Keep me signed in.  <a href="#detail">Details <CaretDownOutlined className="caret-down" /></a>
            </Checkbox>
          </Form.Item>
          <div className="a-divider a-divider-break"><h5>New to Amazon?</h5></div>
          <Form.Item>
            <Button type="default" block>Create your Amazon account</Button>
          </Form.Item>
        </Form>
      </div>
    </LoginDiv>
  );
}

const mapDispatchToProps = {
  LoginUser
}

export default connect(null, mapDispatchToProps)(Login);