const FILTER_CHANGE = "FILTER_CHANGE"

export const changeFilterCategory = (categoryFilter) => {
    return {
        type: FILTER_CHANGE,
        payload: categoryFilter
    }
}
