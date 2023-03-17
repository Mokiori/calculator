import './display.css';

interface DisplayProps {
  display: string;
}

const Display = ({display}: DisplayProps) => (
  <div className="display">
    {display}
  </div>
);

export default Display;