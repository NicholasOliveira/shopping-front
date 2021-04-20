export const shortName = (name: string, limit: number) => {
  const result = name.substr(0, limit);
  return `${result}...`;
};
