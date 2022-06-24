import { FC } from 'react';
import styles from './index.module.scss';

interface IStreetLightProps {
  to: string;
  src: string;
  description: string;
}

const StreetLight: FC<IStreetLightProps> = (props) => {
  const { to, src, description } = props;

  return (
    <a
      className={styles.wrapper}
      href={`http://${import.meta.env.VITE_ADDRESS}${to}`}
      title={description}
    >
      <img
        className={styles.image}
        src={src}
        alt={description}
        draggable={false}
      />
      <p className={styles.description}>{description}</p>
    </a>
  );
};

export default StreetLight;
