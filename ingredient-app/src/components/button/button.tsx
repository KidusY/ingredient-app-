import React from 'react';
interface ButtonProps {
  count: number;
  getChildData: (data: number) => void;
}

export const Button = (props: ButtonProps) => {
  const x = 1;
  console.log(props);
  const clickHandler = () => {
    props.getChildData(x);
  };
  return (
    <div>
      <button id="button" onClick={clickHandler}>
        Click {props.count}
      </button>
    </div>
  );
};

export default Button;
