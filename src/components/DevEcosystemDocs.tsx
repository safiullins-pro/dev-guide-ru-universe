import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Chart.js registration
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Import images
import GrokInterface from '../assets/grok-interface.jpg';
import PerplexityDashboard from '../assets/perplexity-dashboard.jpg';
import GoogleAIStudio from '../assets/google-ai-studio.jpg';
import GeminiCLI from '../assets/gemini-cli.jpg';
import ClaudeInterface from '../assets/claude-interface.jpg';
import VSCodeEditor from '../assets/vscode-editor.jpg';
import DockerContainers from '../assets/docker-containers.jpg';
import SupabaseDashboard from '../assets/supabase-dashboard.jpg';
import ClickHouseInterface from '../assets/clickhouse-interface.jpg';
import C4ContextDiagram from '../assets/c4-context-diagram.jpg';

interface ToolCardProps {
  title: string;
  description: string;
  image: string;
  pros: string[];
  cons: string[];
  useCase: string;
  link: string;
  freeTier?: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ 
  title, 
  description, 
  image, 
  pros, 
  cons, 
  useCase, 
  link, 
  freeTier 
}) => {
  return (
    <Card className="overflow-hidden border-border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <Button variant="outline" size="sm" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Попробовать
            </a>
          </Button>
        </div>
        
        <p className="text-muted-foreground mb-4">{description}</p>
        
        {freeTier && (
          <Badge variant="secondary" className="mb-3">
            {freeTier}
          </Badge>
        )}
        
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-tech-green mb-2">✅ Плюсы:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {pros.map((pro, index) => (
                <li key={index}>• {pro}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-destructive mb-2">❌ Минусы:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {cons.map((con, index) => (
                <li key={index}>• {con}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-tech-orange mb-2">🎯 Когда использовать:</h4>
            <p className="text-sm text-muted-foreground">{useCase}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const DevEcosystemDocs: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('intro');

  // Chart data for AI tools comparison
  const chartData = {
    labels: ['Grok', 'Perplexity', 'Google AI Studio', 'Gemini CLI', 'Claude', 'OpenRouter', 'Loveable'],
    datasets: [
      {
        label: 'Размер контекста',
        data: [7, 5, 9, 8, 10, 7, 6],
        backgroundColor: 'hsl(217, 91%, 60%)',
        borderColor: 'hsl(217, 91%, 60%)',
        borderWidth: 1,
      },
      {
        label: 'Щедрость бесплатного тарифа',
        data: [4, 6, 10, 8, 7, 8, 9],
        backgroundColor: 'hsl(30, 100%, 60%)',
        borderColor: 'hsl(30, 100%, 60%)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'hsl(210, 40%, 98%)'
        }
      },
      title: {
        display: true,
        text: 'Сравнение AI-инструментов',
        color: 'hsl(210, 40%, 98%)'
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        ticks: {
          color: 'hsl(210, 40%, 98%)'
        },
        grid: {
          color: 'hsl(217, 32%, 17%)'
        }
      },
      x: {
        ticks: {
          color: 'hsl(210, 40%, 98%)'
        },
        grid: {
          color: 'hsl(217, 32%, 17%)'
        }
      }
    },
  };

  const aiTools = [
    {
      title: "Grok",
      description: "ИИ от Илона Маска, который живет в Твиттере. Его киллер-фича — он знает, что происходит в мире прямо сейчас.",
      image: GrokInterface,
      pros: [
        "Свежак — тащит инфу прямо из X, идеально для понимания трендов",
        "С характером — может отвечать дерзко и с юмором",
        "Актуальные новости, которые еще не доехали до гугла"
      ],
      cons: [
        "Может гнать — ответы бывают предвзятыми",
        "Платно — нужна подписка X Premium"
      ],
      useCase: "Мониторинг трендов, поиск свежей инфы",
      link: "https://x.ai/grok",
      freeTier: "Требует X Premium"
    },
    {
      title: "Perplexity AI",
      description: "Поисковик на максималках. Ты ему вопрос — он тебе готовый ответ со ссылками на источники.",
      image: PerplexityDashboard,
      pros: [
        "Пруфы — всегда показывает, откуда взял инфу",
        "Режим Copilot — помогает углубиться в тему",
        "Фокус — можно искать по научным статьям, Reddit или YouTube"
      ],
      cons: [
        "Не креативный — стихи или маркетинг пишет хуже других"
      ],
      useCase: "Основной инструмент для ресерча, сбора данных и фактчекинга",
      link: "https://www.perplexity.ai",
      freeTier: "~5 Copilot запросов/4 часа"
    },
    {
      title: "Google AI Studio",
      description: "Песочница для работы с моделями Gemini. Это не чатик, а именно студия для разработчика.",
      image: GoogleAIStudio,
      pros: [
        "Моща — бесплатный доступ к самым крутым моделям Google",
        "Полный контроль — настройки Temperature, Top-P, Top-K",
        "Всеядность — жрет текст, картинки, видосы, аудио",
        "Код под ключ — написал промт, получил готовый Python/cURL"
      ],
      cons: [
        "Заточен под разработку, для болтовни не очень"
      ],
      useCase: "Прототипирование фичей, тесты промтов, анализ данных, генерация кода",
      link: "https://aistudio.google.com",
      freeTier: "60 запросов/мин — очень щедро"
    },
    {
      title: "Gemini CLI",
      description: "Та же мощь Gemini, но прямо у тебя в терминале.",
      image: GeminiCLI,
      pros: [
        "Автоматизация — встраиваешь ИИ в любые скрипты",
        "Скорость — не надо переключаться, все под рукой",
        "Универсальность — коммиты, рефакторинг, переводы одной командой"
      ],
      cons: [
        "Надо один раз настроить"
      ],
      useCase: "Быстрые запросы на лету, работа с файлами из консоли",
      link: "https://cloud.google.com/sdk/gcloud/reference/ai",
      freeTier: "Часть Google Cloud"
    },
    {
      title: "Claude",
      description: "Модель от Anthropic, главная фишка — огромное окно контекста.",
      image: ClaudeInterface,
      pros: [
        "Память как у слона — читает сотни страниц за раз",
        "Качество текста — очень круто пишет и редактирует",
        "Глубокий анализ — идеально для толстой документации"
      ],
      cons: [
        "Лимит сообщений в бесплатной версии"
      ],
      useCase: "Анализ больших доков, рефакторинг, брейншторминг, написание ТЗ",
      link: "https://www.anthropic.com/claude",
      freeTier: "Ограниченный, но периодически сбрасывается"
    },
    {
      title: "OpenRouter",
      description: "Один API-ключ, чтобы дергать десятки разных моделей (OpenAI, Claude, Llama и т.д.).",
      image: GrokInterface, // placeholder
      pros: [
        "Гибкость — переключаешься между моделями на лету",
        "Экономия — выбираешь самую дешевую для конкретной задачи",
        "Сравнение — можешь стравить несколько моделей"
      ],
      cons: [
        "Небольшая задержка — это посредник"
      ],
      useCase: "Тесты и когда нужно гибко рулить моделями",
      link: "https://openrouter.ai",
      freeTier: "Варьируется по моделям"
    },
    {
      title: "Loveable.dev",
      description: "ИИ-инструмент, заточенный на анализ фидбека от юзеров.",
      image: PerplexityDashboard, // placeholder
      pros: [
        "Автоматизация — сам читает отзывы, интервью, тикеты",
        "Инсайты — говорит, на что жалуются и чего хотят пользователи",
        "Экономия времени — заменяет тонну ручной работы"
      ],
      cons: [
        "Очень узкоспециализированный"
      ],
      useCase: "Когда надо быстро понять, что думают пользователи о продукте",
      link: "https://loveable.dev",
      freeTier: "Есть бесплатный план"
    }
  ];

  const softwareTools = [
    {
      title: "Visual Studio Code",
      description: "Наш дефолтный редактор. Но мы часто гоняем и его форки с упором на ИИ — Cursor и Windsirf.",
      image: VSCodeEditor,
      why: "Быстрый, расширяемый, готов к AI",
      link: "https://code.visualstudio.com"
    },
    {
      title: "Docker",
      description: "'У меня на компе все работало' — с докером этот аргумент не прокатит. Все в контейнерах, все воспроизводимо.",
      image: DockerContainers,
      why: "Консистентность между окружениями",
      link: "https://www.docker.com"
    },
    {
      title: "Gramax",
      description: "Утилита для проверки грамматики. Мы верим, что даже коммиты должны быть написаны без ошибок.",
      image: VSCodeEditor, // placeholder
      why: "Грамотность — это базовый скилл",
      link: "https://gramax.app"
    },
    {
      title: "OK JSON / ModernCSV",
      description: "Мелкие, но незаменимые утилиты для просмотра и форматирования JSON/CSV.",
      image: DockerContainers, // placeholder
      why: "Удобный просмотр данных",
      link: "https://okjson.app"
    },
    {
      title: "Chrome/Safari Dev Panel",
      description: "База для отладки фронтенда и анализа сети.",
      image: VSCodeEditor, // placeholder
      why: "Наше все для отладки фронта",
      link: "https://developer.chrome.com/docs/devtools"
    },
    {
      title: "Terminal",
      description: "Наше все. Скрипты, утилиты, Gemini CLI — все живет здесь.",
      image: GeminiCLI, // using CLI image as placeholder
      why: "Максимальная производительность",
      link: "https://en.wikipedia.org/wiki/Terminal_emulator"
    }
  ];

  const techStack = [
    {
      title: "Supabase",
      description: "По сути, это PostgreSQL на стероидах. Дает базу, авторизацию, хранилище и API из коробки. Топчик для быстрого старта.",
      image: SupabaseDashboard,
      role: "Быстрый setup бэкенда",
      link: "https://supabase.com"
    },
    {
      title: "ClickHouse",
      description: "Колоночная база для аналитики. Перемалывает гигантские объемы данных для отчетов с бешеной скоростью.",
      image: ClickHouseInterface,
      role: "Обработка данных в реальном времени",
      link: "https://clickhouse.com"
    },
    {
      title: "Redis",
      description: "Быстрая как понос база в памяти. Для кеша, сессий и очередей.",
      image: ClickHouseInterface, // placeholder
      role: "Кеширование и сессии",
      link: "https://redis.io"
    },
    {
      title: "Apache Kafka",
      description: "Сердце нашей асинхронной архитектуры. Через нее общаются все наши микросервисы. Надежно, быстро, масштабируемо.",
      image: DockerContainers, // placeholder
      role: "Шина данных для микросервисов",
      link: "https://kafka.apache.org"
    },
    {
      title: "AWS",
      description: "Основной дом для нашей инфраструктуры.",
      image: SupabaseDashboard, // placeholder
      role: "Основное облако",
      link: "https://aws.amazon.com"
    },
    {
      title: "Google Cloud",
      description: "Юзаем для их крутых AI/ML сервисов.",
      image: GoogleAIStudio,
      role: "AI/ML сервисы",
      link: "https://cloud.google.com"
    },
    {
      title: "Yandex.Cloud",
      description: "Для некоторых проектов, смотрящих на СНГ.",
      image: SupabaseDashboard, // placeholder
      role: "Локальное облако для СНГ",
      link: "https://yandex.cloud"
    },
    {
      title: "Kubernetes",
      description: "Все приложения пакуем в Docker и деплоим в Kubernetes (Amazon EKS).",
      image: DockerContainers,
      role: "Оркестрация контейнеров",
      link: "https://kubernetes.io"
    },
    {
      title: "C4 Model",
      description: "Чтобы не запутаться в архитектуре, рисуем ее по нотации C4.",
      image: C4ContextDiagram,
      role: "Проектирование архитектуры",
      link: "https://c4model.com"
    },
    {
      title: "IcePanel",
      description: "Наш инструмент для рисования C4 диаграмм.",
      image: C4ContextDiagram, // placeholder
      role: "Создание диаграмм",
      link: "https://icepanel.io"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-card to-secondary/20 py-20">
        <div className="absolute inset-0 opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-tech-blue via-tech-green to-tech-orange bg-clip-text text-transparent">
              Здарова! Зацени наш стек и инструменты
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Это весь наш мир — от ИИ-помощников до основной архитектуры. 
              <br />
              <span className="text-primary font-semibold">
                Наша философия простая:
              </span> брать лучшее из того, что есть (часто бесплатное), чтобы кодить быстро и не страдать.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="outline" className="px-4 py-2 text-lg border-tech-blue text-tech-blue">
                AI-Powered
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-lg border-tech-green text-tech-green">
                Open Source
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-lg border-tech-orange text-tech-orange">
                Fast & Efficient
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-6 italic">
              💡 <strong>Главный совет:</strong> не просто прочитай, а прям пойди и зарегайся везде, где можно. Потыкай кнопки, позадавай вопросы нейронкам, разверни докер. Это лучший способ въехать в тему.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex space-x-8 py-4 overflow-x-auto">
            {[
              { id: 'intro', label: 'Введение' },
              { id: 'ai-tools', label: 'AI Инструменты' },
              { id: 'software', label: 'Софт' },
              { id: 'stack', label: 'Тех-стек' },
              { id: 'metrik', label: 'MetrikCollector' },
              { id: 'links', label: 'Ссылки' }
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        {/* AI Tools Section */}
        <section id="ai-tools" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">AI Инструменты: Наш Второй Мозг</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              AI — наш второй пилот, от кодинга до исследований. Вот наша линейка топчиков:
            </p>
          </div>

          {/* Chart */}
          <div className="mb-12 bg-card/50 p-6 rounded-lg border border-border">
            <Bar data={chartData} options={chartOptions} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {aiTools.map((tool, index) => (
              <ToolCard key={index} {...tool} />
            ))}
          </div>
        </section>

        {/* Software Section */}
        <section id="software" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Основной Софт</h2>
            <p className="text-lg text-muted-foreground">
              Наши go-to инструменты для решения задач:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softwareTools.map((tool, index) => (
              <Card key={index} className="overflow-hidden border-border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={tool.image} 
                    alt={tool.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground">{tool.title}</h3>
                    <Button variant="outline" size="sm" asChild>
                      <a href={tool.link} target="_blank" rel="noopener noreferrer">
                        Скачать
                      </a>
                    </Button>
                  </div>
                  <p className="text-muted-foreground mb-4">{tool.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-tech-green mb-2">Почему используем:</h4>
                    <p className="text-sm text-muted-foreground">{tool.why}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="stack" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Тех-стек</h2>
            <p className="text-lg text-muted-foreground">
              Наш стек построен для скорости, масштаба и здравомыслия:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStack.map((tech, index) => (
              <Card key={index} className="overflow-hidden border-border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={tech.image} 
                    alt={tech.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground">{tech.title}</h3>
                    <Button variant="outline" size="sm" asChild>
                      <a href={tech.link} target="_blank" rel="noopener noreferrer">
                        Узнать больше
                      </a>
                    </Button>
                  </div>
                  <p className="text-muted-foreground mb-4">{tech.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-tech-orange mb-2">Роль:</h4>
                    <p className="text-sm text-muted-foreground">{tech.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* MetrikCollector Section */}
        <section id="metrik" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">MetrikCollector: Как Всё Работает Вместе</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Node.js микросервис, который собирает метрики, стримит их через Kafka и сохраняет в ClickHouse/PostgreSQL для аналитики в реальном времени.
            </p>
          </div>

          {/* Architecture Diagram */}
          <div className="mb-8">
            <Card className="overflow-hidden border-border bg-card/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center text-foreground">Архитектурная диаграмма (C4 Model)</h3>
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img 
                    src={C4ContextDiagram} 
                    alt="C4 Context Diagram - MetrikCollector Architecture" 
                    className="w-full h-full object-cover shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stack Breakdown Table */}
          <Card className="border-border bg-card/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">Разбор стека</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Компонент</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Стек</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-medium text-tech-blue">Frontend</td>
                      <td className="py-3 px-4 text-muted-foreground">TypeScript, React, Vite, Shadcn UI, Tailwind CSS, TanStack Query</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-medium text-tech-green">Backend</td>
                      <td className="py-3 px-4 text-muted-foreground">Node.js, TypeScript, Fastify, PostgreSQL, ClickHouse, Redis, BullMQ, kafkajs</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-medium text-tech-orange">MetrikCollector</td>
                      <td className="py-3 px-4 text-muted-foreground">Node.js, TypeScript, ClickHouse, kafkajs, axios</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-accent">Другой микросервис</td>
                      <td className="py-3 px-4 text-muted-foreground">.NET 9.0, ASP.NET Core (C#)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Links Section */}
        <section id="links" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Ссылки</h2>
            <p className="text-lg text-muted-foreground">
              Полный список кликабельных ссылок на все упомянутые инструменты и сервисы:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Grok", url: "https://x.ai/grok", category: "AI" },
              { title: "Perplexity AI", url: "https://www.perplexity.ai", category: "AI" },
              { title: "Google AI Studio", url: "https://aistudio.google.com", category: "AI" },
              { title: "Gemini CLI", url: "https://cloud.google.com/sdk/gcloud/reference/ai", category: "AI" },
              { title: "Claude", url: "https://www.anthropic.com/claude", category: "AI" },
              { title: "OpenRouter", url: "https://openrouter.ai", category: "AI" },
              { title: "Loveable.dev", url: "https://loveable.dev", category: "AI" },
              { title: "Visual Studio Code", url: "https://code.visualstudio.com", category: "Разработка" },
              { title: "Docker", url: "https://www.docker.com", category: "Разработка" },
              { title: "Gramax", url: "https://gramax.app", category: "Разработка" },
              { title: "OK JSON", url: "https://okjson.app", category: "Разработка" },
              { title: "ModernCSV", url: "https://moderncsv.com", category: "Разработка" },
              { title: "Chrome DevTools", url: "https://developer.chrome.com/docs/devtools", category: "Разработка" },
              { title: "Terminal", url: "https://en.wikipedia.org/wiki/Terminal_emulator", category: "Разработка" },
              { title: "Supabase", url: "https://supabase.com", category: "Backend" },
              { title: "ClickHouse", url: "https://clickhouse.com", category: "Базы данных" },
              { title: "Redis", url: "https://redis.io", category: "Базы данных" },
              { title: "Apache Kafka", url: "https://kafka.apache.org", category: "Стриминг" },
              { title: "AWS", url: "https://aws.amazon.com", category: "Облако" },
              { title: "Google Cloud", url: "https://cloud.google.com", category: "Облако" },
              { title: "Yandex.Cloud", url: "https://yandex.cloud", category: "Облако" },
              { title: "Kubernetes", url: "https://kubernetes.io", category: "Оркестрация" },
              { title: "C4 Model", url: "https://c4model.com", category: "Архитектура" },
              { title: "IcePanel", url: "https://icepanel.io", category: "Диаграммы" }
            ].map((link, index) => (
              <Card key={index} className="border-border bg-card/50 hover:bg-card/70 transition-all duration-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">{link.title}</h4>
                      <Badge variant="outline" className="text-xs mt-1">
                        {link.category}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                        →
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="text-center py-16 bg-gradient-to-r from-card/50 to-secondary/20 rounded-2xl border border-border">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Заключение</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Вот и наш мир — с AI, контейнеризованный и построенный для скорости. 
            Идите, регистрируйтесь, играйтесь с этими инструментами и стройте что-то топовое.
          </p>
          <p className="text-muted-foreground mb-6">
            Вопросы? Пишите нам! 🚀
          </p>
          <div className="flex justify-center space-x-4">
            <Badge variant="outline" className="px-4 py-2 text-sm border-tech-blue text-tech-blue">
              Экспериментируйте
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm border-tech-green text-tech-green">
              Ломайте
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm border-tech-orange text-tech-orange">
              Стройте
            </Badge>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DevEcosystemDocs;