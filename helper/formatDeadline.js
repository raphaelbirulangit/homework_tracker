function formatDeadline(deadline) {
  let year = deadline.getFullYear();
  let month = deadline.getMonth();
  let date = deadline.getDate();
  return `${year}-${month}-${date}`;
}

module.exports = formatDeadline;