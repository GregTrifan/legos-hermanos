import { CircleWavyCheck, CurrencyCircleDollar, Users } from 'phosphor-react'
import React from 'react'

const OverallStats = () => {
    return (
        <div className="stats shadow-lg shadow-black/20 bg-base-100">

            <div className="stat">
                <div className="stat-figure text-primary">
                    <Users size={32} />
                </div>
                <div className="stat-value text-primary">25.6K</div>
                <div className="stat-title">Total Donors</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <CurrencyCircleDollar size={32} />
                </div>
                <div className="stat-title">Amount Contributed</div>
                <div className="stat-value text-secondary">2.6M</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <CircleWavyCheck size={32} />
                </div>
                <div className="stat-value">12K</div>
                <div className="stat-title">Unique donors</div>
            </div>

        </div>
    )
}

export default OverallStats