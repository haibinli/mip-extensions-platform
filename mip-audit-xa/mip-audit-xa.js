/**
 * @file mip-audit-xa 组件
 * @author
 */

define(function (require) {

    var customElement = require('customElement').create();

    /**
     * 构造元素，只会运行一次
     */
    customElement.prototype.build = function () {
        // TODO
        this.element.innerHTML = 'hello test auto online 1';
    };

    return customElement;
});
