import { CircleWavyCheck, CurrencyCircleDollar, CurrencyEth, Users } from 'phosphor-react'
import React from 'react'

const OverallStats = () => {
    const rAmount = Math.floor(Math.random() * 34521);
    const rUsdAmount = Math.floor(Math.random() * 23.5);
    const rDonors = Math.floor(Math.random() * 46.9)
    const rUniqueDonors = Math.floor(Math.random() * 12.7)
    return (
        <div className="sm:flex justify-evenly lg:justify-center mx-auto" style={{ maxWidth: "90rem" }}>

            <div className="stats shadow-lg  bg-base-100 stats-vertical xl:stats-horizontal m-2 w-10/12 max-w-96">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <CurrencyCircleDollar size={32} />
                    </div>
                    <div className="stat-title">Amount Contributed</div>
                    <div className="stat-value text-primary">{rUsdAmount}M</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <CurrencyEth size={32} />
                    </div>
                    <div className="stat-title">Amount Contributed</div>
                    <div className="stat-value text-secondary">{rAmount}</div>
                </div>
            </div>
            <div className="stats shadow-lg bg-base-100 stats-vertical xl:stats-horizontal m-2 w-10/12 max-w-96">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <Users size={32} />
                    </div>
                    <div className="stat-value text-primary">{rDonors}K</div>
                    <div className="stat-title">Total Donors</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <CircleWavyCheck size={32} />
                    </div>
                    <div className="stat-value">{rUniqueDonors}K</div>
                    <div className="stat-title">Unique donors</div>
                </div>
            </div>
        </div>
    )
}

export default OverallStats