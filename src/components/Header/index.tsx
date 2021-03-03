import React, { useContext, useState } from 'react';  
import { Container } from './styles';
import Home from '../../assets/home.png';
import { FiArrowRight } from 'react-icons/fi';
import api from '../../services/api';
import { UserContext } from '../../context/UserContext';
interface UserInfo {
  profile_pic_url_hd: string;

}

export const Header: React.FC = () => {
  const { userInfo, setInfo } = useContext(UserContext);
  const [user, setUser] = useState(''); //search

  async function handleUser() {
    console.log(user);
    setUser(''); //set user for initial value

    try {
      const response = await api.get<UserInfo>(`${user}/?__a=1`);

      setInfo(response);
      console.log(userInfo);
      
    } catch (error) {
      
    }
  }

  return (
    <Container>
      <img src={Home} alt="Logo" />
      <input type="text" placeholder="Digite o usuário" value={user} onChange={value => setUser(value.target.value)} />
      <button type="submit" onClick={handleUser}><FiArrowRight size={40}/></button>
    </Container>
  )
}