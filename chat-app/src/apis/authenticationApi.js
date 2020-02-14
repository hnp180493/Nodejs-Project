import axiosService from '../helpers/axiosService';
import { API_END_POINT } from '../helpers/constant';

export const login = formLogin => {
  return axiosService.post(`${API_END_POINT}/api/login`, formLogin);
};

export const register = formRegister => {
  return axiosService.post(`${API_END_POINT}/api/register`, formRegister);
};