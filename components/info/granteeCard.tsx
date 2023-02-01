import { CurrencyEth } from 'phosphor-react'
import React, { useEffect, useState } from 'react'

const availableColors = ["red", "emerald", "orange", "purple", "lime", "yellow", "amber", "blue", "violet", "indigo"];
const GranteeCard = () => {
    const [name, setName] = useState<string>();
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("/api/names");
                if (!response.ok) {
                    setName("Y")
                }
                const { name } = await response.json();
                setName(name)
                /* setName(names[Math.floor(Math.random() * names.length)]) */
            } catch (error) {
                setName("X")
            }
        })()
    }, [])

    const rColor = availableColors[Math.floor((Math.random() * availableColors.length))];
    const rRisk = Math.floor(Math.random() * 100);
    const style = { "--value": rRisk } as React.CSSProperties
    return (
        <div className="m-3 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className={`fill-${rColor}-500/20`} fill-opacity="1" d="M0,32L0,32L180,32L180,256L360,256L360,128L540,128L540,256L720,256L720,96L900,96L900,192L1080,192L1080,128L1260,128L1260,0L1440,0L1440,320L1260,320L1260,320L1080,320L1080,320L900,320L900,320L720,320L720,320L540,320L540,320L360,320L360,320L180,320L180,320L0,320L0,320Z"></path></svg>
            <div className={`card w-80 mx-auto bg-${rColor}-500/20 pt-0 rounded-none shadow-xl`}>
                <div className="card-body">
                    <h2 className="card-title text-3xl mx-auto">Project {name}</h2>
                    <div className={`radial-progress my-4 mx-auto ${rRisk <= 25 ? "text-success" : rRisk <= 60 ? "text-warning" : "text-error"}`}
                        style={style}>
                        {rRisk}%
                        <h3>RISK</h3>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="stat-value flex">
                            <span>{Math.floor(Math.random() * 1353)}</span>
                            <CurrencyEth size={24} className="my-auto ml-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default GranteeCard