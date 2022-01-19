import React from 'react';
import style from './button.module.css';

function Button({ text, onClick, disabled }) {
  return (
    <button disabled={disabled} onClick={onClick} className={style.button}>
      {text}
    </button>
  );
}

export default Button;
