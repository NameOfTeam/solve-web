import { useTheme } from '../../contexts/theme';
import useGetContests from '../../hooks/contest/useGetContests';
import * as S from './style'

const ContestBox = () => {
  const { theme } = useTheme();
  const { data } = useGetContests();

  return (
    <S.Container>
      <S.ContestBoxTtile>대회</S.ContestBoxTtile>
      {data?.pages.map((page) => (
        <S.ContestWrap>
          {page.content.map((item:any) => (
            <S.ContestItem border={theme.boxBorderColor} key={item.id}>
              <S.ContestTtile>{item.title}</S.ContestTtile>
              <S.ContestStatus>{item.status}</S.ContestStatus>
            </S.ContestItem>
          ))}
        </S.ContestWrap>
      ))}
    </S.Container>
  );
}

export default ContestBox