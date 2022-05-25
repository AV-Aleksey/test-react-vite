import React, {useEffect, useRef, useState} from 'react'
import {InputNumber, Form} from 'antd'
import { useForm } from 'antd/lib/form/Form';

let firstSymbol = false;

export function customParser(displayValue: string | undefined): number | string {
    firstSymbol = false;

    if (displayValue === '' || displayValue === undefined) {
        return '';
    }
   
    const num = Number(displayValue.replace(',', '.'));
    const validValue = !isNaN(num);

    if (validValue) {
        return num.toFixed(3)
    }

    const val = displayValue.split('').reduce((res, curr) => {
        if (Number(curr)) {
            return res + curr;
        } else if (!firstSymbol && res.length) {
            firstSymbol = true;
            return res + '.';
        }
        return res;
    }, '');

    return Number(val);
}

export const MyInputNumber = () => {
    const ref = useRef(null)
    const [current, setCurrent] = useState();
    const [form] = useForm();

    const handleChange = (e) => {
        setCurrent(e.target.value)
    }

    return (
        <div style={{padding: '30px'}}>
            <Form form={form}>
                <Form.Item name={'value'} >
                    <InputNumber
                        style={{width: '300px'}}
                        placeholder={'Введте текст'}
                        disabled={false}
                        decimalSeparator=","
                        precision={3}
                        parser={customParser}
                        //onChange={(val) => console.log('изменение', val)}
                        onBlur={handleChange}
                        onPressEnter={handleChange}
                        size={'large'}
                        ref={ref}
                    />
                </Form.Item>
            </Form>
            <span>{current}</span>
        </div>

    )
}
