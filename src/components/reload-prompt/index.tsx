import { FC } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

import {
  StyledButton,
  StyledMessage,
  StyledToast,
  StyledWrapper
} from './styled';

const UPDATE_SW_MS = 30 * 24 * 60 * 60 * 1000;

const ReloadPrompt: FC = () => {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker
  } = useRegisterSW({
    onRegistered: (r) => {
      r &&
        setInterval(() => {
          r.update();
        }, UPDATE_SW_MS);
    },
    onRegisterError: (error) => {
      // eslint-disable-next-line no-console
      console.error('SW registration error', error);
    }
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <StyledWrapper>
      {(offlineReady || needRefresh) && (
        <StyledToast>
          <StyledMessage>
            {offlineReady ? (
              <span>应用程序已准备好离线工作</span>
            ) : (
              <span>有新内容可用，点击重新加载按钮进行更新。</span>
            )}
          </StyledMessage>
          {needRefresh && (
            <StyledButton onClick={() => updateServiceWorker(true)}>
              重新加载
            </StyledButton>
          )}
          <StyledButton onClick={close}>关闭</StyledButton>
        </StyledToast>
      )}
    </StyledWrapper>
  );
};

export default ReloadPrompt;
