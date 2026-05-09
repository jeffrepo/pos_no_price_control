/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { PosStore } from "@point_of_sale/app/store/pos_store";

patch(PosStore.prototype, {
    /**
     * Bloqueo permanente del control de precios en POS.
     *
     * El core de Odoo permite cambiar precios cuando:
     *   - config.restrict_price_control está desactivado, o
     *   - el cajero tiene rol manager.
     *
     * Al devolver siempre false, ningún cajero podrá cambiar precios
     * desde la interfaz estándar del Punto de Venta.
     */
    cashierHasPriceControlRights() {
        return false;
    },

    /**
     * Refuerzo para Odoo 19: otros flujos pueden consultar este hook.
     * Mantenerlo en true indica que el cambio de precio de línea está restringido.
     */
    restrictLinePriceChange() {
        return true;
    },
});
