import { NextApiRequest, NextApiResponse } from 'next';
import DB from '@database';

const allAvos = async(req: NextApiRequest, res: NextApiResponse) => {
    const db = new DB();
    const { id } = req.query;
    const avo = await db.getById(id as string);
    res.status(200).json({data: avo});
}

export default allAvos;