'use strict';

const Controller = require('egg').Controller;

class OrdersController extends Controller {
    async orders() {
        const { ctx } = this
        const data = this.ctx.request.body
        if (!data) {
            this.error('缺少重要参数')
            return
        } else {
            await this.ctx.model.Orders.find()
            ctx.body = {
                code: 200,
                msg: '获取订单成功',
                data: {
                    "total": 1,
                    "pagenum": "1",
                    "goods": [{
                        "order_id": 47,
                        "user_id": 133,
                        "order_number": "itcast-59e7502d7993d",
                        "order_price": 322,
                        "order_pay": "1",
                        "is_send": "是",
                        "trade_no": "",
                        "order_fapiao_title": "个人",
                        "order_fapiao_company": "",
                        "order_fapiao_content": "办公用品",
                        "consignee_addr": "a:7:{s:6:\"cgn_id\";i:1;s:7:\"user_id\";i:133;s:8:\"cgn_name\";s:9:\"王二柱\";s:11:\"cgn_address\";s:51:\"北京市海淀区苏州街长远天地大厦305室\";s:7:\"cgn_tel\";s:11:\"13566771298\";s:8:\"cgn_code\";s:6:\"306810\";s:11:\"delete_time\";N;}",
                        "pay_status": "1",
                        "create_time": 1508331565,
                        "update_time": 1508331565
                    }]
                },
                "meta": {
                    "msg": "获取成功",
                    "status": 200
                }
            }
        }
    }
}

module.exports = OrdersController;