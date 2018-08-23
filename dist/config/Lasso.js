"use strict";
/**
 * Define the lasso configurations
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
class Lasso {
    static init() {
        return {
            plugins: [
                'lasso-marko' // Allow Marko templates to be compiled and transported to the browser
            ],
            outputDir: path.join(__dirname, '../../public/static'),
            urlPrefix: '/public/static',
            bundlingEnabled: true,
            minify: true,
            fingerprintsEnabled: true,
            bundles: [
                {
                    name: 'jquery',
                    dependencies: [
                        'require: jquery'
                    ]
                },
                {
                    name: 'bootstrap',
                    dependencies: [
                        'require: bootstrap/dist/js/bootstrap.bundle.min.js'
                    ]
                }
            ]
        };
    }
}
exports.default = Lasso;
//# sourceMappingURL=Lasso.js.map