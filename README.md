# Budget-Tracker-
Budget Tracker Project Document
Project Goals
The principal objective of the project is to develop a web-based application for the purpose of monitoring personal financial transactions. The application assists users in monitoring income and expenses, establishing spending limits, and examining the categorisation of expenses in the form of a chart.

The principal functions of the system are as follows:
1. The management of budgets is a fundamental aspect of financial planning and control.
The application displays the current balance.
The addition of income and expenses is facilitated.
The setting of a spending limit.
2. The visualisation of expenses:
The display of the transaction history.
The mapping of expenditure according to category.
3. A notification will be generated when the pre-established limit is exceeded.
Upon reaching the specified limit, a visual indicator will change colour to red, thereby alerting the user to this fact.
A notification is generated in the alert() window to indicate that the limit has been exceeded.

Description of JavaScript elements of the project
1. The following variables and interface elements are available for use:
balanceElement: This displays the current balance.
transactionList: This stores the list of all transactions.
limitInput: This field is used to enter the limit.
amountInput: This field is used to enter the transaction amount.
categorySelect: This allows the user to select the expense category.
progressBar: This displays the progress indicator of expenses.
2. Data:
balance – the current balance of the user.
expenseLimit – the user-defined expense limit.
transactions – an array of all transactions.
categories – stores amounts of expenses by categories.

Main functions:
1. updateBalance() — Updating the current balance
Calculates the balance based on all transactions.
Calculates the total amount of expenses and updates the progressBar progress indicator.
Notifies the user when the limit is exceeded.
2. addTransaction(amount, category) — Adding a transaction
Creates a new transaction object {amount, category}.
Adds it to the transactions array.
Updates the transaction list, balance, and chart.
3. updateTransactionList() — Updating the transaction list
Clears the old list.
Creates new <li> elements for each transaction.
Adds them to the transactionList.
4. updateChart() — Updating the expense chart
Creates or updates a pie chart using the library Chart.js .
Displays the expense categories and the corresponding amounts.

Event Handlers:
Add Income: Updates the balance and adds income.
Add expense: Updates the balance and adds the expense.
Set Limit: Checks if the limit is entered correctly and saves it.
Examples of utilisation:
1. Income can be added in the following manner:
Input the requisite amount, for example 50000.
To add income, select the "Add Income" option.
The current balance will be increased by 50,000 Tg.
2. The next step is to set a limit. This can be done by entering a spending limit, for example 20000.
To establish a limit, select the "Set Limit" option.
Once the aforementioned parameters have been inputted, the system will save the newly set limit and generate a notification.
3. The addition of an expense is achieved by:
Input the monetary value of the expenditure, for example 10,000.
Select the appropriate category, such as "Groceries."
To conclude, select the option to add the expense.
Consequently, the current balance will undergo a reduction, the indicator will be updated, and the expense will be displayed in the historical record and chart.
4. In the event that the amount of the expense exceeds the pre-established limit, the indicator will assume a red colouration and an error message will be displayed on the screen.

User Manual
Getting Started: The application should be accessed via a web browser.
The addition of income is achieved by the following method: Input the requisite amount in the designated field and select the "Add Income" option.
The user is then required to enter the desired limit amount in the field designated as "Expense Limit." Once this has been done, the user must click on the button labelled "Set Limit."
To add an expense, enter the amount, select a category, and click "Add expense."
To view expenses, track the balance, transaction history, and chart.
In conclusion, Project Budget Tracker is an efficacious application for the monitoring of personal finances. It offers a transparent representation of expenditure, prevents the user from exceeding a pre-defined limit and facilitates the administration of financial resources.

