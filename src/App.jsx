import MyTypingAnimation from './MyTypingAnimation.jsx';

export default function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <MyTypingAnimation 
        text={["Yoooo waddup", "everything gnarlyyy.", "isnt it gnarly?!", 'everything is awesomeee', 'friedchicken gnarly']}
      />
    </div>
  );
}
