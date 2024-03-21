import React, { useState } from 'react';
import FormInputField from './Forminput';
import classes from './Form.module.css';


const FormBuilderApp = () => {
    const [inputFields, setInputFields] = useState([]);

    const insertInputField = fieldType => {
        setInputFields([...inputFields,
        { type: fieldType, label: `${fieldType} : `, id: Date.now() }]);
    };

    const deleteInputField = id => {
        setInputFields(inputFields
                            .filter(inputField => inputField.id !== id));
    };

    return (
        <div>
            <div className={classes.flex_container}>
            <button className={classes.title}>CREATE CUSTOM FORM</button>
                <button className={classes.button} onClick={() =>
                    insertInputField('text')}>Insert Text Field</button>
                <button className={classes.button} onClick={() =>
                    insertInputField('dropdown')}>
                    Insert Dropdown Field
                </button>
                <button className={classes.button} onClick={() =>
                    insertInputField('checkbox')}>
                    Insert Checkbox Field
                </button>
                <button className={classes.button} onClick={() =>
                    insertInputField('radio')}>
                    Insert Radio Button Field
                </button>
                <button className={classes.button} onClick={() =>
                    insertInputField('textarea')}>
                    Insert Textarea Field
                </button>
                <button className={classes.button} onClick={() =>
                    insertInputField('date')}>
                    Insert Date Field
                </button>
                <button className={classes.button} onClick={() =>
                    insertInputField('file')}>
                    Insert File Field
                </button>
            </div>
            <br />
            {inputFields.map(inputField => (
                <>
                    <FormInputField key={inputField.id} 
                                    inputField={inputField}
                                    deleteInputField={deleteInputField} />
                    <br />
                </>
            ))}
        </div>
    );
};

export default FormBuilderApp;