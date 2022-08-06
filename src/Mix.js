class Mix {

    static _init = null;

    static get init() {
        return Mix._init || (Mix._init = new Mix());
    }
}

module.exports = Mix;
