import {api} from '../api';

const register = (data: any) => api.post('/auth/register', data);

export {register};
