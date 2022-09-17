import styled from 'styled-components';

export const StyledParagraph = styled.p`
  color: #8e8e8e;
  margin-bottom: 8px;
  user-select: none;
  font-size: 16px;
  font-weight: 500;
  font-family: 'PingFang SC', -apple-system, 'Segoe UI', 'Microsoft YaHei',
    sans-serif;
  transition: color 0.3s;
`;

export const StyledLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ececec;
  }

  &:hover ${StyledParagraph} {
    color: #569cba;
  }
`;

export const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 8px;
  object-fit: cover;
  user-select: none;
`;
