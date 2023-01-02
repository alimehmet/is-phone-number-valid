import './App.css';

import phoneNumberChecker from 'phone-number-checker-latest';

function App() {
  console.log({phoneNumberChecker});
  const checkResult = phoneNumberChecker("5435");

  return (
    <div className="App">

      <h1>Ana Sayfa</h1>
      <div>Telefon numarası kontrolü = {checkResult.toString()}</div>
    </div>
  );
}

export default App;
