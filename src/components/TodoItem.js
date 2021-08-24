// 각 할 일에 대한 정보를 렌더링해주는 컴포넌트이다.
// 좌측에 있는 원을 누르면 할 일의 완려 여부를 toggle 할 수 있다.
// 할 일이 완료됐을 땐 좌측에 체크가 나타나고 텍스트의 색상이 연해진다.
// 마우스를 올리면 휴지통 아이콘이 나타나고
// 이를 누르면 항목이 삭제된다.
import React from "react";
import styled, { css } from "styled-components";
// react-icons 사용
import { MdDone, MdDelete } from "react-icons/md";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #ff6b6b;
  }

  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;

  &:hover {
    /*
        Component Selector 라는 기능임
        TodoItemBlock 위에 커서가 있을 때, Remove 컴포넌트를 보여주라는 의미
      */
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ id, done, text }) {
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
