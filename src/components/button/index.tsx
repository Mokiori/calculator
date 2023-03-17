import { ImArrowLeft2 } from "react-icons/im";
import { TbSquareRoot2 } from "react-icons/tb";
import './button.css';

interface ButtonProps {
  value: string;
  type: string;
  size?: string;
  onClick?: Function;
}

const Button = ({value, type, size, onClick}: ButtonProps) => {
  const click = (): void => {
    if (onClick) {
      onClick(value);
    } else {
      console.log(value);   
    }
  };

  return (
    <div onClick={click} className={`button button-${type} button-${size}`}>
      {
        value === 'clear' && <ImArrowLeft2 />
        || value === 'root' && <TbSquareRoot2 />
        || value
      }
    </div>
  );
}

export default Button;