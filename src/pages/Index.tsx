import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

export default function Index() {
  const courses = [
    {
      id: 1,
      title: "Основы шитья для начинающих",
      description: "Освойте базовые навыки работы с тканью, иглой и швейной машиной",
      duration: "4 недели",
      lessons: 16,
      level: "Начальный",
      price: "4 990 ₽",
      image: "https://cdn.poehali.dev/projects/3435162b-8398-4340-805c-c77566eef789/files/dc168a62-e357-441b-8acd-bb884cbe7f39.jpg"
    },
    {
      id: 2,
      title: "Конструирование и моделирование одежды",
      description: "Научитесь создавать выкройки и шить одежду по собственным эскизам",
      duration: "8 недель",
      lessons: 24,
      level: "Продвинутый",
      price: "9 990 ₽",
      image: "https://cdn.poehali.dev/projects/3435162b-8398-4340-805c-c77566eef789/files/b178984a-7f18-46f6-a308-06c1644be64a.jpg"
    },
    {
      id: 3,
      title: "Пошив платьев и юбок",
      description: "От простых моделей до вечерних нарядов - шьём женственную одежду",
      duration: "6 недель",
      lessons: 20,
      level: "Средний",
      price: "7 490 ₽",
      image: "https://cdn.poehali.dev/projects/3435162b-8398-4340-805c-c77566eef789/files/7752f63f-a76f-4bfd-ac44-2e1230736622.jpg"
    }
  ];

  const features = [
    {
      icon: "Video",
      title: "Видеоуроки в HD",
      description: "Четкие видео с детальными объяснениями каждого шага"
    },
    {
      icon: "Clock",
      title: "Учитесь в своем темпе",
      description: "Доступ к материалам 24/7 без ограничений по времени"
    },
    {
      icon: "MessageCircle",
      title: "Поддержка преподавателя",
      description: "Ответы на вопросы в закрытом чате курса"
    }
  ];

  const programSteps = [
    { week: "Неделя 1-2", title: "Основы работы со швейной машиной", topics: ["Устройство швейной машины", "Базовые швы и строчки", "Работа с разными тканями"] },
    { week: "Неделя 3-4", title: "Простые проекты", topics: ["Пошив подушки и фартука", "Работа с выкройками", "Декоративные элементы"] },
    { week: "Неделя 5-6", title: "Первая одежда", topics: ["Простая юбка на резинке", "Майка или топ", "Снятие мерок"] },
    { week: "Неделя 7-8", title: "Итоговый проект", topics: ["Пошив платья", "Обработка изделия", "Финальная отделка"] }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Scissors" className="text-primary" size={28} />
            <span className="text-xl font-bold text-primary">Школа Шитья</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('courses')} className="text-sm font-medium hover:text-primary transition-colors">Курсы</button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О школе</button>
            <button onClick={() => scrollToSection('program')} className="text-sm font-medium hover:text-primary transition-colors">Программа</button>
          </nav>
          <Button className="shadow-lg">Начать обучение</Button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/20 to-muted/30 py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">Онлайн-обучение</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Научитесь шить с нуля за 2 месяца
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Превратите хобби в профессию. Видеокурсы от практикующего дизайнера одежды с поддержкой на каждом шаге
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg shadow-xl hover:shadow-2xl transition-all" onClick={() => scrollToSection('courses')}>
                Выбрать курс
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection('about')}>
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Icon name={feature.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-secondary/50 text-secondary-foreground">Наши курсы</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Выберите свой путь в шитье</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              От первых стежков до создания авторских коллекций
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="aspect-video overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{course.level}</Badge>
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="PlayCircle" size={16} />
                      <span>{course.lessons} уроков</span>
                    </div>
                  </div>
                  <Button className="w-full shadow-md">
                    Подробнее о курсе
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/20 text-primary">О школе</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Обучение у профессионала с 15-летним опытом</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Меня зовут Елена Исаева, и я создала эту школу, чтобы каждый мог научиться шить красивую и качественную одежду.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                За годы работы я помогла более 3000 студентов освоить искусство шитья - от базовых навыков до создания авторских коллекций.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">3000+</div>
                  <div className="text-sm text-muted-foreground">Выпускников</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">15</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных</div>
                </div>
              </div>
              <Button size="lg" variant="outline" className="shadow-md">
                <Icon name="Users" size={20} className="mr-2" />
                Присоединиться к сообществу
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/3435162b-8398-4340-805c-c77566eef789/files/7752f63f-a76f-4bfd-ac44-2e1230736622.jpg" 
                  alt="Преподаватель школы" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 bg-gradient-to-br from-secondary/10 to-muted/20">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary/20 text-primary">Программа обучения</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Что вы изучите на базовом курсе</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Пошаговая программа от простого к сложному
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {programSteps.map((step, index) => (
                <AccordionItem key={index} value={`step-${index}`} className="bg-card border-2 rounded-lg px-6 hover:border-primary/50 transition-colors">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">{step.week}</div>
                        <div className="text-lg font-semibold">{step.title}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-16 pb-6">
                    <ul className="space-y-2">
                      {step.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start gap-2 text-muted-foreground">
                          <Icon name="Check" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="shadow-xl text-lg">
              Начать обучение сейчас
              <Icon name="Sparkles" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container">
          <Card className="max-w-4xl mx-auto border-2 border-primary/20 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl mb-4">Готовы начать шить?</CardTitle>
              <CardDescription className="text-lg">
                Присоединяйтесь к тысячам учеников, которые уже освоили искусство шитья с нашей школой
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg shadow-lg">
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Посмотреть бесплатный урок
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="Mail" size={20} className="mr-2" />
                Задать вопрос
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-card border-t py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Scissors" className="text-primary" size={28} />
                <span className="text-xl font-bold text-primary">Школа Шитья</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Онлайн-обучение шитью с нуля для всех желающих
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Курсы</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Основы шитья</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Конструирование</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Пошив одежды</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О школе</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@sewing-school.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Школа Шитья. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}