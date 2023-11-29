import api from './';

const loginAPI = {
  endPoint: {
    login: '/api/auth/login',
    signUp: '/api/auth/sign-up',
  },
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },

  login: async (id: string, password: string) => {
    const { data } = await api.post(loginAPI.endPoint.login, {
      id,
      password,
    });

    return data;
  },
};
