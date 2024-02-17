import { useContext } from 'react';
import { loadingContext } from '../reactContext/loading';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
export function ButtonLink({ link, title, nameClass, icon, onClick }) {
  return (
    <Link
      className={`anchor ${nameClass ? nameClass : ''}`}
      to={link}
      preventScrollReset={true}
      onClick={onClick}
    >
      {title}
    </Link>
  );
}

export function Button({
  style = useContext(loadingContext),
  msg,
  isDisabled,
  nameClass,
  onClick,
  type = 'submit',
}) {
  const [btnDisabled, setBtnDisabled] = useState(false);
  useEffect(() => {
    if (style === 'loading' || style === 'submitting' || isDisabled)
      return setBtnDisabled(true);
    return setBtnDisabled(false);
  }, [style, isDisabled]);
  return (
    <button
      className={`btn ${nameClass ? `btn__${nameClass}` : ''}`}
      disabled={btnDisabled}
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: btnDisabled ? '#74c0fc' : '#1c7ed6',
        cursor: btnDisabled ? 'default' : 'pointer',
      }}
    >
      {msg}
    </button>
  );
}

// ? '#1c7ed6'
// : '#74c0fc',
