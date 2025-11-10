
import {
    confirmOrder,
    createOrder,
    getOrderById,
    getOrders,
    updateOrderStatus
} from '../controllers/order/order.js';
import { verifyToken } from '../middleware/auth.js';

export const orderRoutes = async (fastify, options) => {
    fastify.addHook('preHandler', async (request, reply) => {
        const isAuntenticated = await verifyToken(request, reply);
        if (!isAuntenticated) {
            reply.code(401).send({ message: 'Unauthorized' });
        }
    });

    fastify.post('/orders', createOrder);
    fastify.get('/orders', getOrders);
    fastify.patch('/orders/:orderId/status', updateOrderStatus);
    fastify.put('/orders/:orderId/confirm', confirmOrder);
    fastify.post('/orders/:orderId', getOrderById);
}