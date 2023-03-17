import React, { useState } from "react";
import Display from "../components/display";
import Button from "../components/button";
import { addValue } from "../utils";
import './calculator.css'

const Calculator = () => {
  const [display, setDisplay] = useState('0');

  const clickButton = (value: string): void => {
    if (display === '0') {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const clearValue = (): void => {
    const length = display.length;
    if (length === 1) {
      setDisplay('0');
    } else {
      setDisplay(display.slice(0, length - 1));
    }
  };

  const clearAll = (): void => {
    setDisplay('0');
  };

  const doOperation = (): void => {
    console.log(display);
  };

  return (
    <div className="calculator">
      <Display display={display} />
      <div className="buttons">
        <Button onClick={clearValue} value="clear" type="operation" />
        <Button onClick={clearAll} value="CE" type="operation" />
        <Button onClick={clickButton} value="+/-" type="operation" />
        <Button onClick={clickButton} value="(" type="operation" />
        <Button onClick={clickButton} value=")" type="operation" />
        <Button onClick={clickButton} value="7" type="number" />
        <Button onClick={clickButton} value="8" type="number" />
        <Button onClick={clickButton} value="9" type="number" />
        <Button onClick={clickButton} value="/" type="operation" />
        <Button onClick={clickButton} value="root" type="operation" />
        <Button onClick={clickButton} value="4" type="number" />
        <Button onClick={clickButton} value="5" type="number" />
        <Button onClick={clickButton} value="6" type="number" />
        <Button onClick={clickButton} value="*" type="operation" />
        <Button onClick={clickButton} value="^" type="operation" />
        <Button onClick={clickButton} value="1" type="number" />
        <Button onClick={clickButton} value="2" type="number" />
        <Button onClick={clickButton} value="3" type="number" />
        <Button onClick={clickButton} value="-" type="operation" />
        <Button onClick={clickButton} value="+" type="operation" />
        <Button onClick={clickButton} value="0" type="number" />
        <Button onClick={clickButton} value="00" type="number" />
        <Button onClick={clickButton} value="." type="number" />
        <Button onClick={doOperation} value="=" type="operation" size="large" />
      </div>
    </div>
  );
}

export default Calculator;