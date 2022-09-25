import React from 'react';
import './styles.css';
import { SelectInputProps } from './types';

const SelectInput: React.FC<SelectInputProps> = ({label, onChange, options, placeholder, name}) => {
  return (
    <div>
        <label htmlFor={name}>{label}</label>
        <select onChange={onChange} name={name} id={name}className='select-input'>
            <option value="">{placeholder}</option>
            {options.length > 0 ? (
              options.map(({value,label}, idx) => {
                return (
                  <option key={idx} value={value}>{label}</option>
                )
              })
            ) : (
              <option value={""}>Loading...</option>
            )}
        </select>
    </div>
  )
}

export default SelectInput