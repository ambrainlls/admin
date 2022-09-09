export interface EmployeesDataTypes {
    id: string;
    image: string;
    name: string;
    surname: string;
    birthday: string;
    description: string;
    start_date: string;
    role: string;
    position: string;
    email: string;
    phone: string;
    projects: any[];
    pivot?:any;
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
    project_name: string;
    image: string;
    base_image: string;
    description: string;
    logo: string;
    employees: any[],
    employee_ids?: any[],
    link: string,
}

export interface JiraUserHistoriesType {
    account_id: string;
    code_review: string;
    id: string;
    rejected: string;
    username: string;
}

export interface GitUserHistoriesType {
    addition: string;
    changed: string;
    deletion: string;
    project_name: string;
    user_id: string;
    user_name: string;
}

export interface JobsDataType {
    id: string;
    description: string;
    image: '';
    location: string;
    position: string;
    status: string;
    title: string;
    work_time: string;
    requirements : Requirements[]
}

export interface JobsType {
    id: string;
    description: string;
    image: '';
    location: string;
    position: string;
    status: string;
    title: string;
    work_time: string;
    requirements : string;
}

export interface Requirements {
    id: string;
    name: string;
}
