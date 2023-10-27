import React from 'react';

import styles from './Price.module.css';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../redux/store';
import { setPriceFilter } from '../../../redux/Flights/slice';

const Price = () => {
  const dispatch = useAppDispatch();
  const { from, to } = useSelector((state) => state.Flights.priceFilter);

  const handleFromChange = (e) => {
    const fromValue = e.target.value;
    dispatch(setPriceFilter({ from: fromValue, to }));
  };

  const handleToChange = (e) => {
    const toValue = e.target.value;
    dispatch(setPriceFilter({ from, to: toValue }));
  };

  return (
    <div className={styles.priceContainer}>
      <div className={styles.priceName}>Цена</div>
      <div>
        <label>
          От{' '}
          <input value={from} onChange={handleFromChange} />
        </label>
        <label>
          До{' '}
          <input value={to} onChange={handleToChange} />
        </label>
      </div>
    </div>
  );
};

export default Price;
