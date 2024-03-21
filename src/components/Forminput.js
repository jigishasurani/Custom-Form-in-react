import React from 'react';
import classes from './Forminput.module.css';

const FormInputField = ({ inputField, deleteInputField }) => {
    let inputFieldElement;
    <div className={classes.form_box}></div>
    switch (inputField.type) {
        case 'text':
            inputFieldElement = <input className={classes.form_box_textarea} type="text" />;
            break;
        case 'dropdown':
            inputFieldElement = (
                <select className={classes.form_box_textarea}>
                    <option value="text1">Text 1</option>
                    <option value="text2">Text 2</option>
                    <option value="text3">Text 3</option>
                </select>
            );
            break;
        case 'checkbox':
            inputFieldElement = (
                <div className={classes.form_box_textarea}>
                    <input type="checkbox" 
                           name="checkText1" /> Check Text 1
                    <input type="checkbox" 
                           name="checkText2" /> Check Text 2
                    <input type="checkbox" 
                           name="checkText3" /> Check Text 3
                </div>
            );
            break;
        case 'radio':
            inputFieldElement = (
                <div className={classes.form_box_textarea}>
                    <input type="radio"
                           name={`radio-${inputField.id}`} 
                           value="radioText1" /> Radio Text 1
                    <input type="radio" 
                           name={`radio-${inputField.id}`} 
                           value="radioText2" /> Radio Text 2
                    <input type="radio" 
                           name={`radio-${inputField.id}`} 
                           value="radioText3" /> Radio Text 3
                </div>
            );
            break;
        case 'textarea':
            inputFieldElement = <textarea className={classes.form_box_textarea}/>;
            break;
        case 'date':
            inputFieldElement = <input className={classes.form_box_textarea} type="date" />;
            break;
        case 'file':
            inputFieldElement = <input className={classes.form_box_textarea}  type="file" />;
            break;
        default:
            inputFieldElement = null;
    }

    return (
        <div>
            <label>{inputField.label}</label>
            {inputFieldElement}
            <button className={classes.button} onClick={() => deleteInputField(inputField.id)}>
                Delete
            </button>
        </div>
    );
};

export default FormInputField;