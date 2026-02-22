const dayPhrase = {
  morning: [
    'Доброе утро, начнём с хорошего трека',
    'Утро звучит лучше с музыкой',
    'Самое время включить что-то бодрое',
    'Пусть день начнётся с ритма',
    'Немного энергии к утреннему кофе',
    'Включаем настроение на максимум',
  ],
  day: [
    'Отличное время для фонового саунда',
    'Добавим немного ритма в рабочий день',
    'Что сегодня играет у вас в наушниках',
    'Плейлист для продуктивности',
    'Днём музыка звучит особенно хорошо',
    'Поймаем темп',
  ],
  evening: [
    'Вечер создан для атмосферных треков',
    'Самое время расслабиться',
    'Пусть играет что-то любимое',
    'Добавим немного вайба',
    'Музыка для плавного завершения дня',
    'Вечерний плейлист готов',
  ],
  night: [
    'Ночной режим включён',
    'Тише, но глубже',
    'Музыка, которая звучит лучше ночью',
    'Время для атмосферных треков',
    'Ночной саундтрек',
    'Пусть играет что-то спокойное',
  ],
}

type DayPhrase = keyof typeof dayPhrase

function getPhraseByHour(hour: number): DayPhrase {
  if (hour >= 6 && hour < 12) return 'morning'
  if (hour >= 12 && hour < 18) return 'day'
  if (hour >= 18 && hour < 24) return 'evening'
  return 'night'
}

export function getDayPhrase(): string {
  const now = new Date()
  const phase = getPhraseByHour(now.getHours())
  const phrases = dayPhrase[phase]

  return phrases[Math.floor(Math.random() * phrases.length)]
}
