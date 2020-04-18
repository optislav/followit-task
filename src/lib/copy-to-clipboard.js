/**
 * Call to copy text to user's clipboard
 *
 * @param {string} text - text to copy
 */
export const copyToClipboard = text => {
  const tempArea = document.createElement("textarea");
  document.body.appendChild(tempArea);
  tempArea.value = text;
  tempArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempArea);
};
