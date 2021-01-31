// import logo from './logo.svg';
import '../App.css';
import {useState, useEffect} from 'react';

function Converter() {

  const [input, setInput] = useState(0);
  const [value, setValue] = useState('0.00');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('USD');

    useEffect(() => {
      fetch(`https://api.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json()).then(res => {
          setValue((input*res.rates[toCurrency]).toFixed(2))
      })
    })

    function changeHandler(e) {
      setInput(e.target.value)
    }

    function selectFromHandler(e) {
        setFromCurrency(e.target.value);
    }

    function selectToHandler(e) {
        setToCurrency(e.target.value);
    }

  return (
    <div className="Converter">
        <div className="convert_block_item">
            <input type="number" placeholder="Введите сумму..." onChange={changeHandler}/>
            <select onChange={selectFromHandler}>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
                <option value='RUB'>RUB</option>
            </select>
        </div>
        <div className="convert_block_item">
            <span className="convert_result">={value}</span>
            <select onChange={selectToHandler}>
              <option value='USD'>USD</option>
              <option value='EUR'>EUR</option>
              <option value='RUB'>RUB</option>
            </select>
        </div>
    </div>
  );
}

export default Converter;
