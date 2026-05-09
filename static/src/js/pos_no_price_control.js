/** @odoo-module **/

import { registry } from "@web/core/registry";

const serviceRegistry = registry.category("services");
const originalPosService = serviceRegistry.get("pos");

serviceRegistry.add(
    "pos",
    {
        ...originalPosService,
        async start(env, deps) {
            const pos = await originalPosService.start(env, deps);

            // Bloqueo permanente: ningún cajero/manager podrá cambiar precios manualmente.
            pos.cashierHasPriceControlRights = () => false;

            // Refuerzo para flujos que consultan este hook en Odoo 19.
            pos.restrictLinePriceChange = () => true;

            return pos;
        },
    },
    { force: true }
);
