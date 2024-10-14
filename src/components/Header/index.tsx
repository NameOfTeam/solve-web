import { useLocation } from 'react-router-dom';
import * as S from './style'
import { useEffect, useState } from 'react';
import { secondary, useTheme } from '../../context/theme';

const Header = () => {
  const [page, setPage] = useState<string>('home');
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(()=>{
    if(location.pathname.includes('/problems')){
      setPage('problems');
    }else{
      setPage('home');
    }
  },[location.pathname]);


  return (
    <S.Container>
      <S.ToHome to="/">
        <S.Logo src={theme.backgroundColor === '#FFF' ? "/assets/solve_black.svg" : "/assets/solve.svg"} alt="solve" />
      </S.ToHome>
      <S.MenuWrap>
        <S.Menu to="/problems" style={page === 'problems' ? { color:secondary } : {}}>문제</S.Menu>
        <S.Menu to="/">대회</S.Menu>
        <S.Menu to="/">상점</S.Menu>
      </S.MenuWrap>
      <S.Profile />
    </S.Container>
  );
}

export default Header