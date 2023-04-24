import { FormInput } from 'components/common/FormInput.styled';
import { FormLabel } from 'components/common/FormLabel.styled';
import React from 'react';

import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const onChange = e => {
    const inputValue = e.currentTarget.value;
    dispatch(setFilter(inputValue));
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: '10px',
      }}
    >
      <FormLabel>
        Filter
        <FormInput style={{ width: '100%' }} type="text" onChange={onChange} />
      </FormLabel>
    </div>
  );
};

export default Filter;
