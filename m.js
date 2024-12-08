const balanceElement = document.getElementById("current-balance");
const transactionList = document.getElementById("transaction-list");
const limitInput = document.getElementById("limit");
const amountInput = document.getElementById("amount");
const categorySelect = document.getElementById("category");
const progressBar = document.getElementById("progress-bar");

let balance = 0;
let expenseLimit = 0;
let transactions = [];
let categories = {
    Продукты: 0,
    Транспорт: 0,
    Развлечения: 0,
    Услуги: 0,
    Другие: 0
};

// Цвета для графика
const categoryColors = {
    Продукты: "#FF6384",
    Транспорт: "#36A2EB",
    Развлечения: "#FFCE56",
    Услуги: "#4BC0C0",
    Другие: "#9966FF"
};

// График
let chart;

// Обновление баланса
function updateBalance() {
    balanceElement.textContent = balance;
    let totalExpenses = 0;

    // Используем цикл for для суммирования расходов
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i].amount < 0) {
            totalExpenses += Math.abs(transactions[i].amount);
        }
    }

    const percentage = Math.min((totalExpenses / expenseLimit) * 100, 100);
    progressBar.style.width = `${percentage}%`;
    progressBar.style.backgroundColor = percentage >= 100 ? "#ff5555" : "#00cccc";

    if (totalExpenses > expenseLimit) {
        alert("Вы превысили лимит расходов!");
    }
}

// Добавление транзакции
function addTransaction(amount, category) {
    const transaction = { amount, category };
    transactions.push(transaction);

    if (amount < 0) {
        categories[category] += Math.abs(amount);
    }

    updateTransactionList();
    updateBalance();
    updateChart();
    amountInput.value = ""; // Очистка поля суммы
}

// Обновление списка транзакций
function updateTransactionList() {
    transactionList.innerHTML = "";

    // Используем цикл for для обновления списка транзакций
    for (let i = 0; i < transactions.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${transactions[i].amount} тг (${transactions[i].category})`;
        transactionList.appendChild(li);
    }
}

// Обновление диаграммы
function updateChart() {
    const ctx = document.getElementById("expenses-chart").getContext("2d");
    if (chart) chart.destroy();
    chart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: Object.keys(categories),
            datasets: [{
                data: Object.values(categories),
                backgroundColor: Object.keys(categories).map(c => categoryColors[c])
            }]
        },
        options: {
            responsive: true
        }
    });
}

// Обработчики событий
document.getElementById("add-income").addEventListener("click", () => {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) return alert("Введите корректную сумму!");
    balance += amount;
    addTransaction(amount, "Доход");
});

document.getElementById("add-expense").addEventListener("click", () => {
    const amount = parseFloat(amountInput.value);
    const category = categorySelect.value;
    if (isNaN(amount) || amount <= 0) return alert("Введите корректную сумму!");
    balance -= amount;
    addTransaction(-amount, category);
});

document.getElementById("set-limit").addEventListener("click", () => {
    const limit = parseFloat(limitInput.value);
    
    // Используем while для повторяющегося запроса ввода, если лимит некорректен
    while (isNaN(limit) || limit <= 0) {
        alert("Введите корректный лимит!");
        return;
    }

    expenseLimit = limit;
    alert(`Лимит установлен: ${expenseLimit} тг`);
    updateBalance();
});
