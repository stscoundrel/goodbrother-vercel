export const authenticate = (secret: string): boolean => {
  const { CLIENT_SECRET } = process.env;
  return CLIENT_SECRET === secret;
};

export default {
  authenticate,
};
