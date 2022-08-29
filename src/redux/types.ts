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

export interface hhResumeCV {
    firstName: string;
    lastName: string;
    phone: string;
    birthday: string;
    country_id: string[];
}

export interface hhResumeEducation {
    id: string;
    education_level: string;
    institution: string;
    faculty: string;
    specialization: string;
    year_of_ending: string;
}

export interface hhResumeExperience {
    id: string;
    beginning_work: string;
    until_now: boolean;
    ending: string;
    organization: string;
    job_title: string;
    responsibilities: string;
}

export interface hhResumeNativeLanguage {
    native_language: string;
}

export interface hhResumeSpeciality {
    career_objective: string;
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
