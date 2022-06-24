import { FC } from 'react';
import StreetLight from '@/components/StreetLight';
import styles from './index.module.scss';
import Avatar from '/avatar.webp';
import { streetLightConfig } from './config';

const App: FC = () => {
  const { VITE_PORT, VITE_ADDRESS } = import.meta.env;

  return (
    <div className={styles.wrapper}>
      <a
        className={styles.avatarWrapper}
        href={`http://${VITE_ADDRESS}:${VITE_PORT}`}
      >
        <img
          alt='avatar'
          className={styles.avatar}
          src={Avatar}
          draggable={false}
        />
      </a>
      <div className={styles.streetLightWrapper}>
        {streetLightConfig.map((config, index) => (
          <StreetLight key={index} {...config} />
        ))}
      </div>
    </div>
  );
};

export default App;
