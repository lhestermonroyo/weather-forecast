import React from 'react';

const Main = (props) => {
  const { children } = props;

  return (
    <main className='main'>
      <div className='main-container'>{children}</div>
    </main>
  );
};

export default Main;
