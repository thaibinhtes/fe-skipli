import './styles/message.scss';

import ItemMessage from "./ItemMessage";
import { useEffect, useState } from 'react';
import BaseInput from '../../components/BaseInput';

const MessageView = () => {
  const [heightChat, setHeightChat] = useState<number>(0);
  const [message, setMessage] = useState('')

  const calculateHeight = () => {
    const header = document.querySelector('header') as HTMLElement | null;
    const body = document.body;
    const heightMargin = 25;

    if (header && body) {
      setHeightChat(body.clientHeight - header.clientHeight - heightMargin);
    }
  };

  useEffect(() => {
    calculateHeight();

    // Update when window resizes
    window.addEventListener('resize', calculateHeight);
    return () => window.removeEventListener('resize', calculateHeight);
  }, []);

  const onSendMessage = () => {
    setMessage('')
  }

  return <div className="message-view w-full">
    <div className="message-view__container flex w-full gap-x-[33px]">
      <div className="message-view__list">
        <ItemMessage />
      </div>

      <div className="message-view__main relative" style={{
        height: `${heightChat}px`
      }}>
        <div className="message-view__input-chat absolute w-full">
          <BaseInput
            type='text'
            value={message}
            placeholder='Reply Message'
            change={(message: string) => setMessage(message)}
            onDragEnter={() => onSendMessage()}
          />
        </div>

      </div>
    </div>
  </div>
}


export default MessageView;
