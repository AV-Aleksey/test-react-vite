import { Form } from "antd";
import React from "react";

import { FieldsGroup } from "./components/FieldsGroup";
import css from './styles.module.css';

export const FormRating = ({ formName, handleValidate }: { formName: string, handleValidate: (formName: string) => Promise<boolean> }) => {
    return (
        <Form.List name={formName}>
            {
                 (fields, { add, remove }) => {
                    const canDeleteGroup = fields.length > 1;

                    const handleAddNewGroup = async () => {
                        const isErr = await handleValidate(formName);

                        if (!isErr) {
                            add({ comment: undefined, decision: undefined });
                        }
                    };
                    const handleDeleteThisGroup = (name: number | number[]) => {
                        if (canDeleteGroup) {
                            remove(name)
                        }
                    }

                    return (
                        <div className={css.wrapGroups}>
                            {
                                fields.map((field, index) => (
                                    <FieldsGroup
                                        key={`${index}`} 
                                        textFieldName={[index, 'comment']} 
                                        selectFieldName={[index, 'decition']} 
                                        handleAddNewGroup={handleAddNewGroup}
                                        disabledDeleteBtn={!canDeleteGroup} 
                                        handleDeleteThisGroup={() => handleDeleteThisGroup(field.name)} 
                                    />
                                ))
                            }
                        </div>

                    )
                 }
            }
        </Form.List>
    )
}
