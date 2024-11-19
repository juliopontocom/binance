import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

function Preco() {
    const [preco, setPreco] = useState(null);

    useEffect(() => {
        // Atualiza o preço em tempo real usando WebSocket
        const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');

        ws.onmessage = (event) => {
            const stockObject = JSON.parse(event.data);
            setPreco(parseFloat(stockObject.p).toFixed(2)); // Atualiza o preço em tempo real
        };

        // Limpa o WebSocket ao desmontar o componente
        return () => {
            ws.close();
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.convert}>
                <div className={styles.token}>BTC/USDT</div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1629 13.1759L17.5 17.5M15 8.75C15 12.2017 12.2017 15 8.75 15C5.29822 15 2.5 12.2017 2.5 8.75C2.5 5.29822 5.29822 2.5 8.75 2.5C12.2017 2.5 15 5.29822 15 8.75Z" stroke="#B9BCC1" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div className={styles.valor}>{preco ? `${preco}` : '...'}</div>
            <span></span>
        </div>

    );
}

export default Preco;
