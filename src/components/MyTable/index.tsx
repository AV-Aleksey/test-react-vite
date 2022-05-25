import React, { useCallback } from "react";
import { Table, Form, Button} from "antd";

import { tableData } from "./dataTable";
import { columns } from "./columns";
import { FormRating } from "./components/UnderContent";

type FormItem = { comment: string | undefined, decition: string | undefined };
type FormValues = Record<string, FormItem[]>

export const DemoTable = () => {
  const [form] = Form.useForm<FormValues>();

  const handleLogForm = () => {
    const values = form.getFieldsValue();
    console.log(values);
  };

  const initialValues = tableData.reduce((acc, { employee, decision }) => {
      if (decision?.length) {
        acc[employee.id] = decision.map(({decisionId, comment}) => ({ comment: comment, decition: decisionId }))
        return acc;
      }
      acc[employee.id] = [{decision: undefined, comment: undefined}]
      return acc;
    }, {} as {[key: number]: any})

    const handleValidate = useCallback((currentFormId: string) => {
        const currentForm = form.getFieldsValue()[currentFormId];
        const fieldsForCheck = [] as [string, number, string][];
        
        if (currentForm?.length) {
            currentForm.forEach((_, i) => {
                fieldsForCheck.push([currentFormId, i, 'comment']);
                fieldsForCheck.push([currentFormId, i, 'decition']);
            })
        }
        
        return form.validateFields(fieldsForCheck).then(() => false).catch(() => true);
    }, [])

  return (
    <Form form={form} initialValues={initialValues} layout="vertical">
      <Table
        columns={columns}
        expandable={{ 
            expandedRowRender: (record) => <FormRating formName={String(record.employee.id)} handleValidate={handleValidate} /> 
        }}
        dataSource={tableData}
      />

      <Button onClick={handleLogForm}>Форма</Button>
    </Form>
  );
};
