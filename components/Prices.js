import { useState } from 'react';

const Prices = (props) => {
    const [currency, updateCurrency] = useState('USD')
    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                    BitCoin rate for {props.bpi.USD.description} : <span className="badge badge-primary">
                        {props.bpi.USD.code}
                    </span>
                    <strong>{props.bpi.USD.rate}</strong>
                </li>
            </ul>
        </div>
    );
}

export default Prices;