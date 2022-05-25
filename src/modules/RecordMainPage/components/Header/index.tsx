import { Button } from 'antd'
import css from './styles.module.less'
import React from 'react'
import { Container } from '../../../Container'

export const Header = () => {
    return (
        <header className={css.header}>
            <Container>
                <div className={css.linksWrap}>
                    <Button type="link">Главная</Button>
                    <Button type="link">Оргструктура</Button>
                    <Button type="link">Задачи</Button>
                </div>
            </Container>
        </header>
    )
}

