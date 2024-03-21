import express, { Router } from 'express';
import order_paymentRoute from './order_payment.route';
import order_itemRoute from './order_item.route';
import order_billRoute from './order_bill.route';
import product_sub_categoryRoute from './product_sub_category.route';
import product_typeRoute from './product_type.route';
import product_categoryRoute from './product_category.route';
import productRoute from './product.route';
import userRoute from './user.route';
import devRoute from './dev.route';
import status_changeRoute from './status_change.route';
import delete_dataRoute from './delete_data.route';
import fileRoute from './file.route';
import docsRoute from './docs.route';
import config from '../../config/config';

const router: Router = express.Router();

interface defaultRoutesObj {
  path: string;
  route: Router;
}
const defaultRoutes:defaultRoutesObj[] = [
  { path: '/order_payment', route: order_paymentRoute },
  { path: '/order_item', route: order_itemRoute },
  { path: '/order_bill', route: order_billRoute },
  { path: '/product_sub_category', route: product_sub_categoryRoute },
  { path: '/product_type', route: product_typeRoute },
  { path: '/product_category', route: product_categoryRoute },
  { path: '/product', route: productRoute },
  { path: '/user', route: userRoute },
  { path: '/dev', route: devRoute },
  { path: '/status-change', route: status_changeRoute },
  { path: '/delete-data', route: delete_dataRoute },
  { path: '/file', route: fileRoute },
];

// routes available only in development mode
const devRoutes = [
  { path: '/docs', route: docsRoute },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

export default router;


/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
