/**
 * @author murukal
 *
 * is empty
 */
export const isEmpty = (value?: Object | null) => {
  if (!value) return true;
  return Object.keys(value).length === 0;
};
