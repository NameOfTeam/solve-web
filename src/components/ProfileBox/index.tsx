import { Dispatch } from 'react';
import Skeleton from '../Skeleton';
import * as S from './style'
import { User } from '../../types/auth/user';

const ProfileBox = ({loading, imageLoading, setImageLoading, user} : {loading: boolean, imageLoading: boolean, setImageLoading: Dispatch<boolean>, user: User}) => {
  return (
    <S.Container>
      {loading && imageLoading && (
        <Skeleton width={112} height={112} style={{ borderRadius: 100 }} />
      )}
      <S.Avatar
        src={`${import.meta.env.VITE_API_URL}/avatars/${user.id}.webp`}
        style={loading || imageLoading ? { width: 0, height: 0 } : {}}
        onLoad={() => {
          setImageLoading(false);
        }}
      />
      {loading && imageLoading ? (
        <Skeleton width={200} height={30} style={{ borderRadius: 8 }} />
      ) : (
        <S.Username>{user.username}</S.Username>
      )}
      <S.StatWrap>
        <S.Stats>
          <S.Stat>푼 문제</S.Stat>
          {loading && imageLoading ? (
            <Skeleton width={100} height={30} style={{ borderRadius: 8 }} />
          ) : (
            <S.StatValue>{user.solvedProblem}</S.StatValue>
          )}
        </S.Stats>
        <S.Stats>
          <S.Stat>대회 참여 수</S.Stat>
          {loading && imageLoading ? (
            <Skeleton width={100} height={30} style={{ borderRadius: 8 }} />
          ) : (
            <S.StatValue>{user.participatedContest}</S.StatValue>
          )}
        </S.Stats>
        <S.Stats>
          <S.Stat>돈</S.Stat>
          {loading && imageLoading ? (
            <Skeleton width={100} height={30} style={{ borderRadius: 8 }} />
          ) : (
            <S.StatValue>{user.money} SP</S.StatValue>
          )}
        </S.Stats>
      </S.StatWrap>
    </S.Container>
  );
}

export default ProfileBox