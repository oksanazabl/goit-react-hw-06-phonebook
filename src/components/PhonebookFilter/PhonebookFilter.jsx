// import PropTypes from 'prop-types';
import css from './PhonebookFilter.module.css';
// import React, { useState } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../reducers';

const PhonebookFilter = () => {
   const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input type="text" onChange={handleFilterChange} placeholder="Search contacts by name" />
 
  );
};

PhonebookFilter.propTypes = {
  onFilterSet: PropTypes.func,
  filter: PropTypes.string.isRequired,
};

export default PhonebookFilter;
