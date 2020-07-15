import styled from "styled-components";

export const Grid = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: auto;

  grid-template-areas:
    "SL"
    "SU";

  height: 100vh;
`;

export const Container = styled.div`
  grid-area: SU;

  display: flex;
  flex-direction: column;
  padding: 0 60px;
  background-color: #333646;
`;

export const Form = styled.form`
  margin: 80px auto;
  padding: 64px;
  max-width: 1000px;
  background: #fff;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;
export const FieldSet = styled.fieldset`
  margin-top: 64px;
  min-inline-size: auto;
  border: 0;
`;
export const FieldRow = styled.div`
  flex: 1;
  display: flex;
`;

export const Field = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  margin-top: 32px;
`;

export const Address = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  flex: 1;
  background: #f0f0f5;
  border-radius: 8px;
  border: 0;
  padding: 16px 24px;
  font-size: 16px;
  color: #6c6c80;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #6c6c80;
`;

export const InputLink = styled.input`
  height: 50px;
  background: #f0f0f5;
  border-radius: 8px;
  border: 0;
  padding: 0px 20px;
  font-size: 16px;
  color: #6c6c80;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
  color: #6c6c80;
`;

export const TextArea = styled.textarea`
  margin-top: 8px;
  width: 100%;
  min-height: 140px;
  resize: vertical;
  color: #000;
  background-color: #f5f5f5;
  height: 60px;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 16px 24px;
  line-height: 24px;
`;

export const TechsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  list-style: none;
  margin-left: 60px;
`;

export const TechsListLi = styled.li`
  background: var(--white-color);
  border: 2px solid var(--white-color);
  height: 180px;
  border-radius: 8px;
  padding: 32px 24px 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  text-align: center;

  cursor: pointer;

  &:hover,
  &:focus {
    cursor: pointer;
    border: 1px solid var(--primary-color);
    box-shadow: 2px 2px #3333;
  }

  &.selected {
    border: 1px solid var(--primary-color);
  }

  > span {
   color: #6c6c80;
  }
`;

export const ImageProject = styled.img`
  width: 80px;
  height: 80px;
`;

export const Button = styled.button`
  width: 350px;
  height: 56px;
  background: var(--primary-color);
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  margin-top: 60px;
  margin-left: 300px;

  transition: background-color 0.2s;
  cursor: pointer;
`;
