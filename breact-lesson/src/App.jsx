import Button from './components/Button';

const row1Buttons = [
  {
    buttonText: 'Nr1',
  },
  {
    buttonText: 'Nr2',
  },
  {
    buttonText: 'Nr3',
  },
  {
    buttonText: 'Nr4',
  },
  
];

const row2Buttons = [
  {
    buttonText: 'Nr5',
  },
  {
    buttonText: 'Nr6',
  }
];

function App() {
  return (
    <>
      <div>
        {
          row1Buttons.map((btn, i) => <Button buttonText = {btn.buttonText}></Button>)
        }
      </div>
      <div>
        {
          row2Buttons.map((btn, i) => <Button buttonText = {btn.buttonText}></Button>)
        }
      </div>
    </>
  );
}

export default App;
