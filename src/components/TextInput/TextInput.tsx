import React from 'react';
import './styles.css';
import { TextInputProps } from './types';

const TextInput: React.FC<TextInputProps> = ({name, label, value, error, errorMessage}) => {
  return (
    <div className='text-input-container'>
        <div>
            <label htmlFor={name}>{label}</label>
        </div>
        <input type="text" name={name} id={name} disabled value={value} className='text-input' />
        {error && <span className='error'>{errorMessage}</span>}
    </div>
  )
}

export default TextInput