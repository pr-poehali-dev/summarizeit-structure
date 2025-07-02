import Navigation from "@/components/Navigation";
import StatsOverview from "@/components/StatsOverview";
import ProjectCard from "@/components/ProjectCard";

const Index = () => {
  const mockProjects = [
    {
      title: "Новостной бот",
      description: "Автоматическое создание сводок новостей",
      status: "active" as const,
      telegramConnected: true,
      lastUpdate: "2 часа назад",
    },
    {
      title: "Аналитика продаж",
      description: "Еженедельные отчеты по продажам",
      status: "active" as const,
      telegramConnected: true,
      lastUpdate: "1 день назад",
    },
    {
      title: "HR-дайджест",
      description: "Сводки по кадровым вопросам",
      status: "inactive" as const,
      telegramConnected: false,
      lastUpdate: "5 дней назад",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Панель управления
          </h1>
          <p className="text-gray-600">
            Управляйте проектами и настройками SummarizeIT
          </p>
        </div>

        <div className="mb-8">
          <StatsOverview />
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Недавние проекты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                status={project.status}
                telegramConnected={project.telegramConnected}
                lastUpdate={project.lastUpdate}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
