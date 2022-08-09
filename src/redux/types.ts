export interface EmployeesDataTypes {
    id: string;
    name: string;
    surname: string;
    birthday: string;
    description: string;
    start_date: string;
    role: string;
    position: string;
    email: string;
    phone: string;
    project: any[];
    project_ids?: any[];
    telegram_chat_id: string;
}

export interface CreateEmployeesDataTypes {
    id: string;
    name: string;
    surname: string;
    birthday: string;
    description: string;
    start_date: string;
    role: string;
    position: string;
    email: string;
    phone: string;
    project_ids: any[];
    project?: any[];
    telegram_chat_id: string;
}

export interface ContactUsTypes {
    id: string;
    name: string;
    lastname: string;
    email: string;
    message: string;
}

export interface ResumeTypes {
    id: string;
    name: string;
    surname: string;
    platform: string;
    count: string;
}

export interface FeedbackTypes {
    id: string;
    name: string;
    surname: string;
    email: string;
    feedback: string;
}

export interface ProjectTypes {
    id: string;
    company_name: string;
    employee: any[],
    employees_ids?: any[]
}

export interface CreateProjectTypes {
    id: string;
    company_name: string;
    employees_ids: any[];
    employee?: any[]
}
