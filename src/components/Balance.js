const Balance = ({ transactions }) => {
  // Total
  const total = transactions
    .map((transaction) => transaction.amount)
    .reduce((accu, item) => (accu += item), 0);

  // Sign
  const sign = total < 0 && "-";

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>
        {sign}${Math.abs(total).toFixed(2)}
      </h1>
    </div>
  );
};

export default Balance;
