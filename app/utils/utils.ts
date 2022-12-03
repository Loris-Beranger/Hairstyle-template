export function getAllDaysInMonth(now: Date) {
  const date = new Date(now.getFullYear(), now.getMonth(), 1)

  const dates = []

  while (date.getMonth() === now.getMonth()) {
    dates.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }

  return dates
}
