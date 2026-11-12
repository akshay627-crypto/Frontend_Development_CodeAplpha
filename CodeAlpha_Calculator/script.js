const display = document.querySelector('#display');
const expression = document.querySelector('#expression');
const historyList = document.querySelector('#history-list');
const keypad = document.querySelector('.keypad');
let currentValue = '0';
let storedValue = null;
let operator = null;
let waitingForOperand = false;
let lastOperator = null;
let lastOperand = null;
let isError = false;

function formatted(value) {
  if (!Number.isFinite(value)) return 'Error';
  const rounded = Number(value.toPrecision(12));
  return String(Object.is(rounded, -0) ? 0 : rounded);
}

function updateDisplay() {
  display.textContent = currentValue;
  display.classList.toggle('is-error', isError);
  document.querySelectorAll('[data-operator]').forEach(button => button.classList.toggle('is-selected', button.dataset.operator === operator));
}

function resetAfterError() {
  if (!isError) return;
  currentValue = '0';
  storedValue = null;
  operator = null;
  waitingForOperand = false;
  isError = false;
}

function enterDigit(digit) {
  resetAfterError();
  if (waitingForOperand) {
    currentValue = digit;
    waitingForOperand = false;
  } else if (currentValue === '0') {
    currentValue = digit;
  } else if (currentValue.replace('-', '').replace('.', '').length < 15) {
    currentValue += digit;
  }
  expression.textContent = '\u00a0';
  updateDisplay();
}

function enterDecimal() {
  resetAfterError();
  if (waitingForOperand) {
    currentValue = '0.';
    waitingForOperand = false;
  } else if (!currentValue.includes('.')) {
    currentValue += '.';
  }
  updateDisplay();
}

function calculate(left, right, symbol) {
  if (symbol === '+') return left + right;
  if (symbol === '−') return left - right;
  if (symbol === '×') return left * right;
  if (symbol === '÷') return right === 0 ? null : left / right;
  return right;
}

function showError() {
  currentValue = 'Cannot divide by zero';
  isError = true;
  storedValue = null;
  operator = null;
  waitingForOperand = true;
  expression.textContent = '\u00a0';
  updateDisplay();
}

function chooseOperator(nextOperator) {
  resetAfterError();
  const inputValue = Number(currentValue);
  if (operator && !waitingForOperand) {
    const result = calculate(storedValue, inputValue, operator);
    if (result === null) return showError();
    currentValue = formatted(result);
    storedValue = Number(currentValue);
  } else {
    storedValue = inputValue;
  }
  operator = nextOperator;
  waitingForOperand = true;
  lastOperator = null;
  lastOperand = null;
  expression.textContent = `${currentValue} ${operator}`;
  updateDisplay();
}

function addHistory(label, result) {
  const empty = historyList.querySelector('.history-empty');
  empty?.remove();
  const item = document.createElement('li');
  item.className = 'history-item';
  const equation = document.createElement('div');
  equation.className = 'history-expression';
  equation.textContent = label;
  const output = document.createElement('div');
  output.className = 'history-result';
  output.textContent = result;
  item.append(equation, output);
  historyList.prepend(item);
  while (historyList.children.length > 8) historyList.lastElementChild.remove();
}

function equals() {
  resetAfterError();
  let left = storedValue;
  let symbol = operator;
  let right = Number(currentValue);
  if (!symbol && lastOperator) {
    left = Number(currentValue);
    symbol = lastOperator;
    right = lastOperand;
  }
  if (!symbol || left === null || left === undefined) return;
  const result = calculate(left, right, symbol);
  if (result === null) return showError();
  const label = `${formatted(left)} ${symbol} ${formatted(right)} =`;
  currentValue = formatted(result);
  addHistory(label, currentValue);
  expression.textContent = label;
  lastOperator = symbol;
  lastOperand = right;
  operator = null;
  storedValue = null;
  waitingForOperand = true;
  updateDisplay();
}

function clearAll() {
  currentValue = '0';
  storedValue = null;
  operator = null;
  lastOperator = null;
  lastOperand = null;
  waitingForOperand = false;
  isError = false;
  expression.textContent = '\u00a0';
  updateDisplay();
}

function backspace() {
  if (isError) return clearAll();
  if (waitingForOperand) return;
  currentValue = currentValue.length > 1 ? currentValue.slice(0, -1) : '0';
  if (currentValue === '-') currentValue = '0';
  updateDisplay();
}

function toggleSign() {
  resetAfterError();
  if (Number(currentValue) !== 0) currentValue = currentValue.startsWith('-') ? currentValue.slice(1) : `-${currentValue}`;
  updateDisplay();
}

function percent() {
  resetAfterError();
  currentValue = formatted(Number(currentValue) / 100);
  updateDisplay();
}

function handleAction(action) {
  if (action === 'clear') clearAll();
  if (action === 'decimal') enterDecimal();
  if (action === 'equals') equals();
  if (action === 'sign') toggleSign();
  if (action === 'percent') percent();
}

keypad.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.digit !== undefined) enterDigit(button.dataset.digit);
  if (button.dataset.operator) chooseOperator(button.dataset.operator);
  if (button.dataset.action) handleAction(button.dataset.action);
  button.classList.add('is-pressed');
  window.setTimeout(() => button.classList.remove('is-pressed'), 100);
});

document.querySelector('#clear-history').addEventListener('click', () => {
  historyList.replaceChildren();
  const empty = document.createElement('li');
  empty.className = 'history-empty';
  empty.textContent = 'Your calculations will appear here.';
  historyList.append(empty);
});

document.addEventListener('keydown', event => {
  if (/^[0-9]$/.test(event.key)) return enterDigit(event.key);
  if (event.key === '.' || event.key === ',') return enterDecimal();
  if (event.key === 'Backspace' || event.key === 'Delete') { event.preventDefault(); return backspace(); }
  if (event.key === 'Escape') return clearAll();
  if (event.key === 'Enter' || event.key === '=') { event.preventDefault(); return equals(); }
  const operators = { '+': '+', '-': '−', '*': '×', '/': '÷' };
  if (operators[event.key]) { event.preventDefault(); return chooseOperator(operators[event.key]); }
  if (event.key === '%') return percent();
});

updateDisplay();
