const IncomeExpenses = ({ transactions }) => {
  //Income
  const income = transactions
    .map((transaction) => transaction.amount)
    .filter((item) => item > 0)
    .reduce((accu, item) => (accu += item), 0)
    .toFixed(2);

  //Expense
  const expense = (
    transactions
      .map((transaction) => transaction.amount)
      .filter((item) => item < 0)
      .reduce((accu, item) => (accu += item), 0) * -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
