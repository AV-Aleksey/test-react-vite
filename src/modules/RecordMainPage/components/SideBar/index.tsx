import { Menu } from 'antd'
import React from 'react'
import css from './styles.module.less'
import { DatabaseOutlined } from '@ant-design/icons'

export const SideBar = () => {
    return (
        <Menu className={css.sideBar}>
            <Menu.Item key="1" icon={<DatabaseOutlined />}>Мой профиль</Menu.Item>
            <Menu.Item key="2" icon={<DatabaseOutlined />}>КПЭ и ежегодная оценка</Menu.Item>
            <Menu.Item key="3" icon={<DatabaseOutlined />}>План развития</Menu.Item>
        </Menu>
    )
}

