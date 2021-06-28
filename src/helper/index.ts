const formatDate = (dateCreated: string) => {
  const date = new Date(dateCreated)
  let hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours ? hours : 12
  const strminutes = minutes < 10 ? '0' + minutes : minutes
  const strTime = `${hours}:${strminutes} ${ampm}`
  return strTime
}

export { formatDate }
