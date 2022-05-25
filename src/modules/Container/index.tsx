import React, { FC } from "react";
import css from './styles.module.less'

export const Container: FC = ({ children }) => {
    return (
        <div className={css.content} >
            {children}
        </div>
    )
}
