import {Router}  from 'express';
import {getAll,  getOne, insertOne, updateOne, deleteOne} from '../Controllers/products.controller.js'; 

const router = Router(); 

router.get('/', getAll);
router.get('/:barcode', getOne);
router.post('/', insertOne);
router.post('/:barcode', updateOne);
router.get('/:barcode', deleteOne);
export default router; 