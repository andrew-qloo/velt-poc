export const ellipsisText = (text, maxLength = 100) =>
  typeof text === "string" && text.length > maxLength + 1
    ? `${text.substr(0, maxLength)}...`
    : text;

export const getHash = (input) => {
  let hash = 0;
  const len = input.length;
  for (var i = 0; i < len; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0; // to 32bit integer
  }
  return hash;
};

export default getHash;
