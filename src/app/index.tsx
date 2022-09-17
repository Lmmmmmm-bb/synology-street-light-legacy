import { FC } from 'react';

import Avatar from '/avatar.webp';
import StreetLight from '~/components/street-light';
import ReloadPrompt from '~/components/reload-prompt';

import {
  StyledAvatar,
  StyledAvatarWrapper,
  StyledGreetingWrapper,
  StyledStreetLightWrapper,
  StyledWrapper
} from './styled';
import { streetLightConfig } from './config';

const App: FC = () => {
  const { VITE_PORT, VITE_ADDRESS } = import.meta.env;
  const [greeting, setGreeting] = useState('Hi.');
  const retype = useTypeWriter(greeting);

  useEffect(() => {
    setTimeout(() => {
      setGreeting(`Welcome to lmmmmmm's Nas.`);
    }, 3000);
  }, []);

  return (
    <StyledWrapper>
      <StyledAvatarWrapper
        href={`http://${VITE_ADDRESS}:${VITE_PORT}`}
        title='Go to DSM'
      >
        <StyledAvatar alt='avatar' src={Avatar} draggable={false} />
      </StyledAvatarWrapper>
      <StyledGreetingWrapper>{retype}</StyledGreetingWrapper>
      <StyledStreetLightWrapper>
        {streetLightConfig.map((config, index) => (
          <StreetLight key={index} {...config} />
        ))}
      </StyledStreetLightWrapper>
      <ReloadPrompt />
    </StyledWrapper>
  );
};

export default App;
