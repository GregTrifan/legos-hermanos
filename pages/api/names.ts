import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
            const response = await fetch("https://www.randomlists.com/data/names-surnames.json");
            if (!response.ok) {
                res.status(200).json({ name: 'Y' })
            }
        const {data} = await response.json();
        return res.status(200).json({ name: data[Math.floor(Math.random() * data.length)] })
        } catch (error) {
            res.status(200).json({ name: 'X' })
        }
}