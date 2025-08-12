import MyTypingAnimation from './MyTypingAnimation.jsx';

export default function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <MyTypingAnimation 
        text={["Yoooo waddup", "Hanna det är inte okej att stjäla!.", "isnt it gnarly?!", 'Grattis i förskott🥳']}
      />
    </div>
  );
}
