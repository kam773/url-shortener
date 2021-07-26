export const isValidUrl = (url: string) =>
  url !== "" && /^(ftp|http|https):\/\/[^ "]+$/.test(url);
