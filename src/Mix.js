class Mix {
    static _primary = null;

    static get primary() {
        return Mix._primary || (Mix._primary = new Mix());
    }

    boot() {
        return this;
    }
}

module.exports = Mix;
