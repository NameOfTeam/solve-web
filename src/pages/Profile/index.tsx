import { primary, secondary, useTheme } from '../../contexts/theme';
import { useUserStore } from '../../stores/useUserStore';
import * as S from './style'

const Profile = () => {
  const user = useUserStore(state=>state.user);
  const { theme } = useTheme();

  return (
    <S.Container>
      <S.Banner
        src={`${import.meta.env.VITE_API_URL}/avatars/${user.id}.webp`}
      />
      <S.Main>
        <S.UserInfoWrap>
          <S.ProfileImageWrap
            src={`${import.meta.env.VITE_API_URL}/avatars/${user.id}.webp`}
          />
          <S.Username>{user.username}</S.Username>
          <S.Introduction color={theme.oppositeColor}>
            {user.introduction}
          </S.Introduction>
          <S.Log>
            총&nbsp;
            <S.Point color={secondary[300]}>{user.solvedProblem | 0}개</S.Point>
            &nbsp;문제 해결
            <S.Dot color={theme.oppositeColor}>・</S.Dot>
            <S.Point color={primary[500]}>{user.solvedProblem | 0}개</S.Point>
            &nbsp;대회참여
            <S.Dot color={theme.oppositeColor}>・</S.Dot>
            최장스트릭&nbsp;
            <S.Point color={secondary[300]}>{user.solvedProblem | 0}일</S.Point>
          </S.Log>
          <S.Link>
            <S.LinkIcon src="/assets/link.svg" />
            <S.LinkText href="https://cher1shrxd.me" target="_blank">
              https://cher1shrxd.me
            </S.LinkText>
          </S.Link>
        </S.UserInfoWrap>
        <S.badgeWrap>
          <S.SectionTitleWrap>
            <S.SectionTitle>뱃지</S.SectionTitle>
            <S.More>더보기</S.More>
          </S.SectionTitleWrap>
          <S.Badges>
          </S.Badges>
        </S.badgeWrap>
        <S.RankWrap>
          <S.SectionTitle>랭크</S.SectionTitle>
        </S.RankWrap>
        <S.StreakWrap>
          <S.SectionTitle>스트릭</S.SectionTitle>
        </S.StreakWrap>
      </S.Main>
    </S.Container>
  );
}

export default Profile