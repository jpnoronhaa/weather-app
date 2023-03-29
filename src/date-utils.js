function dateBuilder(date) {
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  const days = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado',
  ];

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const dayOfTheMonth = date.getDate();
  const year = date.getFullYear();

  return `${day}, ${dayOfTheMonth} ${month} ${year}`;
}

export default dateBuilder;
