import { Button, Form, Input } from 'antd';
import React from 'react';

import { FormData } from './components/FormData'
import { FormName } from './components/FormName';

export const ManyForms = () => {

    const [form2] = Form.useForm();


    const handleSubmit = (...data) => {
        const [_, values] = data;
        const {forms} = values;
        const { names, data1 } = forms;

        const namesValues = names.getFieldsValue();
        const data1Values = data1.getFieldsValue();

        console.log(namesValues, data1Values);
    }
    console.log('RENDER')
    return (
        <div style={{width: "200px"}}>
            <Form.Provider  onFormFinish={handleSubmit} >
                <FormData />
                <FormName />
                <Button htmlType='submit' form={'name'} >submit</Button>
            </Form.Provider>
        </div>
    )
}