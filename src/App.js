import Wrapper from './Wrapper';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


function App() {
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      overflowY: 'auto'
    }}>
      <Wrapper />
    </div>
  );
}

export default App;
