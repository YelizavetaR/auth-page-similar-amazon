import styled from "styled-components";

const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* min-height: 100vh; */
  padding: 15px;
  background-color: #fff;

  .login-container {
    margin: 15px;
    width: 348px;
    border: 1px solid #ddd;
    padding: 20px 26px;
    border-radius: 5px;
  }

  .ant-form-item {
    margin-bottom: 10px;
  }

  .info {
    font-size: 12px;
  }

  .sign-in {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .caret-down {
    color: #666;
    font-size: 11px;
  }

  .a-divider.a-divider-break {
    text-align: center;
    position: relative;
    top: 2px;
    padding-top: 1px;
    margin-bottom: 14px;
    line-height: 0;

    h5 {
      line-height: 1;
      font-size: 12px;
      color: #767676;
      font-weight: 400;
      z-index: 2;
      position: relative;
      display: inline-block;
      background-color: #fff;
      padding: 0 8px 0 7px;
    }

    &:after {
      content: "";
      width: 100%;
      background-color: transparent;
      display: block;
      height: 1px;
      border-top: 1px solid #e7e7e7;
      position: absolute;
      top: 50%;
      margin-top: -1px;
      z-index: 1;
    }
  }
`;

export default LoginStyle;