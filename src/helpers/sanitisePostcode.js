export function sanitisePostcode(postcode) {
  return postcode.trim().split(" ").join("").toLowerCase();
}
