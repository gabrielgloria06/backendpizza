"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const CreateUserController_1 = require("./controllers/Users/CreateUserController");
const AuthUserController_1 = require("./controllers/Users/AuthUserController");
const DetailUserController_1 = require("./controllers/Users/DetailUserController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const CreateCategoryController_1 = require("./controllers/Categories/CreateCategoryController");
const ListCategoriesController_1 = require("./controllers/Categories/ListCategoriesController");
const CreateProductController_1 = require("./controllers/Products/CreateProductController");
const multer_2 = __importDefault(require("./config/multer"));
const ListProductsController_1 = require("./controllers/Products/ListProductsController");
const CreateOrderController_1 = require("./controllers/Orders/CreateOrderController");
const CloseOrderController_1 = require("./controllers/Orders/CloseOrderController");
const CreateItemController_1 = require("./controllers/Items/CreateItemController");
const RemoveitemController_1 = require("./controllers/Items/RemoveitemController");
const SendOrderController_1 = require("./controllers/Orders/SendOrderController");
const ListOrdersController_1 = require("./controllers/Orders/ListOrdersController");
const DetailOrderController_1 = require("./controllers/Orders/DetailOrderController");
const FinishOrderController_1 = require("./controllers/Orders/FinishOrderController");
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
router.post('/users', new CreateUserController_1.CreateUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/me', isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailUserController().handle);
router.post('/category', isAuthenticated_1.isAuthenticated, new CreateCategoryController_1.CreateCategoryController().handle);
router.get('/categories', isAuthenticated_1.isAuthenticated, new ListCategoriesController_1.ListCategoriesController().handle);
// router.post('/product', isAuthenticated, upload.single('file'),new CreateProductController().handle)
router.post('/product', isAuthenticated_1.isAuthenticated, new CreateProductController_1.CreateProductController().handle);
router.get('/category/product', isAuthenticated_1.isAuthenticated, new ListProductsController_1.ListProductsController().handle);
router.post('/order', isAuthenticated_1.isAuthenticated, new CreateOrderController_1.CreateOrderController().handle);
router.delete('/order', isAuthenticated_1.isAuthenticated, new CloseOrderController_1.CloseOrderController().handle);
router.post('/order/add', isAuthenticated_1.isAuthenticated, new CreateItemController_1.CreateItemController().handle);
router.delete('/order/remove', isAuthenticated_1.isAuthenticated, new RemoveitemController_1.RemoveItemController().handle);
router.put('/order/send', isAuthenticated_1.isAuthenticated, new SendOrderController_1.SendOrderController().handle);
router.get('/orders', isAuthenticated_1.isAuthenticated, new ListOrdersController_1.ListOrdersController().handle);
router.get('/order/detail', isAuthenticated_1.isAuthenticated, new DetailOrderController_1.DetailOrderController().handle);
router.put('/order/finish', isAuthenticated_1.isAuthenticated, new FinishOrderController_1.FinishOrderController().handle);
