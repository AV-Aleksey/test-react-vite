import { Form, Input } from "antd";
import React from "react";

export const FormName = () => {
    const [form] = Form.useForm();
    
    return (
        <Form layout='vertical' form={form} id="data" name='data1'>
            <Form.Item name={'passport'} label="Пасспорт" >
                <Input placeholder='Текст' />
            </Form.Item>
            <Form.Item name={'series'} label="Серия">
                <Input placeholder='Текст' />
            </Form.Item>
        </Form>
    )
}