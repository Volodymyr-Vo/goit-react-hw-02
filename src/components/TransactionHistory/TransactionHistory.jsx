import css from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.transactionTitles}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td className={css.cell}>{item.type}</td>
              <td className={css.cell}>{item.amount}</td>
              <td className={css.cell}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
