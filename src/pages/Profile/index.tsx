import { useUserStore } from '../../stores/useUserStore';
import * as S from './style'

const Profile = () => {
  const user = useUserStore(state=>state.user);

  return (
    <S.Container>
      <S.Banner src="/assets/login_bg.gif" />
      <S.Main>
        <S.UserInfoWrap>
          <S.ProfileImageWrap src={`${import.meta.env.VITE_API_URL}/avatars/${user.id}.webp`} />
          <S.Username>{user.username}</S.Username>
          <S.Introduction>ㄹㅇㅁㄹㅇㅁㄹㄴㅁㅇㄹ</S.Introduction>
        </S.UserInfoWrap>
        <S.badgeWrap>ㅎㅇㅁㅎ</S.badgeWrap>
        <S.RankWrap>dga</S.RankWrap>
      </S.Main>
    </S.Container>
  );
}

export default Profile