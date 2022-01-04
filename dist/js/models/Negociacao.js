var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _data, _valor, _quantidade;
export class Negociacao {
    constructor(data, valor, quantidade) {
        _data.set(this, void 0);
        _valor.set(this, void 0);
        _quantidade.set(this, void 0);
        __classPrivateFieldSet(this, _data, data);
        __classPrivateFieldSet(this, _valor, valor);
        __classPrivateFieldSet(this, _quantidade, quantidade);
    }
    get data() {
        return __classPrivateFieldGet(this, _data);
    }
    get valor() {
        return __classPrivateFieldGet(this, _valor);
    }
    get quantidade() {
        return __classPrivateFieldGet(this, _quantidade);
    }
    get volume() {
        return __classPrivateFieldGet(this, _quantidade) * __classPrivateFieldGet(this, _valor);
    }
}
_data = new WeakMap(), _valor = new WeakMap(), _quantidade = new WeakMap();
