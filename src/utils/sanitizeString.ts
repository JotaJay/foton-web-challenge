export const sanitizeString = (string: string): string => {
  return string.replace(/<(.|\n)*?>/g, "");
};

export default sanitizeString;
