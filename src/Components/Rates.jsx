import '../App.css';
import {useState, useEffect} from 'react';

function Converter() {
  const [ratesList, setRatesList] = useState([]);
  const [valute, setValute] = useState('USD');

    useEffect(() => {
        fetch(`https://www.cbr-xml-daily.ru/daily_json.js`)
        .then(res => res.json()).then(res => {
        setRatesList(Object.entries(res.Valute))});
    },[valute])

    function selectHandler({target}) {
      setValute(target.value);
    }

// console.log(ratesList);
  return (
    <div className="Rates">
        <div className="rates_select">
            <select onChange={selectHandler}>
                <option value='RUB'>RUB</option>
            </select>
            <ul>
              { ratesList.map( (el, i) => <li key={i}>{el[0]} value {el[1].Value}</li>)}
            </ul>
        </div>
    </div>
  );
}

export default Converter;
