import { useRef } from 'react';
import { primary, secondary, useTheme } from '../../contexts/theme';
import useUpdateMe from '../../hooks/auth/useUpdateMe';
import { useUserStore } from '../../stores/useUserStore';
import * as S from './style'

const Profile = () => {
  const user = useUserStore(state=>state.user);
  const { theme } = useTheme();
  const { ...update } = useUpdateMe(); 
  const avatarInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files[0]);
      update.setAvatar(e.target.files[0]);
    }
  };

  const handleFileOpen = () => {
    if(avatarInputRef.current) {
      avatarInputRef.current.click();
    }
  }

  return (
    <S.Container>
      <S.Banner
        src={`${import.meta.env.VITE_API_URL}/avatars/${user.id}.webp`}
      />
      <S.Main>
        <S.UserInfoWrap>
          <S.ProfileImage
            url={`${import.meta.env.VITE_API_URL}/avatars/${user.id}.webp`}
            onClick={handleFileOpen}
          >
            <S.AvatarFile ref={avatarInputRef} onChange={handleFileChange} type='file' accept='image/*'/>
          </S.ProfileImage>
          <S.Username>{user.username}</S.Username>
          <S.Introduction color={theme.oppositeColor}>
            {user.introduction}
          </S.Introduction>
          <S.Log>
            총&nbsp;
            <S.Point color={secondary[300]}>{user.solvedCount | 0}개</S.Point>
            &nbsp;문제 해결
            <S.Dot color={theme.oppositeColor}>・</S.Dot>
            <S.Point color={primary[500]}>
              {user.participatedContest | 0}개
            </S.Point>
            &nbsp;대회참여
            <S.Dot color={theme.oppositeColor}>・</S.Dot>
            최장스트릭&nbsp;
            <S.Point color={secondary[300]}>{user.maxStreak | 0}일</S.Point>
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
          <S.Badges></S.Badges>
        </S.badgeWrap>
        <S.EditWrap>
          <S.SectionTitle>정보 수정</S.SectionTitle>
          <S.Label>아이디</S.Label>
          <S.Input
            placeholder="새 아이디를 입력해주세요."
            type="text"
            name="username"
            onChange={update.handleForm}
            value={update.data.username}
          />
          <S.Label>비밀번호</S.Label>
          <S.Input
            placeholder="새 비밀번호를 입력해주세요."
            type="password"
            name="newPassword"
            onChange={update.handleForm}
            value={update.data.newPassword}
          />
          <S.Input placeholder="비밀번호 확인" type="password" />
          <S.Input
            placeholder="현재 비밀번호를 입력해주세요."
            type="password"
            name="currentPassword"
            onChange={update.handleForm}
            value={update.data.currentPassword}
          />
          <S.Label>자기소개</S.Label>
          <S.Textarea
            name="introduction"
            placeholder="자기소개를 입력해주세요."
            onChange={update.handleForm}
            value={update.data.introduction}
          />
          <S.EditButton
            background={secondary[900]}
            darker={secondary[500]}
            disabled={update.updateLoading}
            onClick={update.submit}
          >
            수정
          </S.EditButton>
        </S.EditWrap>
        <S.RankWrap>
          <S.SectionTitle>랭크</S.SectionTitle>
        </S.RankWrap>
        <S.SocialWrap>
          <S.SectionTitle>소셜</S.SectionTitle>
        </S.SocialWrap>
        <S.StreakWrap>
          <S.SectionTitle>스트릭</S.SectionTitle>
        </S.StreakWrap>
      </S.Main>
    </S.Container>
  );
}

export default Profile