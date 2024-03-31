// Selecionando os elementos do DOM
const balanceElement = document.getElementById('current-balance');
const incomeValueElement = document.getElementById('income-value');
const expenseValueElement = document.getElementById('expense-value');
const transactionAmountInput = document.getElementById('transaction-amount');
const addTransactionButton = document.getElementById('add-transaction');
const subtractTransactionButton = document.getElementById('subtract-transaction');
const transactionListElement = document.getElementById('transaction-list');

// Inicializando o saldo atual, entrada e saída
let currentBalance = 0;
let currentIncome = 0;
let currentExpense = 0;

// Função para atualizar o saldo exibido
function updateBalance() {
  balanceElement.textContent = `R$ ${currentBalance.toFixed(2)}`;
}

// Função para atualizar os valores de entrada, saída e saldo atual
function updateBalanceValues() {
  incomeValueElement.textContent = `R$ +${currentIncome.toFixed(2)}`;
  expenseValueElement.textContent = `R$ -${currentExpense.toFixed(2)}`;
  updateBalance();
}

// Função para adicionar uma transação
function addTransaction(amount, type) {
  const transactionItem = document.createElement('li');
  const transactionText = `${type === 'addition' ? '+' : '-'} R$ ${amount.toFixed(2)}`;
  transactionItem.textContent = transactionText;

  if (type === 'addition') {
    transactionItem.classList.add('addition');
    currentIncome += amount;
    currentBalance += amount; // Atualiza o saldo atual para transações de adição
  } else {
    transactionItem.classList.add('subtraction');
    currentExpense += amount;
    currentBalance -= amount; // Atualiza o saldo atual para transações de subtração
  }

  transactionListElement.appendChild(transactionItem);
  updateBalanceValues();
}

// Função para adicionar uma transação de adição
function handleAddTransaction() {
  const transactionAmount = parseFloat(transactionAmountInput.value);

  if (isNaN(transactionAmount) || transactionAmount <= 0) {
    alert('Por favor, insira um valor válido.');
    return;
  }

  addTransaction(transactionAmount, 'addition');

  transactionAmountInput.value = '';
}

// Função para adicionar uma transação de subtração
function handleSubtractTransaction() {
  const transactionAmount = parseFloat(transactionAmountInput.value);

  if (isNaN(transactionAmount) || transactionAmount <= 0) {
    alert('Por favor, insira um valor válido.');
    return;
  }

  addTransaction(transactionAmount, 'subtraction');

  transactionAmountInput.value = '';
}

// Adicionando event listeners aos botões
addTransactionButton.addEventListener('click', handleAddTransaction);
subtractTransactionButton.addEventListener('click', handleSubtractTransaction);

// Inicializando os valores exibidos
updateBalanceValues();

//Esconder Saldo Total
// Selecionando o elemento de saldo total e o ícone de olhinho
const currentBalanceElement = document.getElementById('current-balance');
const toggleBalanceIcon = document.querySelector('.toggle-balance i');

// Armazenar o valor original do saldo total
let originalBalanceValue = currentBalanceElement.textContent;

// Função para alternar a visibilidade do saldo total
function toggleBalanceVisibility() {
  if (currentBalanceElement.textContent === 'R$ 0,00') {
    return; // Não esconde o saldo se for zero
  }

  if (currentBalanceElement.textContent === '***') {
    currentBalanceElement.textContent = originalBalanceValue;
    toggleBalanceIcon.classList.remove('fa-eye-slash');
    toggleBalanceIcon.classList.add('fa-eye');
  } else {
    originalBalanceValue = currentBalanceElement.textContent;
    currentBalanceElement.textContent = '***';
    toggleBalanceIcon.classList.remove('fa-eye');
    toggleBalanceIcon.classList.add('fa-eye-slash');
  }
}

// Adicionando event listener ao ícone de olhinho
toggleBalanceIcon.addEventListener('click', toggleBalanceVisibility);

