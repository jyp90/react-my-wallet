import React, { useEffect } from 'react';
import './App.css';
import Data from './data/index.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <span>Card List</span>
        </div>
      </header>
      <AppBody></AppBody>
      <footer className="App-footer">
        <div className="popup">
          <span>Copied!</span>
        </div>
        <button className="button-add">+</button>
      </footer>
    </div>
  );
}

function AppBody() {
  return (
    <div className="App-body">
        <div className="list">
          <table>
            <thead>
              <th className="test">No.</th>
              <th>Name</th>
              <th>CVC</th>
              <th>Valid</th>
            </thead>
            <TBody></TBody>
          </table>
        </div>
      </div>
  )
}


let copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

let showPopup = function(){
  document.getElementsByClassName('popup')[0].style.display = 'block';
  setTimeout(hiddenPopup, 500);
}

let hiddenPopup = function(){
  document.getElementsByClassName('popup')[0].style.display = 'none';
}

let onClickEvent = function(str){
  copyToClipboard(str);
  showPopup();
}

function TBody(){
  let data = Data;


  // After render
  // class > componentDidMount
  useEffect(function(){

    // data의 값이 변하면 작동
    return function(){

    }
  }, [data]);

  return (
    data.map((row, index) => {
      return (<tr key={index}>
        <td className="test" key={row.no} onClick={() => onClickEvent(row.no)}>{row.no}</td>
        <td key={row.name}>{row.name}</td>
        <td key={row.cvc}>{row.cvc}</td>
        <td key={row.valid}>{row.valid}</td>
      </tr>)
    })
  );
}

// class CardNo extends React.Component {
//   render() {
//     return (
//       Data.map(row => {
//         return (<td onClick={AppBody.useEffectonClickEvent}>{row.no}</td>)
//       })
//     )
//   }
// }

export default App;
