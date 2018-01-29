/**
 * null2undefined
 * @param {*} [val]
 */
function null2undefined(val) {
    function convert(value, hasParentAndParentIsArray = false) {
        if (value instanceof Object) {
            hasParentAndParentIsArray = Array.isArray(value);
            const clone = hasParentAndParentIsArray ? [...value] : { ...value };
            for (let property in clone) {
                clone[property] = convert(clone[property], hasParentAndParentIsArray);
            }
            hasParentAndParentIsArray = false;
            return clone;
        }
        if (value === null && !hasParentAndParentIsArray) {
            return undefined;
        }
        return value;
    }
    return convert(val);
}

export default null2undefined;
