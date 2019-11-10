import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ handleTotalAmount, balance }) => (
  <div className={styles.BalanceWrapper}>
    <div className={styles.clientBalance}>
      <div className={styles.clientBalance__col}>
        &#8593;{handleTotalAmount('deposit')}
      </div>
      <div className={styles.clientBalance__col}>
        &#8595;{handleTotalAmount('withdrawal')}
      </div>
      <div className={styles.clientBalance__col}>Balance: {balance}</div>
    </div>
  </div>
);

Balance.propTypes = {
  handleTotalAmount: PropTypes.func.isRequired,
  balance: PropTypes.number.isRequired,
};

Balance.defaultProps = {
  // bla: 'test',
};

export default Balance;
