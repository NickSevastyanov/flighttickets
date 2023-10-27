import { setNoTransferFilter, toggleCityMatchFilter } from '../../../redux/Flights/slice';
import { useAppDispatch } from '../../../redux/store';

import styles from './Sort.module.css';

const Sort = () => {
  const dispatch = useAppDispatch();
  const filters = ['без пересадок'];

  const handleFilterChange = (e) => {
    if (e.target.value === filters[0]) dispatch(toggleCityMatchFilter());
    dispatch(setNoTransferFilter());
  };
  return (
    <div className={styles.sortContainer}>
      <div className={styles.sortName}>Фильтровать</div>
      <div>
        {filters.map((filter, index) => (
          <label key={index}>
            <input type="checkbox" value={filter} onChange={handleFilterChange} />
            {filter}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Sort;
