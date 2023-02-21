import { customAxios } from "../customAxios/customAxios";

export const getScssToStyledComponents = async (scssCode) => {
  try {
    // OpenAI API 요청
    const response = await customAxios.post(
      "/engines/davinci-codex/completions",
      {
        prompt: `${scssCode}\n 이코드를 styled-components 코드로 변환해줘`,
        temperature: 0.5,
        max_tokens: 1024,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: "\n",
      }
    );

    // API 응답 결과에서 변환된 코드 추출
    const generatedCode = response.data.choices[0].text;
    console.log(generatedCode);

    return generatedCode;
  } catch (error) {
    console.log(error);
    console.log("에러다");
  }
};
