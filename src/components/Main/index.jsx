import { useState } from "react";
import { getScssToStyledComponents } from "../../api/getScssToStyledComponents";
import Warning from "../Warning";
import * as S from "./style";

const Main = () => {
  const [scssCode, setSccsCode] = useState("");
  const [styledComponentsCode, setStyledComponentsCode] = useState("");

  const submit = async () => {
    const styledComponents = await getScssToStyledComponents(scssCode);
    console.log(styledComponents);
    setStyledComponentsCode(styledComponents);
  };

  return (
    <S.Container>
      <Warning />
      <S.Wrap>
        <S.TextArea
          value={scssCode}
          placeholder="scss 코드를 입력하세요."
          onChange={(e) => setSccsCode(e.target.value)}
        />
        <S.Pre>{styledComponentsCode}</S.Pre>
      </S.Wrap>
      <S.Button onClick={submit}>코드 변환</S.Button>
    </S.Container>
  );
};

export default Main;
