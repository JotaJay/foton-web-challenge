const truncateString = (string: string) => {
  return `${string.slice(0, 50)} ...`;
};

export default truncateString;
