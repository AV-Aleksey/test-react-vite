import { ColumnProps } from "antd/lib/table";

const renderWithCheck = (val: any) =>  val ? val : '-'

export const columns = [
    
    { title: "Оцениваемые", dataIndex: ["employee", "fullName"], key: "fullName" },
    { title: "ПТЗН", dataIndex: ["ued", "managerRatingPtzn"], key: "managerRatingPtzn", render: renderWithCheck },
    { title: "Ценности", dataIndex: ["ued", "managerRatingValue"], key: "managerRatingValue", render: renderWithCheck },
    { title: "Развитие команды", dataIndex: ["ued", "managerRatingTeamProgress"], key: "managerRatingTeamProgress", render: renderWithCheck },
    { title: "КПЭ", dataIndex: ["ued", "totalFactor"], key: "totalFactor", render: renderWithCheck },
    { title: "Оценка за прошлый период", dataIndex: ["ued", "finalGradeLastYearId"], key: "finalGradeLastYearId", render: renderWithCheck },
    { title: "Оценка руководителя", dataIndex: ["ued", "managerRatingId"], key: "managerRatingId", render: renderWithCheck },
    { title: "Оценка круглого стола", dataIndex: ["roundTableRatingId"], key: "roundTableRatingId", render: () => 'Селект' },
    { title: "", dataIndex: ["decision"], key: "", render: (val) => val?.length ? '+' : '-' },
  ];


