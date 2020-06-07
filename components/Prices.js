import { useState } from 'react';

const Prices = (props) => {
    const [currency, updateCurrency] = useState('GBP')

    let currencyList = '';
    if (currency === 'USD') {
        currencyList = <ul className="list-group">
            <li className="list-group-item">
                BitCoin rate for {props.bpi.USD.description} : <span className="badge badge-primary">
                    {props.bpi.USD.code}
                </span>
                <strong>{props.bpi.USD.rate}</strong>
            </li>
        </ul>
    } else if (currency === 'EUR') {
        currencyList = <ul className="list-group">
            <li className="list-group-item">
                BitCoin rate for {props.bpi.EUR.description} : <span className="badge badge-primary">
                    {props.bpi.EUR.code}
                </span>
                <strong>{props.bpi.EUR.rate}</strong>
            </li>
        </ul>
    } else if (currency === 'GBP') {
        currencyList = <ul className="list-group">
            <li className="list-group-item">
                BitCoin rate for {props.bpi.GBP.description} : <span className="badge badge-primary">
                    {props.bpi.GBP.code}
                </span>
                <strong>{props.bpi.GBP.rate}</strong>
            </li>
        </ul>
    }
    return (
        <div>
            {currencyList}
        </div>
    );
}

export default Prices;