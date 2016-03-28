import Express from 'express';
import * as CarerController from '../controllers/carer.controller';
const router = Express.Router({ mergeParams: true });

router.route('/getCarers').get(CarerController.getCarers);
router.route('/getCarer').get(CarerController.getCarer);
router.route('/saveCarer').post(CarerController.saveCarer);

router.post('/avatar', CarerController.saveAvatar);

export default router;

