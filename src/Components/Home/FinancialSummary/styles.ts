import styled from "styled-components";
import { ContainerProps } from "../../../Types/typesStyles";
import { TextProps } from "../../../Types/typesStyles";

export const ContainerFinancialSummary = styled.div<ContainerProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.width};
  border: ${(props) => props.border};
  border-radius: 10px;
  padding: 10px;
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
`;

export const ContainerSingleInformation = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  @media (max-width: 570px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const TitleInformation = styled.p<TextProps>`
  font-size: 1.4rem;
  font-weight: bold;
`;

export const Information = styled.p<TextProps>`
  font-size: 1.2rem;
  font-weight: bold;
`;
