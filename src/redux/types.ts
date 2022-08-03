export interface EmployeesDataTypes {
    id: string;
    name: string;
    surname: string;
    startDate: string;
    role: string;
    position: string;
    email: string;
    phone: string;
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
    education_level: string;
    institution: string;
    faculty: string;
    specialization: string;
    year_of_ending: string;
}

export interface hhResumeExperience {
    experience: string;
    beginning_work: string;
    until_now: string;
    ending: string;
    organization: string;
    job_title: string;
    responsibilities: string;
}

export interface hhResumeLanguage {
    // language_type: string;
    // level: string;
}

export interface hhResumeSpeciality {
    career_objective: string;
}


