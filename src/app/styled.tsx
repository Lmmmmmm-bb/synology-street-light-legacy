import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const StyledAvatarWrapper = styled.a`
  margin-top: 10%;
  margin-bottom: 8px;
`;

export const StyledAvatar = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
`;

export const StyledGreetingWrapper = styled.p`
  padding: 24px;
  margin-bottom: 24px;
  color: #569cba;
  line-height: 1;
  font-size: 24px;
  font-weight: 500;
  font-family: 'PingFang SC', -apple-system, 'Segoe UI', 'Microsoft YaHei',
    sans-serif;
  user-select: none;
`;

export const StyledStreetLightWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  align-items: center;
  text-align: center;
  user-select: none;
`;
