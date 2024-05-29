"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var card_discount_route_1 = __importDefault(require("./card_discount.route"));
var bank_route_1 = __importDefault(require("./bank.route"));
var global_discount_route_1 = __importDefault(require("./global_discount.route"));
var order_payment_route_1 = __importDefault(require("./order_payment.route"));
var order_item_route_1 = __importDefault(require("./order_item.route"));
var order_bill_route_1 = __importDefault(require("./order_bill.route"));
var product_sub_category_route_1 = __importDefault(require("./product_sub_category.route"));
var product_type_route_1 = __importDefault(require("./product_type.route"));
var product_category_route_1 = __importDefault(require("./product_category.route"));
var product_route_1 = __importDefault(require("./product.route"));
var user_route_1 = __importDefault(require("./user.route"));
var dev_route_1 = __importDefault(require("./dev.route"));
var status_change_route_1 = __importDefault(require("./status_change.route"));
var delete_data_route_1 = __importDefault(require("./delete_data.route"));
var file_route_1 = __importDefault(require("./file.route"));
var docs_route_1 = __importDefault(require("./docs.route"));
var config_1 = __importDefault(require("../../config/config"));
var router = express_1.default.Router();
var defaultRoutes = [
    { path: '/card_discount', route: card_discount_route_1.default },
    { path: '/bank', route: bank_route_1.default },
    { path: '/global_discount', route: global_discount_route_1.default },
    { path: '/order_payment', route: order_payment_route_1.default },
    { path: '/order_item', route: order_item_route_1.default },
    { path: '/order_bill', route: order_bill_route_1.default },
    { path: '/product_sub_category', route: product_sub_category_route_1.default },
    { path: '/product_type', route: product_type_route_1.default },
    { path: '/product_category', route: product_category_route_1.default },
    { path: '/product', route: product_route_1.default },
    { path: '/user', route: user_route_1.default },
    { path: '/dev', route: dev_route_1.default },
    { path: '/status-change', route: status_change_route_1.default },
    { path: '/delete-data', route: delete_data_route_1.default },
    { path: '/file', route: file_route_1.default },
];
// routes available only in development mode
var devRoutes = [
    { path: '/docs', route: docs_route_1.default },
];
defaultRoutes.forEach(function (route) {
    router.use(route.path, route.route);
});
if (config_1.default.env === 'development') {
    devRoutes.forEach(function (route) {
        router.use(route.path, route.route);
    });
}
exports.default = router;
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
//# sourceMappingURL=index.js.map