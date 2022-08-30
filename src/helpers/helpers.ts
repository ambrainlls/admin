export const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
};

export const formatNumber = (number: any) => {
    return (number + "").split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "");
};

export const roles = [
    {
        value: 'founder',
        label: 'Founder',
    },
    {
        value: 'teamleader',
        label: 'Teamleader',
    },
    {
        value: 'developer',
        label: 'Developer',
    },
    {
        value: 'hr',
        label: 'HR',
    },
    {
        value: 'designer',
        label: 'Designer',
    },
    {
        value: `qa`,
        label: 'QA',
    }
];

export const positions = [
    {
        value: 'fullStack',
        label: 'Fullstack',
    },
    {
        value: 'frontend',
        label: 'Frontend',
    },
    {
        value: 'backend',
        label: 'Backend',
    },
];

export const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            resolve(fileReader.result);
        }
        fileReader.onerror = (error) => {
            reject(error);
        }
    })
};