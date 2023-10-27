import React from 'react';

import styles from './Categories.module.css';

import { useAppDispatch } from '../../../redux/store';
import {
  sortItemsByDuration,
  sortItemsByPriceAsc,
  sortItemsByPriceDesc,
} from '../../../redux/Flights/slice';


const Categories = () => {
  const dispatch = useAppDispatch();

  const sortPriceASC = () => {
    dispatch(sortItemsByPriceAsc());
  };

  const sortPriceDESC = () => {
    dispatch(sortItemsByPriceDesc());
  };

  const sortDuration = () => {
    dispatch(sortItemsByDuration());
  };

  React.useEffect(() => {
    dispatch(sortItemsByPriceAsc());
  }, []);

  return (
    <div className={styles.categoryContainer}>
      <div className={styles.categoryName}>Сортировать</div>
      <div>
        <div className="radio">
          <label>
            <input onChange={sortPriceASC} type="radio" name="sortGroup" value="option1" />- по
            возрастанию цены
          </label>
        </div>
        <div className="radio">
          <label>
            <input onChange={sortPriceDESC} type="radio" name="sortGroup" value="option2" />- по
            убыванию цены
          </label>
        </div>
        <div className="radio">
          <label>
            <input onChange={sortDuration} type="radio" name="sortGroup" value="option3" />- по
            времени в пути
          </label>
        </div>
      </div>
    </div>
  );
};

export default Categories;
