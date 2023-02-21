import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 10px;
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TextArea = styled.textarea`
  resize: none;
  height: 80%;
  width: 50%;
  font-size: 14px;
`;

export const Button = styled.button`
  height: 100px;
  width: 400px;
`;
