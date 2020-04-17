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
