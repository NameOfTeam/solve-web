import { useLocation } from 'react-router-dom';
import * as S from './style'
import { useEffect, useState } from 'react';
import { secondary, useTheme } from '../../contexts/theme';
import useGetMe from '../../hooks/auth/useGetMe';
import Skeleton from '../Skeleton';
// import { useUserStore } from '../../stores/useUserStore';

const Header = () => {
  const [page, setPage] = useState<string>('home');
  const [imageLoading, setImageLoading] = useState(true);
  const location = useLocation();
  const { theme } = useTheme();
  const { loading } = useGetMe();
  // const user = useUserStore(state=>state.user);

  useEffect(()=>{
    if (location.pathname.includes('/problems')) {
      setPage('problems');
    } else {
      setPage('home');
    }
  }, [location.pathname]);

  return (
    <S.Container>
      <S.ToHome to="/">
        <S.Logo
          src={
            theme.backgroundColor === "#FFF"
              ? "/assets/solve_black.svg"
              : "/assets/solve.svg"
          }
          alt="solve"
        />
      </S.ToHome>
      <S.MenuWrap>
        <S.Menu
          to="/problems"
          style={page === "problems" ? { color: secondary } : {}}
        >
          문제
        </S.Menu>
        <S.Menu to="/">대회</S.Menu>
        <S.Menu to="/">상점</S.Menu>
      </S.MenuWrap>
      {loading && imageLoading && (
        <Skeleton width={48} height={48} style={{borderRadius:50}}/> 
      )}
      <S.Profile
        onLoad={() => {
          setImageLoading(false);
        }}
        src="https://file.cher1shrxd.me/file-1727415813234-534582689.jpg"
        style={loading && imageLoading ? {width: 0, height: 0} : {}}
      />
    </S.Container>
  );
}

export default Header