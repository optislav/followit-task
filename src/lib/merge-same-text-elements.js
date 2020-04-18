/**
 * Merge elements with the same colors and fontsize to one element
 * append text content to the end of last same element
 *
 * @param {array} elements - text elements with text content and styles
 */
export const mergeSameTextElements = elements => {
  const mergedTextElements = [];
  let prevTextElement = {};
  const textElements = elements.map(el => ({ ...el }));
  textElements.forEach(textElement => {
    if (
      textElement.backgroundColor === prevTextElement.backgroundColor &&
      textElement.fontSize === prevTextElement.fontSize &&
      textElement.color === prevTextElement.color
    ) {
      const lastMerged = mergedTextElements[mergedTextElements.length - 1];
      lastMerged.text += ` ${textElement.text}`;
    } else {
      mergedTextElements.push(textElement);
    }
    prevTextElement = textElement;
  });
  return mergedTextElements;
};
