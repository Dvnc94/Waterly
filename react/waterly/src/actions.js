export const actionTypes = {
    SET_GALLONS_USED: "SET_GALLONS_USED",
}

export function setGallons(payload) {
    return { type: actionTypes.SET_GALLONS_USED, payload }
  };