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
import Icon from "@/components/ui/icon";

const Users = () => {
  const mockUsers = [
    {
      id: 1,
      email: "john.doe@example.com",
      firstName: "Иван",
      lastName: "Петров",
      role: "user",
      telegramConnected: true,
      createdAt: "2024-01-15",
      lastActive: "2 часа назад",
    },
    {
      id: 2,
      email: "jane.smith@company.com",
      firstName: "Анна",
      lastName: "Смирнова",
      role: "user",
      telegramConnected: false,
      createdAt: "2024-01-20",
      lastActive: "1 день назад",
    },
    {
      id: 3,
      email: "admin@summarize.com",
      firstName: "Алексей",
      lastName: "Админов",
      role: "superadmin",
      telegramConnected: true,
      createdAt: "2024-01-01",
      lastActive: "5 минут назад",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Управление пользователями
            </h1>
            <p className="text-gray-600">
              Создавайте и управляйте учетными записями пользователей
            </p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Icon name="UserPlus" size={16} className="mr-2" />
            Создать пользователя
          </Button>
        </div>

        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Все пользователи
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
                    placeholder="Поиск пользователей..."
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
                  <TableHead>Пользователь</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Роль</TableHead>
                  <TableHead>Telegram</TableHead>
                  <TableHead>Создан</TableHead>
                  <TableHead>Последняя активность</TableHead>
                  <TableHead className="text-right">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <Icon
                            name="User"
                            size={16}
                            className="text-purple-600"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {user.firstName} {user.lastName}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {user.email}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          user.role === "superadmin" ? "default" : "secondary"
                        }
                      >
                        {user.role === "superadmin"
                          ? "Суперадмин"
                          : "Пользователь"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Icon
                          name={
                            user.telegramConnected
                              ? "MessageCircle"
                              : "MessageCircleOff"
                          }
                          size={16}
                          className={
                            user.telegramConnected
                              ? "text-green-600"
                              : "text-gray-400"
                          }
                        />
                        <span className="text-sm text-gray-600">
                          {user.telegramConnected
                            ? "Подключен"
                            : "Не подключен"}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {user.createdAt}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {user.lastActive}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-2">
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

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-gray-600">Показано 3 из 3 пользователей</p>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              <Icon name="ChevronLeft" size={16} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-purple-50 text-purple-600"
            >
              1
            </Button>
            <Button variant="outline" size="sm" disabled>
              <Icon name="ChevronRight" size={16} />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Users;
