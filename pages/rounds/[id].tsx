import GranteeCard from '@/components/info/granteeCard'
import OverallStats from '@/components/info/overallStats'
import { useRouter } from 'next/router'
import { CurrencyEth } from 'phosphor-react'
import React, { useEffect, useState } from 'react'

const Round = () => {
    const router = useRouter()
    const { id } = router.query
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(true);
    }, []);
    return (
        <div className="text-center">
            <h1 className="mt-24 mb-8 text-4xl headline text-success">{id} Round</h1>
            <OverallStats />
            {show && (<div className="flex gap-4 flex-wrap mx-auto max-w-screen-xl my-24 justify-content-between">
                {Array.from({ length: 24 }, (_, idx) => <GranteeCard key={idx} />)}
            </div>)}

        </div>
    )
}

export default Round