import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactions}>
      <thead>
        <tr className={css.thead}>
          <th className={css.datahead}>Type</th>
          <th className={css.datahead}>Amount</th>
          <th className={css.datahead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.dataevensecond}>
              <td className={[css.data, css.textstart].join(' ')}>{type}</td>
              <td className={css.data}>{amount}</td>
              <td className={css.data}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
