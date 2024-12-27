import axios from 'axios'
import { Usuario } from '../components/Home'

const api = axios.create({
    baseURL: 'http://localhost:8000'
});

export const fetchUsers = async () => {
    try {
      const response = await api.get<Usuario[]>('/listarUsuarios');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      throw error; // Rejeita a promessa para que o componente possa lidar com o erro
    }
  };