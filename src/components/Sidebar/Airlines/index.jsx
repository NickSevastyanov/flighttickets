import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../redux/store';
import { setSelectedAirlines } from '../../../redux/Flights/slice';

import styles from './Airlines.module.css';

const Airlines = () => {
  const dispatch = useAppDispatch();
  const { carriers } = useSelector((state) => state.Flights);

  const handleCheckbox = (e) => {
    dispatch(setSelectedAirlines(e.target.value));
  };

  return (
    <div className={styles.airlinesContainer}>
      <div className={styles.airlinesName}>Авиакомпании</div>
      <div className={styles.airlinesCheckbox}>
        {carriers.map((carrier, index) => (
          <label key={index}>
            <input type="checkbox" value={carrier} onChange={handleCheckbox} />
            {carrier}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Airlines;
