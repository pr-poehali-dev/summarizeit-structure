import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={18} className="text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">
              SummarizeIT
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-purple-600 bg-purple-50">
              <Icon name="LayoutDashboard" size={16} className="mr-2" />
              Проекты
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900"
            >
              <Icon name="Users" size={16} className="mr-2" />
              Пользователи
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900"
            >
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Icon name="Plus" size={16} className="mr-2" />
            Новый проект
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <Icon name="User" size={16} className="text-gray-600" />
            </div>
            <span className="text-sm text-gray-700">admin@example.com</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
