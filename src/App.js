import Grid from './Grid';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


function App() {
  return (
    <div style={{
      width: '100%',
      height: '80vh',
      overflowY: 'auto'
    }}>
      <Grid />
    </div>
  );
}

export default App;
