import { NextApiRequest, NextApiResponse } from 'next';
import DB from '@database';

const avoById = async(req: NextApiRequest, res: NextApiResponse) => {
    const db = new DB();
    const { id } = req.query;
    const avo = await db.getById(id as string);
    res.status(200).json(avo);
}

export default avoById;