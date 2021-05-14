// React
import React, { FunctionComponent } from 'react';

type FooterProps = {
  text?: string
};

const Footer: FunctionComponent<any> = (props: FooterProps) => {
  const {
    text=`Built with React in ${new Date().getFullYear()}`
  } = props;

  return (
    <footer>
      {text}
    </footer>
  );
}

export default Footer;
