const formatDate = (date: Date): string => {
  console.log(date);
  const newDate = new Date(date);
  return Intl.DateTimeFormat('pt-BR').format(newDate);
};

export default formatDate;
