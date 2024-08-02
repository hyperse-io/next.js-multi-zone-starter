export const ensureSlash = (
  str: string,
  options: { slashEndfix?: boolean; slashPrefix?: boolean } = {
    slashEndfix: false,
  }
): string => {
  str = str.replace(/\/$/, '');
  if (typeof options.slashPrefix !== 'undefined') {
    str = str.replace(/^\//, '');
  }
  str = options.slashEndfix ? str + '/' : str;
  str = options.slashPrefix ? '/' + str : str;
  return str;
};
