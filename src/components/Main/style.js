import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100vw;
  height: 100vh;
`;

export const Wrap = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  gap: 18px;
`;

export const TextArea = styled.textarea`
  resize: none;
  height: 100%;
  width: 45%;
  font-size: 14px;
`;

export const Pre = styled.pre`
  border: 1px solid black;
  height: 100%;
  width: 45%;
  font-size: 14px;
`;

export const Button = styled.button`
  height: 80px;
  width: 350px;
`;
