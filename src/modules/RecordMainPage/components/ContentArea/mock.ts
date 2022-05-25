import { Modules, Roles } from "../../../../constants/roles";

export type ItemTask = {
    id: number;
    title: string;
    processTitle: string;
    status: string;
    fullName: string;
}

export type DataTask = {
    id: number;
    roleId: number;
    moduleId: number;
    textTask: string;
    order?: number;
    taskList: ItemTask[];
}

export const mockData: DataTask[] = [
    {
        id: 111,
        roleId: Roles.employee,
        moduleId: Modules.efficiency,
        textTask: "Согласовать документ УЭД dsa dsad asd as dads as das dsa",
        taskList: [
            {
                id: 11,
                title: 'Согласование',
                processTitle: 'Согласуйте документ',
                status: 'Самооценка',
                fullName: 'Васильева П.Р.'
            },
            {
                id: 12,
                title: 'Согласование',
                processTitle: 'Согласуйте документ',
                status: 'Самооценка',
                fullName: 'Васнецов А.Р.'
            },
            {
                id: 13,
                title: 'Согласование',
                processTitle: 'Согласуйте документ',
                status: 'Самооценка',
                fullName: 'Синицин Е.Р.'
            }
        ]
    },
    {
        id: 211,
        roleId: Roles.manager,
        moduleId: Modules.career,
        textTask: "Выполнить самооценку за 2021 год",
        taskList: [
            {
                id: 21,
                title: 'Подготовка к круглому столу',
                processTitle: 'Заполните анкету',
                status: 'Начало оценки',
                fullName: 'Васильева П.Р.'
            },
        ]
    },
    {
        id: 112,
        roleId: Roles.sup,
        moduleId: Modules.efficiency,
        textTask: "Согласовать карту КПЭ",
        taskList: [
            {
                id: 31,
                title: 'Согласовать документ УЕД',
                processTitle: 'Согласование',
                status: 'Согласование с руководителем',
                fullName: 'Ильин А.С.'
            },
            {
                id: 32,
                title: 'Согласовать документ УЕД',
                processTitle: 'Согласование',
                status: 'Согласование с руководителем',
                fullName: 'Васин А.С.'
            },
            {
                id: 33,
                title: 'Согласовать документ УЕД',
                processTitle: 'Согласование',
                status: 'Согласование с руководителем',
                fullName: 'Ильин А.С.'
            },
            {
                id: 34,
                title: 'Согласовать документ УЕД',
                processTitle: 'Согласование',
                status: 'Согласование с руководителем',
                fullName: 'Кукушкин А.С.'
            },
        ]
    },
    {
        id: 311,
        roleId: Roles.manager,
        moduleId: Modules.adaptation,
        textTask: "Подготовка к круглому столу",
        taskList: [
            {
                id: 41,
                title: 'Утвердить приемника',
                processTitle: 'Утверждение',
                status: 'Назначение приемника',
                fullName: 'Ильинин О.С.'
            },
            {
                id: 42,
                title: 'Утвердить приемника',
                processTitle: 'Утверждение',
                status: 'Назначение приемника',
                fullName: 'Ильининин О.С.'
            },
            {
                id: 43,
                title: 'Утвердить приемника',
                processTitle: 'Утверждение',
                status: 'Назначение приемника',
                fullName: 'Ильининсин О.С.'
            },
            {
                id: 44,
                title: 'Утвердить приемника',
                processTitle: 'Утверждение',
                status: 'Назначение приемника',
                fullName: 'Ильинина А.С.'
            },
        ]
    },
    {
        id: 113,
        roleId: Roles.manager,
        moduleId: Modules.efficiency,
        textTask: "Заполнить план развития",
        taskList: [
            {
                id: 51,
                title: 'Заполнение плана',
                processTitle: 'Согласование',
                status: 'Заполнение',
                fullName: 'Маронин А.А.'
            },
        ]
    },
    {
        id: 212,
        roleId: Roles.employee,
        moduleId: Modules.career,
        textTask: "Утвердить преемника",
        taskList: [
            {
                id: 61,
                title: 'Утвердите приемника',
                processTitle: 'Утверждение 2го этапа',
                status: 'Заполнение',
                fullName: 'Саронин У.А.'
            },
            {
                id: 62,
                title: 'Утвердите приемника',
                processTitle: 'Утверждение 3го этапа',
                status: 'Заполнение',
                fullName: 'Таронина З.А.'
            },
            {
                id: 63,
                title: 'Утвердите приемника',
                processTitle: 'Утверждение 6го этапа',
                status: 'Заполнение',
                fullName: 'Паронина А.А.'
            },
        ]
    },
    {
        id: 411,
        roleId: Roles.dkp,
        textTask: "Соглосовать занятие",
        moduleId: Modules.education,
        taskList: [
            {
                id: 61,
                title: 'Назначить занятие',
                processTitle: 'Утверждение 3го этапа',
                status: 'Назначение',
                fullName: 'Маро С.А.'
            },
            {
                id: 62,
                title: 'Назначить занятие 2го уровня',
                processTitle: 'Утверждение 1го этапа',
                status: 'Назначение',
                fullName: 'Сидоренко С.А.'
            },
        ]
    },
]
