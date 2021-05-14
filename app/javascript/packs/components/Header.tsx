// React
import React, { FunctionComponent } from 'react';

type HeaderProps = {
  title?: string
};

const Header: FunctionComponent<any> = (props: HeaderProps) => {
  const {title='Header'} = props;

  return (
    <header>
      {title}
    </header>
  );
}

export default Header;
