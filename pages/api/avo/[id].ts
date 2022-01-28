import { NextApiRequest, NextApiResponse } from 'next';
import DB from '@database';
import enablePublicAccess from '@cors';

const avoById = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		await enablePublicAccess(req, res);
		const db = new DB();
		const { id } = req.query;
		const avo = await db.getById(id as string);
		res.status(200).json(avo);
	} catch (e) {
		console.error(e);
		res.status(500).json({ length: 0, data: [], error: 'Something went wrong' });
	}
};

export default avoById;
