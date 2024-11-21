//import logo from './logo.svg';
import './App.css';
import ParseWithPDFLib from './Components/ParseWithPDFLib';
import PrintContentsOfPDF from './Components/PrintContentsOfPDF';
import Webhook from './Components/Webhook';
//import Printpdf from './Components/PrintContentsOfPDF';
//import Printpdflib from './Components/ParseWithPDFLib';

function App() {
  return (
    <div className="App">
        <PrintContentsOfPDF />
        {/* <ParseWithPDFLib /> */}
        <Webhook />
    </div>
  );
}

export default App;
