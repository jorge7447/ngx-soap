import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { createSoapClient } from "../libts/soap";
var SOAPService = (function () {
    function SOAPService() {
    }
    SOAPService.prototype.createClient = function (http, url, options) {
        if (options === void 0) { options = {}; }
        return createSoapClient(url, http, options);
    };
    return SOAPService;
}());
export { SOAPService };
SOAPService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SOAPService.ctorParameters = function () { return []; };
//# sourceMappingURL=soap.service.js.map