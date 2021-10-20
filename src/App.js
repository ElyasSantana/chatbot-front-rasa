import Widget from 'rasa-webchat';
import { useEffect } from 'react';
import './App.css';

function CustomWidget() {
  const socketUrl = process.env.REACT_APP_SOCKET_URL;

  return (
    <Widget
      initPayload={'oi'}
      socketUrl={socketUrl}
      customData={{ language: 'pt-br' }}
      title={'PicPay'}
      subtitle={'Assistente Virtual'}
      inputTextFieldHint={'Digite sua mensagem...'}
      showCloseButton={false}
      fullScreenMode={true}
      params={{ storage: 'session' }}
    />
  );
}

function App() {
  useEffect(() => {
    let count = 0;

    const loop = setInterval(() => {
      let buttonOpenChat = document.getElementsByClassName('rw-launcher');
      let chatOpen = document.getElementsByClassName(
        'rw-conversation-container'
      );

      if (buttonOpenChat.length > 0 && chatOpen.length === 0) {
        buttonOpenChat[0].click();
        clearInterval(loop);
      }

      if (count === 5) clearInterval(loop);

      count++;
    }, 500);
  });

  return (
    <div className='App'>
      <CustomWidget />
    </div>
  );
}

export default App;
