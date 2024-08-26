import { Container, MessageList, Webchat, WebchatProvider, useClient } from '@botpress/webchat';

import './style.css';
import { theme } from './theme';

const clientId = '9442cbd5-4c9e-4603-bcc8-3986b9357d9f';

export function Botpress() {
  const client = useClient({ clientId });

  return (
    <div className='w-[25vw] h-[70vh] fixed bottom-10 right-10'>
      <WebchatProvider client={client} theme={theme}>
        <Webchat />
      </WebchatProvider>
    </div>
  );
}