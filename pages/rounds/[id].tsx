import OverallStats from '@/components/info/overallStats'
import { useRouter } from 'next/router'
import React from 'react'

const Round = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <div className="text-center">
            <h1 className="mt-24 mb-8 text-4xl headline text-success">{id} Round</h1>
            <OverallStats />
        </div>
    )
}

export default Round