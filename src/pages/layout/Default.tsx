import React from 'react';
import { Link } from 'react-router-dom';

const Default = ({ children }: any): JSX.Element => {
  return (
        <>
            <div className={'header'}>
                <Link to="/">Home</Link>
                <Link to="/inner">Inner</Link>
            </div>
            <div className={'page-content'}>
              {children}
            </div>
        </>
  );
}

export default Default;
