import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";
import { useEffect, useState } from "react";
import { primary, secondary, useTheme } from "../../contexts/theme";
import useGetMe from "../../hooks/auth/useGetMe";
import Skeleton from "../Skeleton";
import { useUserStore } from "../../stores/useUserStore";
import ThemedText from "../common/ThemedText";
import Menu from "../Menu";
import { getCookie } from "../../libs/react-cookie/cookie";

const Header = () => {
  const [page, setPage] = useState<string>("home");
  const [imageLoading, setImageLoading] = useState(true);
  const location = useLocation();
  const { theme, setDarkTheme, setLightTheme, setPurpleTheme } = useTheme();
  const { loading } = useGetMe();
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.includes("/problems")) {
      setPage("problems");
    } else if (location.pathname.includes('/contests')) {
      setPage("contests");
    } else {
      setPage('home');
    }
  }, [location.pathname]);

  const ACCESS_TOKEN = getCookie('ACCESS_TOKEN');

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
        <S.MenuItemWrap>
          <S.Menu
            to="/problems"
            style={page === "problems" ? { color: secondary[300] } : {}}
          >
            문제
          </S.Menu>
          <S.Menu
            to="/contests"
            style={page === "contests" ? { color: secondary[300] } : {}}
          >
            대회
          </S.Menu>
          <S.Menu to="/">상점</S.Menu>
          <Menu />
        </S.MenuItemWrap>

        <ThemedText onClick={setDarkTheme}>다크</ThemedText>
        <ThemedText onClick={setLightTheme}>라이트</ThemedText>
        <ThemedText onClick={setPurpleTheme}>퍼플</ThemedText>
      </S.MenuWrap>
      {ACCESS_TOKEN ? (
        <>
          {loading && imageLoading && (
            <Skeleton width={48} height={48} style={{ borderRadius: 50 }} />
          )}
          <S.Profile
            onLoad={() => {
              setImageLoading(false);
            }}
            src={`${import.meta.env.VITE_API_URL}/avatars/${user.id}.webp`}
            style={loading && imageLoading ? { width: 0, height: 0 } : {}}
            onClick={()=>{navigate('/profile')}}
          />
        </>
      ) : (
        <S.ButtonWrap>
          <S.Button to='/login' background={primary[900]}>로그인</S.Button>
          <S.Button to='/signup' background={secondary[900]}>회원가입</S.Button>
        </S.ButtonWrap>
      )}
    </S.Container>
  );
};

export default Header;
