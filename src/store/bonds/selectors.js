export function getBondData(state) {
  if (!state || !state.bonds) {
    return [];
  }

  return state.bonds.data || [];
}
