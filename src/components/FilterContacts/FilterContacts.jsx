import { useState } from 'react';
import s from './FilterContacts.module.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const FilterContacts = ({ onFilter }) => {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    onFilter(filter);
  }, [filter]);

  {
    return (
      <div className={s.filterWrapper}>
        <label htmlFor="filter">Find contacts by name</label>
        <input
          id="filter"
          type="text"
          name="name"
          value={filter}
          onChange={e => setFilter(e.currentTarget.value)}
          className={s.search}
        />
      </div>
    );
  }
};

FilterContacts.propTypes = {
  onFilter: PropTypes.func,
};
export default FilterContacts;
