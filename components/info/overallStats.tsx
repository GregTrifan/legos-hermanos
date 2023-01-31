import { CircleWavyCheck, CurrencyCircleDollar, CurrencyEth, Users } from 'phosphor-react'
import React from 'react'

const OverallStats = () => {
    return (
        <div className="sm:flex justify-evenly lg:justify-center">

            <div className="stats shadow-lg  bg-base-100 stats-vertical xl:stats-horizontal m-2">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <CurrencyCircleDollar size={32} />
                    </div>
                    <div className="stat-title">Amount Contributed</div>
                    <div className="stat-value text-primary">2.6M</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <CurrencyEth size={32} />
                    </div>
                    <div className="stat-title">Amount Contributed</div>
                    <div className="stat-value text-secondary">1066</div>
                </div>
            </div>
            <div className="stats bg-base-100 stats-vertical xl:stats-horizontal m-2">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <Users size={32} />
                    </div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-title">Total Donors</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <CircleWavyCheck size={32} />
                    </div>
                    <div className="stat-value">12K</div>
                    <div className="stat-title">Unique donors</div>
                </div>
            </div>
        </div>
    )
}

export default OverallStats