import styled from "styled-components";
import ChevronIcon from "../../../../../assets/icons/right.png";
import S from "../../../_Text/S";

export const Container = styled.div`
  width: 100%;
  margin: 0px;
  padding: 20px 0px;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition-duration: 0.5s;
  box-sizing: content-box;
  display: flex;

  &:first-of-type {
    border-top: none;
  }

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
  }
`;

export const Symbol = styled.h1`
  width: 32px;
  height: 32px;
  font-size: 31px;
  opacity: 0.5;
  border-radius: 20px;
  margin: -3px 0px;
  text-align: center;
  font-weight: 300;
`;

export const Icon = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${(props) => props.icon});
  background-size: 26px;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Names = styled.div`
  width: ${(props) => (props.label ? "120px" : "100%;")};
  margin: 0px 0px 0px 18px;
`;

export const Information = styled.div`
  width: calc(100% - 147px);
`;

export const Amount = styled.p`
  margin: 2px 0px 0px 0px;
  padding: 6px 12px;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 500;
  background-color: #fff;
  border-radius: 20px;
  width: fit-content;
  float: right;
`;

export const Chevron = styled.div`
  width: 10px;
  height: 32px;
  margin: 0px 0px 0px 10px;
  background-image: url(${ChevronIcon});
  background-size: 10px;
  opacity: 0.4;
  background-position: center;
  background-repeat: no-repeat;
`;
