import dateFormat from 'dateformat';

export default function formatDate(time: string, dateOnly = false) {
  if (dateOnly) return dateFormat(time, 'd mmmm, yyyy');
  return dateFormat(time, 'd mmmm, yyyy, h:MM:ss TT');
}
