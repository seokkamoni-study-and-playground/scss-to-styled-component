import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 10px;
`;

export const Wrap = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  gap: 5%;
  padding: 40px;
`;

export const TextArea = styled.textarea`
  resize: none;
  height: 100%;
  width: 47.5%;
  font-size: 14px;
  padding: 10px;
`;

export const Pre = styled.pre`
  overflow: auto;
  border: 1px solid black;
  height: 100%;
  width: 47.5%;
  font-size: 14px;
  padding: 10px;
`;

export const Button = styled.button`
  height: 80px;
  width: 350px;
  border: 1px solid black;
  border-radius: 8px;
  font-size: 24px;
`;
