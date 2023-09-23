import "./style.sass";
import { useState } from 'react';
import { $faq } from '../cards';
import { faq, faqs } from "../../config";

export default function () {
    const [open,setOpen] = useState(null);

    return <section id="faq">
        <div className="flex">
            <h3>Frequently Ask</h3>
            <h4>Question</h4>
            <p>
                We got answers to the questions that you might want to ask about getlinked Hackathon 1.0
            </p>
            <div className="questions">
                {faqs.map((item, id) => <$faq key={id} {...item} id={id} open={open == id} setOpen={setOpen} />)}
            </div>
        </div>
        <div className="flex">
            <img src={faq} alt="" className="faq-image" />
        </div>
    </section>
}