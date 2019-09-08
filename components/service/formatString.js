export default function formatString(unparsedName) {
  return [...unparsedName].reduce((accumulator, value, i) => (
      accumulator + (value === value.toUpperCase() ? " " : "") + value
    ), ""
  ).replace(/-/g, " ");
}