import { useState } from "react";
import { getScssToStyledComponents } from "../../api/getScssToStyledComponents";
import Warning from "../Warning";
import * as S from "./style";

const Main = () => {
  const [scssCode, setSccsCode] = useState("");
  const [styledComponentsCode, setStyledComponentsCode] = useState("");

  const submit = () => {
    let styledComponents = getScssToStyledComponents(scssCode);
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
        <S.TextArea value={styledComponentsCode} />
      </S.Wrap>
      <S.Button onClick={submit}>변환</S.Button>
    </S.Container>
  );
};

export default Main;
