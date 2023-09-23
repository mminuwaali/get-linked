import './style.sass';
import { } from 'react';
import { rewardCup, rewardMedal } from '../../config';

export default function () {
    return <section id="reward">
        <div className="text">
            <h3>Prizes and </h3>
            <h4>Rewards</h4>
            <p>
                Highlight of the prizes or rewards for winners and for participants.
            </p>
        </div>
        <div className="flex">
            <img src={rewardCup} alt="" className='reward-cup' />
        </div>
        <div className="flex">
            <img src={rewardMedal} alt="" className="reward-medal" />
        </div>
    </section>
}