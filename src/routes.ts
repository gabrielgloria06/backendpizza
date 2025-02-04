import {Router} from 'express'
import multer from 'multer';
import { CreateUserController } from './controllers/Users/CreateUserController';
import { AuthUserController } from './controllers/Users/AuthUserController';
import { DetailUserController } from './controllers/Users/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './controllers/Categories/CreateCategoryController';
import { ListCategoriesController } from './controllers/Categories/ListCategoriesController';
import { CreateProductController } from './controllers/Products/CreateProductController';

import uploadConfig from './config/multer'
import { ListProductsController } from './controllers/Products/ListProductsController';
import { CreateOrderController } from './controllers/Orders/CreateOrderController';
import { CloseOrderController } from './controllers/Orders/CloseOrderController';
import { CreateItemController } from './controllers/Items/CreateItemController';
import { RemoveItemController } from './controllers/Items/RemoveitemController';
import { SendOrderController } from './controllers/Orders/SendOrderController';
import { ListOrdersController } from './controllers/Orders/ListOrdersController';
import { DetailOrderController } from './controllers/Orders/DetailOrderController';
import { FinishOrderController } from './controllers/Orders/FinishOrderController';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated,new DetailUserController().handle)


router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/categories', isAuthenticated, new ListCategoriesController().handle)

// router.post('/product', isAuthenticated, upload.single('file'),new CreateProductController().handle)

router.post('/product', isAuthenticated,new CreateProductController().handle)

router.get('/category/product', isAuthenticated,new ListProductsController().handle)

router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.delete('/order', isAuthenticated, new CloseOrderController().handle)

router.post('/order/add', isAuthenticated, new CreateItemController().handle)
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)
router.put('/order/send', isAuthenticated, new SendOrderController().handle)
router.get('/orders', isAuthenticated, new ListOrdersController().handle)

router.get('/order/detail', isAuthenticated, new DetailOrderController().handle)
router.put('/order/finish', isAuthenticated, new FinishOrderController().handle)

export {router};