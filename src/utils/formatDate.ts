import dateFormat from 'dateformat';

export default function formatDate(
  time: string,
  {dateOnly = false, yearOnly = false} = {},
) {
  if (dateOnly) return dateFormat(time, 'd mmmm, yyyy');
  if (yearOnly) return dateFormat(time, 'yyyy');
  return dateFormat(time, 'd mmmm, yyyy, h:MM:ss TT');
}
