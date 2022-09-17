import { FC } from 'react';

import { StyledLink, StyledImage, StyledParagraph } from './styled';

interface IStreetLightProps {
  to: string;
  src: string;
  description: string;
}

const StreetLight: FC<IStreetLightProps> = (props) => {
  const { to, src, description } = props;

  return (
    <StyledLink
      href={`http://${import.meta.env.VITE_ADDRESS}${to}`}
      title={description}
    >
      <StyledImage src={src} alt={description} draggable={false} />
      <StyledParagraph>{description}</StyledParagraph>
    </StyledLink>
  );
};

export default StreetLight;
