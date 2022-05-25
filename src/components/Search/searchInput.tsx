import { Select } from "antd"
import React, { useState } from "react"
import css from './styles.module.css'
import _ from 'lodash';


type Props = {
    changeEffect: () => void,
    searchEffect: () => void,
    notFoundContent: JSX.Element
}




export const SearchInput = ({changeEffect, searchEffect, notFoundContent }: Props) => {
    const [searchValue, setSearchValue] = useState('')

    const handleChange = () => {
        changeEffect && changeEffect();
    }

    const handleDebouncedSearch = _.debounce((term: string): void => {
        setSearchValue(term)

        if (term.trim().length > 2) {
            searchEffect && searchEffect();
        }
    }, 1500)

    return (
        <Select
            allowClear
            showSearch
            className={css.input} 
            size="middle"
            placeholder="Выберите из списка"
            onChange={handleChange}
            onSearch={handleDebouncedSearch}
            notFoundContent={notFoundContent}
        >
            <Select.Option key={1} value={'title1'}>
                <span>title1</span>
            </Select.Option>
            <Select.Option key={2} value={'title2'}>
                <span>title2</span>
            </Select.Option>
            <Select.Option key={3} value={'title3'}>
                <span>title3</span>
            </Select.Option>
        </Select>
)
}
