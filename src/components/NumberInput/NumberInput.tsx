import React from 'react';
import './styles.css'
import { NumberInputProps } from './types';

const NumberInput: React.FC<NumberInputProps> = ({name,label,value,onChange}) => {
  return (
    <div className='num-input-container'>
        <div>
            <label htmlFor={name}>{label}</label>
        </div>
        <input onChange={onChange} className='num-input' value={value} type="number" name={name} id={name} />
    </div>
  )
}

export default NumberInput