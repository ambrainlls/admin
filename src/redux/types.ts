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
    projects: any[];
    project_ids?: any[];
    pivot?:any;
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
    projects?: any[];
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
    employees: any[],
    employee_ids?: any[]
}

export interface CreateProjectTypes {
    id: string;
    company_name: string;
    employee_ids: any[];
    employees?: any[]
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
    image: File | null;
    location: string;
    position: string;
    status: string;
    title: string;
}

export interface CreateJobDataType {
    id: string;
    description: string;
    image: File | null;
    location: string;
    position: string;
    status: string;
    title: string;
}