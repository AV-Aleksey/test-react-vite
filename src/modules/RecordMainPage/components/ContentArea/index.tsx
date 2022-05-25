import React, {useEffect, useState, useCallback} from 'react';
import { Col } from '../../../Grid/components/Col';
import { Grid } from '../../../Grid/components/Grid';
import { Card } from './components/Card';
import { DataTask, mockData } from './mock';
import { chunk } from 'lodash';
import css from './styles.module.less'
import { ResponseCard } from "../../../ResponseCard";

export const ComponentArea = () => {
    const [data, setData] = useState<DataTask[][]>([]);
    const [tasks, setTasks] = useState<{[key: number]: DataTask}>({});
    const [activeTask, setActiveTask] = useState<{idxRow: number, data: DataTask} | null>(null);

    useEffect(() => {
        const dataSet = mockData
            .sort((a, b) => b.taskList.length - a.taskList.length)
            .map((item, i) => {
                const order = (i + 1) % 4;
                return {...item, order: order === 0 ? 4 : order }
            });
        setData(chunk(dataSet, 4));
        setTasks(dataSet.reduce((map, item) => ({ ...map, [item.id]: item}), {}));
    }, []);

    const handleClick = useCallback((id: number, idxRow: number) => {
        setActiveTask({idxRow, data: tasks[id]});

        if (tasks[id].taskList.length === 1) {
            console.log('Формируем урл и переходим по ссылке');
        }
    }, [data]);

    const shouldShowTable = activeTask && activeTask.data?.taskList.length > 1;

    return (
        <div style={{ width: "100%" }}>
            {
                data?.map((card, idxRow) => {
                    return (
                        <div key={idxRow}>
                            <Grid>
                                {
                                    card?.map(({id, roleId, textTask, moduleId, taskList}) => {
                                        return (
                                            <Col size={3} key={id}>
                                                <Card
                                                    roleId={roleId}
                                                    moduleId={moduleId}
                                                    textTask={textTask}
                                                    countTask={taskList.length}
                                                    startDate={'10.10.2020'}
                                                    endDate={'11.10.2020'}
                                                    onClick={() => handleClick(id, idxRow)}
                                                />
                                            </Col>
                                        )
                                    })
                                }
                            </Grid>
                            {
                                shouldShowTable && idxRow === activeTask?.idxRow && (
                                    <Grid>
                                        <Col size={12}>
                                            <ResponseCard className={css.infoBlock}>
                                                <div className={`${css.arrowUp} ${css[`positionArrow${activeTask.data.order}`]}`}/>
                                                {activeTask.data.textTask}
                                            </ResponseCard>
                                        </Col>
                                    </Grid>
                                )
                            }

                        </div>
                    )
                })
            }
        </div>
    )
};

