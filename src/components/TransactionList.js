import Transaction from "./Transaction";

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {!transactions.length ? (
          <p>Nothing to Show</p>
        ) : (
          transactions.map((transaction) => (
            <Transaction
              transaction={transaction}
              key={transaction.id}
              deleteTransaction={deleteTransaction}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
