import { FC } from 'react';

import Avatar from '/avatar.webp';
import StreetLight from '~/components/street-light';
import ReloadPrompt from '~/components/reload-prompt';

import styles from './index.module.scss';
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
    <div className={styles.wrapper}>
      <a
        className={styles.avatarWrapper}
        href={`http://${VITE_ADDRESS}:${VITE_PORT}`}
        title='Go to DSM'
      >
        <img
          alt='avatar'
          className={styles.avatar}
          src={Avatar}
          draggable={false}
        />
      </a>
      <p className={styles.greetingWrapper}>{retype}</p>
      <div className={styles.streetLightWrapper}>
        {streetLightConfig.map((config, index) => (
          <StreetLight key={index} {...config} />
        ))}
      </div>
      <ReloadPrompt />
    </div>
  );
};

export default App;
