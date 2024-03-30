// Selecionando os elementos do DOM
const balanceElement = document.getElementById('current-balance');
const transactionAmountInput = document.getElementById('transaction-amount');
const addTransactionButton = document.getElementById('add-transaction');
const subtractTransactionButton = document.getElementById('subtract-transaction');
const transactionListElement = document.getElementById('transaction-list');

// Inicializando o saldo atual
let currentBalance = 0;

// Função para atualizar o saldo exibido
function updateBalance() {
  balanceElement.textContent = `R$ ${currentBalance.toFixed(2)}`;
}

// Função para adicionar uma transação
function addTransaction(amount, type) {
  const transactionItem = document.createElement('li');
  const transactionText = `${type === 'addition' ? '+' : '-'} R$ ${amount.toFixed(2)}`;
  transactionItem.textContent = transactionText;

  // Adiciona a classe correta com base no tipo de transação
  if (type === 'addition') {
    transactionItem.classList.add('addition');
  } else {
    transactionItem.classList.add('subtraction');
  }

  transactionListElement.appendChild(transactionItem);
}

// Função para adicionar uma transação de adição
function handleAddTransaction() {
  const transactionAmount = parseFloat(transactionAmountInput.value);

  if (isNaN(transactionAmount) || transactionAmount <= 0) {
    alert('Por favor, insira um valor válido.');
    return;
  }

  currentBalance += transactionAmount;
  updateBalance();
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

  currentBalance -= transactionAmount;
  updateBalance();
  addTransaction(transactionAmount, 'subtraction');

  transactionAmountInput.value = '';
}

// Adicionando event listeners aos botões
addTransactionButton.addEventListener('click', handleAddTransaction);
subtractTransactionButton.addEventListener('click', handleSubtractTransaction);

// Inicializando o saldo exibido
updateBalance();
