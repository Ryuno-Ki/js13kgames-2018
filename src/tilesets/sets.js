const intersection = function (setA, setB) {
    const _intersection = new Set();
    for (let element of setB) {
        if (setA.has(element)) {
            _intersection.add(element);
        }
    }
    return _intersection;
}

export default intersection
