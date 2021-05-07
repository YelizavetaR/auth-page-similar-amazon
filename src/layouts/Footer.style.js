import styled from "styled-components";

const FooterStyle = styled.div`
  .a-divider {
    height: 20px;

    .divider{
      height: 44px;
      background: linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3px,transparent);

      &::after {
        background: linear-gradient(to right,#fff, rgba(255, 255, 255, 0),#fff);
        content: "";
        display: block;
        height: 44px;
        z-index: 1;
        width: 100%;
      }
    }
  }
  footer {
    .small {
      font-size: 11px;
    }
    a {
      color: #18b;
    }
    p {
      color: #ddd;
    }
  }
`;

export default FooterStyle;