{
    "name": "POS No Price Control",
    "version": "19.0.1.0.0",
    "category": "Point of Sale",
    "summary": "Bloquea permanentemente el cambio manual de precios en Punto de Venta",
    "author": "Silva tehcnologies",
    "license": "LGPL-3",
    "depends": ["point_of_sale"],
    "assets": {
        "point_of_sale._assets_pos": [
            "pos_no_price_control/static/src/js/pos_no_price_control.js",
        ],
    },
    "installable": True,
    "application": False,
}
