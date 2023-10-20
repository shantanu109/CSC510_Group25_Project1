

const API_ROOT = 'http://localhost:8000/api/v1';


export const APIURLS = {

    login: () => `${API_ROOT}/users/create-session`,
    signup: () => `${API_ROOT}/users/signup`,
    fetchJobs: () => `${API_ROOT}/users/`,
    editProfile : () => `${API_ROOT}/users/edit`,
    editItem : () => `${API_ROOT}/users/edititem`,
    
    createJob: () => `${API_ROOT}/users/createjob`,
    createMenu: () => `${API_ROOT}/users/createmenu`,
    order: () => `${API_ROOT}/users/order`,
    fetchOrder: () => `${API_ROOT}/users/orders`,
    
    fetchMenus: () => `${API_ROOT}/users/fetchmenus`,

    fetchAnalytics: () => `${API_ROOT}/users/analytics`, 
}

