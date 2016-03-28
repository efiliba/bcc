import Express from 'express';
import * as ContactRequest from '../controllers/admin.controller';
const router = Express.Router({ mergeParams: true });

router.route('/saveContactRequest').post(ContactRequest.saveContactRequest);

export default router;