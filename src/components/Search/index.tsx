import { Form, Select } from 'antd'
import { useForm } from 'antd/lib/form/Form';
import React, { useEffect, useState } from 'react'
import css from './styles.module.css'

import { SearchInput } from './searchInput';




export const Search = () => {
    const [form] = useForm();

    useEffect(() => {
        form.setFieldsValue({kpi: 'title3'})
    }, []);

    const notFoundContent = (<div>Не найдено</div>);

    return (
        <div className={css.wrap}>
            <span>Поиск КПЭ</span>

            <Form form={form}>
                <Form.Item name={'kpi'}>
                    <SearchInput notFoundContent={notFoundContent} changeEffect={() => console.log(form.getFieldsValue())}  />
                </Form.Item>
            </Form>
        </div>
        
    )
}


