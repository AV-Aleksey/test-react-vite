import { Form, Input } from "antd";
import React from "react";

export const FormData = () => {
    const [form] = Form.useForm();
    console.log('RENDER FORM NAME')
    return (
    <Form layout='vertical' form={form} id="name" name='names'>
        <Form.Item name={'name'} label="Имя">
            <Input placeholder='Текст' />
        </Form.Item>
        <Form.Item name={'subName'} label="Фамилия">
            <Input placeholder='Текст' />
        </Form.Item>
    </Form>
    )
}