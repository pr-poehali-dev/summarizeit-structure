import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Projects = () => {
  const mockProjects = [
    {
      id: 1,
      title: "Новостной бот",
      description: "Автоматическое создание сводок новостей",
      owner: "Иван Петров",
      ownerEmail: "john.doe@example.com",
      status: "active",
      telegramChatId: "-1001234567890",
      prompt:
        "Создай краткую сводку новостей за день, выдели основные события...",
      createdAt: "2024-01-15",
      lastGenerated: "2 часа назад",
    },
    {
      id: 2,
      title: "Аналитика продаж",
      description: "Еженедельные отчеты по продажам",
      owner: "Анна Смирнова",
      ownerEmail: "jane.smith@company.com",
      status: "active",
      telegramChatId: "-1001234567891",
      prompt: "Проанализируй данные продаж за неделю и создай краткий отчет...",
      createdAt: "2024-01-20",
      lastGenerated: "1 день назад",
    },
    {
      id: 3,
      title: "HR-дайджест",
      description: "Сводки по кадровым вопросам",
      owner: "Иван Петров",
      ownerEmail: "john.doe@example.com",
      status: "inactive",
      telegramChatId: "",
      prompt: "Создай дайджест по HR-событиям компании...",
      createdAt: "2024-01-10",
      lastGenerated: "5 дней назад",
    },
  ];

  const myProjects = mockProjects.filter(
    (p) => p.ownerEmail === "admin@summarize.com",
  );
  const allProjects = mockProjects;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Управление проектами
            </h1>
            <p className="text-gray-600">
              Создавайте и управляйте проектами для генерации саммари
            </p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Icon name="Plus" size={16} className="mr-2" />
            Создать проект
          </Button>
        </div>

        <Tabs defaultValue="my" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="my">Мои проекты</TabsTrigger>
            <TabsTrigger value="all">Все проекты</TabsTrigger>
          </TabsList>

          <TabsContent value="my" className="space-y-6">
            <Card>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Мои проекты
                  </h2>
                  <div className="text-sm text-gray-600">
                    {myProjects.length} проектов
                  </div>
                </div>

                {myProjects.length === 0 ? (
                  <div className="text-center py-12">
                    <Icon
                      name="FolderOpen"
                      size={48}
                      className="mx-auto text-gray-400 mb-4"
                    />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Нет проектов
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Создайте свой первый проект для генерации саммари
                    </p>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Icon name="Plus" size={16} className="mr-2" />
                      Создать проект
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {myProjects.map((project) => (
                      <Card
                        key={project.id}
                        className="p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-semibold text-gray-900">
                            {project.title}
                          </h3>
                          <Badge
                            variant={
                              project.status === "active"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {project.status === "active"
                              ? "Активен"
                              : "Неактивен"}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            Обновлен {project.lastGenerated}
                          </span>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <Icon name="Edit" size={14} />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Icon name="Play" size={14} />
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="all" className="space-y-6">
            <Card>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Все проекты пользователей
                  </h2>
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Icon
                        name="Search"
                        size={16}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="text"
                        placeholder="Поиск проектов..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Icon name="Filter" size={16} className="mr-2" />
                      Фильтр
                    </Button>
                  </div>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Проект</TableHead>
                      <TableHead>Владелец</TableHead>
                      <TableHead>Статус</TableHead>
                      <TableHead>Telegram Chat ID</TableHead>
                      <TableHead>Создан</TableHead>
                      <TableHead>Последняя генерация</TableHead>
                      <TableHead className="text-right">Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {allProjects.map((project) => (
                      <TableRow key={project.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium text-gray-900">
                              {project.title}
                            </p>
                            <p className="text-sm text-gray-600">
                              {project.description}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="text-gray-900">{project.owner}</p>
                            <p className="text-sm text-gray-600">
                              {project.ownerEmail}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              project.status === "active"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {project.status === "active"
                              ? "Активен"
                              : "Неактивен"}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-mono text-sm text-gray-600">
                          {project.telegramChatId || "Не указан"}
                        </TableCell>
                        <TableCell className="text-gray-600">
                          {project.createdAt}
                        </TableCell>
                        <TableCell className="text-gray-600">
                          {project.lastGenerated}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <Button variant="ghost" size="sm">
                              <Icon name="Eye" size={14} className="mr-1" />
                              Просмотр
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Icon name="Edit" size={14} className="mr-1" />
                              Изменить
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-600 hover:text-red-700"
                            >
                              <Icon name="Trash2" size={14} className="mr-1" />
                              Удалить
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Projects;
