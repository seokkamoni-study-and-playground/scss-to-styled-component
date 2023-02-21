import * as S from "./style";

const Main = () => {
  return (
    <S.Container>
      <S.Wrap>
        <S.TextArea placeholder="scss 코드를 입력하세요." />
        <S.TextArea />
      </S.Wrap>
      <S.Button>변환</S.Button>
    </S.Container>
  );
};

export default Main;
