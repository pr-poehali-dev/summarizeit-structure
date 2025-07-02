import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface UserFormProps {
  mode: "create" | "edit";
  onClose: () => void;
  initialData?: {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  };
}

const UserForm = ({ mode, onClose, initialData }: UserFormProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md p-6 m-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {mode === "create"
              ? "Создать пользователя"
              : "Редактировать пользователя"}
          </h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <Icon name="X" size={16} />
          </Button>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">Имя</Label>
              <Input
                id="firstName"
                placeholder="Введите имя"
                defaultValue={initialData?.firstName}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="lastName">Фамилия</Label>
              <Input
                id="lastName"
                placeholder="Введите фамилию"
                defaultValue={initialData?.lastName}
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="user@example.com"
              defaultValue={initialData?.email}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="password">Пароль</Label>
            <Input
              id="password"
              type="password"
              placeholder={
                mode === "edit"
                  ? "Оставьте пустым для сохранения текущего"
                  : "Введите пароль"
              }
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="role">Роль</Label>
            <Select defaultValue={initialData?.role || "user"}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Выберите роль" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="user">Пользователь</SelectItem>
                <SelectItem value="superadmin">Суперадмин</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {mode === "edit" && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Info" size={16} className="text-blue-600" />
                <span className="text-sm font-medium text-gray-900">
                  Telegram-интеграция
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Telegram user_id привязывается автоматически при первом запуске
                бота пользователем. Редактирование этого поля недоступно.
              </p>
            </div>
          )}

          <div className="flex items-center justify-end space-x-3 pt-4">
            <Button variant="outline" onClick={onClose}>
              Отмена
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              {mode === "create" ? "Создать" : "Сохранить"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
