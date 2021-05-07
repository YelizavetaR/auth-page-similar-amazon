import React from 'react';
import { Typography } from 'antd';

import FooterDiv from './Footer.style';

const { Text, Link } = Typography;

const Footer = () => (
  <FooterDiv>
    <div className="a-divider">
      <div className="divider"></div>
    </div>
    <footer style={{ textAlign: 'center' }}>
      <Link className="small"> Conditions of Use </Link> &nbsp;&nbsp;&nbsp; <Link className="small">Privacy Notice </Link> &nbsp;&nbsp;&nbsp; <Link className="small">Help</Link>
      <br />
      <Text className="small">© 1996-2021, Amazon.com, Inc. or its affiliates</Text>
    </footer>
  </FooterDiv>
);

export default Footer;