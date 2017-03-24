/**
 * This is my data component
 * @class Data
 */
var Data = function() {
    this._info = {};
};


/**
 * Write data
 *
 * **Example Call:**
 *
 * ```
 * Data.write('foo', 'bar');
 * ```
 *
 * @param  {String} id key
 * @param  {String} val value
 */
Data.prototype.write = function(id, val) {
    if (id && val) {
        this._info[id] = val;
    }
};

/**
 * Read data
 *
 * **Example Call:**
 *
 * ```
 * Data.read('foo');
 * // -> bar
 * ```
 *
 * @param  {String} id key
 * @return String value
 */
Data.prototype.read = function(id) {
    return this._info[id] || null;
};

/**
 * Delete data
 *
 * **Example Call:**
 *
 * ```
 * Data.delete('foo');
 * ```
 *
 * @param  {String} id key
 */
Data.prototype.delete = function(id) {
    if (this._info[id] === null || this._info[id] === undefined) { return; }
    this._info[id] = null;
    try {
        delete this._info[id];
    } catch(err) {
        // do nothing
    }
};


module.exports = Data;
