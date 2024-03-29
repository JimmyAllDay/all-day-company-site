export default function limitWords(inputString, length) {
  const words = inputString.split(/\s+/);

  if (words.length > length) {
    return words.slice(0, length).join(' ') + '...'; // Add an ellipsis to indicate truncation
  } else {
    return inputString; // No need to truncate
  }
}

export function checkPexelsString(inputString) {
  return (
    inputString && inputString.startsWith('https://images.pexels.com/photos')
  );
}
