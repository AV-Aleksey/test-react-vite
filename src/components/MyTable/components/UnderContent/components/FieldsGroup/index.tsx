import React, {FC} from "react"
import { Form, Select, Space, Input, Button, Popconfirm } from "antd"
import css from './styles.module.css';

const { Option } = Select;

type Props = {
    textFieldName: string | [number, string]; 
    selectFieldName: string | [number, string];
    disabledDeleteBtn: boolean; 
    handleAddNewGroup: () => void;
    handleDeleteThisGroup: () => void;
}

export const FieldsGroup: FC<Props> = ({ 
    textFieldName, 
    selectFieldName, 
    handleAddNewGroup, 
    handleDeleteThisGroup,
    disabledDeleteBtn
}) => {
    const deleteBtn: JSX.Element = disabledDeleteBtn ? (
        <Button className={css.btn} danger disabled={disabledDeleteBtn}><span>-</span></Button>
    ) : (
        <Popconfirm
            placement="topRight"
            title='Вы действительно хотите удалить решение?'
            onConfirm={handleDeleteThisGroup}
            okText="Да"
            cancelText="Нет"
        >
            <Button className={css.btn} danger><span>-</span></Button>
         </Popconfirm> 
    )

    return (
        <Space size={20}>
            <Form.Item name={selectFieldName} className={css.input} label='Выбор решения:' rules={[{required: true, message: 'Поле обязательно для заполнения'}]}>
                <Select  placeholder="Выберите показатель">
                    <Option value="1">Выполнил</Option>
                    <Option value="2">Выполнил с замечаниями</Option>
                    <Option value="3">Не выполнил</Option>
                </Select>
            </Form.Item>
            <Form.Item name={textFieldName} className={css.input} label='Комментарий:' rules={[{required: true, message: 'Поле обязательно для заполнения'}]} s>
                <Input  type={'text'} placeholder="Введите комментарий" />
            </Form.Item>
            <Space size={3}>
                    <Button type="primary" className={css.btn} onClick={handleAddNewGroup}><span>+</span></Button>
                    {deleteBtn}
            </Space>
        </Space>
    )
}
