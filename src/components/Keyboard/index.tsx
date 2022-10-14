import React, { useState } from 'react';

import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { styles } from './styles';

export function Keyboard(){
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(Number || null);

  const [styleColor, setStyleColor] = useState(false);

  function handlePressNumber(buttonValue: string) {
    setStyleColor(false);
    setFirstNumber(firstNumber + buttonValue);
  }

  function handleOperationPress(buttonValue: string) {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  }

  function clear() {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  }

  function getResult() {
    switch (operation) {
      case "+" :
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      case "-":
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case "x":
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;
      case "/":
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.number}>{ result !== null ? '' : `${secondNumber} ${operation}`}</Text>
        <Text style={
          result !== null ? [styles.result, { color: 'green' }] : styles.result
        }>
          { result !== null ? result : firstNumber }
        </Text>
      </View>

      <View style={styles.keyboard}>
        <View style={styles.fileira}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => handlePressNumber("1")}
          >
            <Text style={styles.title}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => handlePressNumber("2")}
          >
            <Text style={styles.title}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => handlePressNumber("3")}
          >
            <Text style={styles.title}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonOperation}
            onPress={() => handleOperationPress("+")}
          >
            <Text style={styles.title}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fileira}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => handlePressNumber("4")}
          >
            <Text style={styles.title}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => handlePressNumber("5")}
          >
            <Text style={styles.title}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => handlePressNumber("6")}
          >
            <Text style={styles.title}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonOperation}
            onPress={() => handleOperationPress("-")}
          >
            <Text style={styles.title}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fileira}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => handlePressNumber("7")}
          >
            <Text style={styles.title}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => handlePressNumber("8")}
          >
            <Text style={styles.title}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => handlePressNumber("9")}
          >
            <Text style={styles.title}>9</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonOperation}
            onPress={() => handleOperationPress("x")}
          >
            <Text style={styles.title}>x</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fileira}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => handlePressNumber("0")}
          >
            <Text style={styles.title}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonOperation}
            onPress={clear}
          >
            <Text style={styles.title}>AC</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonOperation}
            onPress={getResult}
          >
            <Text style={styles.title}>=</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonOperation}
            onPress={() => handleOperationPress("/")}
          >
            <Text style={styles.title}>/</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}