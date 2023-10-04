import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  font-weight: 700;
  font-size: 18px;

  &.active {
    color: #ff0000;
  }
`;

export const Button = styled.button`
  padding: 2px 10px;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;
  text-transform: capitalize;

  &:active {
    background-color: blue;
    color: white;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 320px;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid #111;
  padding-top: 20px;
  margin-bottom: 12px;
`;

export const FormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  line-height: normal;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const StyledSimpleLink = styled(Link)`
  color: red;
  text-align: center;
  font-size: 14px;
  padding: 2px 10px;
`;
