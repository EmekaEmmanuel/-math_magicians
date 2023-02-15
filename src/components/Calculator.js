/* eslint-disable*/
import React from 'react';

function Calculator() {
    return (
        <div className="app_container">

            <section className="result">
                <input type="text" value={0} placeholder="0" />
            </section>

            <section className="quad">
                <button className="normal_btn">A/C</button>
                <button className="normal_btn negative_margin">+/-</button>
                <button className="normal_btn negative_margin">%</button>
                <button className="orange_btn negative_margin">+</button>
            </section>

            <section className="quad">
                <button className="normal_btn">7</button>
                <button className="normal_btn negative_margin">8</button>
                <button className="normal_btn negative_margin">9</button>
                <button className="orange_btn negative_margin">*</button>
            </section>

            <section className="quad">
                <button className="normal_btn">4</button>
                <button className="normal_btn negative_margin">5</button>
                <button className="normal_btn negative_margin">6</button>
                <button className="orange_btn negative_margin">-</button>
            </section>

            <section className="quad">
                <button className="normal_btn">1</button>
                <button className="normal_btn negative_margin">2</button>
                <button className="normal_btn negative_margin">3</button>
                <button className="orange_btn negative_margin">+</button>
            </section>

            <section className="quad">
                <button className="normal_big_btn">0</button>
                <button className="normal_btn negative_margin">.</button>
                <button className="orange_btn negative_margin">=</button>
            </section>

        </div>

    );
}

export default Calculator