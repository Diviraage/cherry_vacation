export interface TimelineItem {
  id: string;
  time: string;
  title: string;
  location?: string;
  description?: string;
  isBreak?: boolean;
}

export const timeline: TimelineItem[] = [
  { id: 't1', time: '9:30 – 10:00', title: 'Теплі зустрічі, фото на згадку та реєстрація', location: 'Атріум ліцею' },
  { id: 't2', time: '10:00 – 10:30', title: 'Урочисте відкриття', location: 'Атріум ліцею' },
  { id: 't3', time: '10:30 – 11:40', title: 'Майстерки І лінійки «Тут народжуються ідеї»', location: 'Кабінети' },
  { id: 't4', time: '12:00 – 13:00', title: 'Педагогічна премія НМТ «Навчати можу так»', location: 'Атріум ліцею' },
  { id: 't5', time: '13:00 – 14:00', title: 'Обід', isBreak: true, location: 'Їдальня' },
  { id: 't6', time: '14:00 – 15:10', title: 'Майстерки ІІ лінійки «Черешневі історії»', location: 'Кабінети' },
  { id: 't7', time: '15:10 – 15:50', title: 'Відкрита сцена «ЧерешневіМи – час сяяти»', location: 'Атріум ліцею' },
  { id: 't8', time: '16:00 – 17:00', title: 'Поетичний перформанс «Сила жінки»', location: 'Актова зала початкової школи' },
  { id: 't9', time: '17:00 – 17:30', title: 'Святковий фуршет «Післямова з черешнями»', location: 'Фойє початкової школи' },
];

export interface WorkshopItem {
  id: string;
  session: 1 | 2;
  title: string;
  expert: string;
  assistant?: string;
  room?: string;
  shelter?: string;
  category?: string;
}

export const workshops: WorkshopItem[] = [
  // Session 1
  {
    id: 'w1-1', session: 1, category: 'Наука',
    title: '«Хвиля»: фізика в звуках нашої ідентичності',
    expert: 'Тетяна Борецька', assistant: 'Віолета Демідова', room: '114', shelter: '011'
  },
  {
    id: 'w1-2', session: 1, category: 'Наука',
    title: '«Медичний детектив: діяльнісний підхід в природничих науках»',
    expert: 'Ольга Тимчишин', assistant: 'Юлія Роман, Світлана Пилипчук', room: '113', shelter: '041а'
  },
  {
    id: 'w1-3', session: 1, category: 'Гейміфікація',
    title: '«Культурний код 2.0: тест-драйв гри «Збери генія» для сучасних уроків»',
    expert: 'Юлія Павленко', assistant: 'Ганна Гунько', room: '319', shelter: '033'
  },
  {
    id: 'w1-4', session: 1, category: 'Партнерство',
    title: '«Розмова, яка змінює: діалог школи та батьків як дієвий інструмент партнерства»',
    expert: 'Катерина Гученко', assistant: 'Діана Руда, Алла Березовська', room: '301', shelter: '023'
  },
  {
    id: 'w1-5', session: 1, category: 'Методика',
    title: '«Архітектура навчання в сучасній школі»',
    expert: 'Світлана Бондар, Олеся Терешина, Тетяна Школенко', room: '016', shelter: '016'
  },
  {
    id: 'w1-6', session: 1, category: 'Спільнота',
    title: '«СпільноТа Я: події, які "зшивають" школу»',
    expert: 'Валентина Мартиненко', assistant: 'Вікторія Мусієнко, Олександра Моренчук, Олена Баталова', room: '216', shelter: 'бібліотека'
  },
  {
    id: 'w1-7', session: 1, category: 'STEM',
    title: '«Від "чому?" до "я знаю!": сучасні STEM-практики в початковій школі»',
    expert: 'Лілія Захарчук, Ірина Потапенко, Олена Чавяк, Катерина Лісна, Дар\'я Панченко', room: '217', shelter: '021'
  },
  {
    id: 'w1-8', session: 1, category: 'Оцінювання',
    title: '«Принципи оцінювання в сучасній українській школі»',
    expert: 'Віталій Кізюрін', room: '212', shelter: '032'
  },
  {
    id: 'w1-9', session: 1, category: 'Гейміфікація',
    title: '«Гра як лабораторія пізнання: Гейміфікація та освітні ігри на уроках природничих наук»',
    expert: 'Микола Кирилюк', room: '219', shelter: '038'
  },
  {
    id: 'w1-10', session: 1, category: 'Мистецтво',
    title: '«Коли мова стає образом: китайська півонія»',
    expert: 'Марина Ряжко, Ірина Петрик', room: '017', shelter: '017'
  },
  {
    id: 'w1-11', session: 1, category: 'Активності',
    title: '«Табірний експрес: банк активностей, періодів та рефлексій для денних і виїзних змін»',
    expert: 'Олег Булаарас', room: '022', shelter: '022'
  },
  {
    id: 'w1-12', session: 1, category: 'Кар\'єра',
    title: '«Архітектори майбутнього: Як збудувати кар\'єру з підручних матеріалів»',
    expert: 'Владислав Лопуга', assistant: 'Алла Орел', room: '315', shelter: '024'
  },

  // Session 2
  {
    id: 'w2-1', session: 2, category: 'Мистецтво',
    title: 'Artist Talk: Катерина Білетіна. Український портрет як образ ідентичності',
    expert: 'Георгій Хубян, Сергій Літвінов', room: '"Острівець" другого поверху', shelter: 'бібліотека'
  },
  {
    id: 'w2-2', session: 2, category: 'Музика',
    title: 'Співаємо з любов\'ю',
    expert: 'Любов Татарова, Дмитро Шепіль', room: '123', shelter: 'вокальна студія'
  },
  {
    id: 'w2-3', session: 2, category: 'Арт-терапія',
    title: 'Арт-тренінг через глину та метафоричні образи «Ліпити себе заново»',
    expert: 'Юлія Панчук', assistant: 'Діана Руда', room: '311', shelter: '033'
  },
  {
    id: 'w2-4', session: 2, category: 'Читання',
    title: 'Книжковий клуб "Читальня на вакаціях"',
    expert: 'Леся Костюченко, Алла Мейта', room: '022', shelter: '022'
  },
  {
    id: 'w2-5', session: 2, category: 'Арт-терапія',
    title: '«Внутрішній рельєф: майстерка самопізнання через творчість»',
    expert: 'Марія Іскамова', assistant: 'Марина Корчак, Інна Лизун', room: '017', shelter: '017'
  },
  {
    id: 'w2-6', session: 2, category: 'Спорт',
    title: '«Ягідний виклик»',
    expert: 'Микита Тоцький', assistant: 'Віктор Поліщук, Ірина Чорнобай', room: '201', shelter: 'спортзал'
  },
  {
    id: 'w2-7', session: 2, category: 'Стиль',
    title: 'Cherries wear Prada',
    expert: 'Нінель Бардакова', assistant: 'Юліана Коваленко, Надія Захарченко', room: '110', shelter: 'роздягальня для дівчат 012'
  },
  {
    id: 'w2-8', session: 2, category: 'Кулінарія',
    title: 'Кулінарний майстер клас «Вишнева хатинка»',
    expert: 'Вікторія Петренко', room: '109', shelter: '038'
  },
  {
    id: 'w2-9', session: 2, category: 'IT',
    title: 'NotebookLM: ШІ який не вигадує, а допомагає вчителю',
    expert: 'Дар\'я Разгуляєва', assistant: 'Катерина Лісна, Тетяна Антоненко, Богдан Хрієнко', room: '218', shelter: '024'
  },
  {
    id: 'w2-10', session: 2, category: 'Розваги',
    title: 'Вчительське Disco',
    expert: 'Анастасія Амосова, Ірина Скабенок', room: 'Хореографічна зала', shelter: 'хаб'
  }
];
