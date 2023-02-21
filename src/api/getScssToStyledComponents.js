import { customAxios } from "../customAxios/customAxios";

export const getScssToStyledComponents = async (scssCode) => {
  try {
    // OpenAI API 요청
    const response = await customAxios.post(
      "/engines/davinci-codex/completions",
      {
        prompt: `${scssCode}\n this code please change styled-components code`,
        temperature: 0.5,
        max_tokens: 1024,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: "\n\n\n\n\n\n",
      }
    );

    // API 응답 결과에서 변환된 코드 추출
    const StyledComponentCode = response.data.choices[0].text;

    console.log(StyledComponentCode);

    return StyledComponentCode;
  } catch (error) {
    console.log(error);
    if (error.response.status == 500) {
      alert("gpt 서버가 터졌다");
    }
  }
};
