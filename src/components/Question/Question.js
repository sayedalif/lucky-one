import React from 'react';

const Question = () => {
  return (
    <div>
      <h1>How react JS works?</h1>
      <h2>
        react is a component based front end frame work. it creates virtual DOM
        to rerender the website so it is focused on performance. it is open
        source and maintained by facebook.
      </h2>

      <h1>what's the different between props and state ?</h1>
      <h2>props: props are readonly and they can't be modified.</h2>
      <h2>
        state: state can be asynchronous. state can be change bt this.state
      </h2>
    </div>
  );
};

export default Question;
