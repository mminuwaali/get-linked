import './style.sass';
import { useState } from 'react';
import { plus } from '../../../config';

export default function ({ id, question, answer, open, setOpen }) {

    return <div className={`faq-card ${open ? 'open' : ''}`}>
        <div className="header">
            <span>{question}</span>
            <img src={plus} alt="" onClick={() => setOpen(prev => prev == id ? null : id)} />
        </div>
        <div className="content">
            <p></p>
        </div>
    </div>
}