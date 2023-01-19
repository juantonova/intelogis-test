function defineMiddle(start, end) {
    return ((Number(start) + Number(end)) / 2).toString()
}

function defineCenterCoordinates(start, end) {
    const lat = defineMiddle(start[0], end[0])
    const lng = defineMiddle(start[1], end[1])
    return [lat, lng]
}
export default defineCenterCoordinates