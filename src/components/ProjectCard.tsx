import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ProjectCardProps {
  title: string;
  description: string;
  status: "active" | "inactive";
  telegramConnected: boolean;
  lastUpdate: string;
}

const ProjectCard = ({
  title,
  description,
  status,
  telegramConnected,
  lastUpdate,
}: ProjectCardProps) => {
  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant={status === "active" ? "default" : "secondary"}>
            {status === "active" ? "Активен" : "Неактивен"}
          </Badge>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center space-x-2">
          <Icon
            name={telegramConnected ? "MessageCircle" : "MessageCircleOff"}
            size={16}
            className={telegramConnected ? "text-green-600" : "text-gray-400"}
          />
          <span className="text-sm text-gray-600">
            {telegramConnected ? "Telegram подключен" : "Telegram не подключен"}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">Обновлен {lastUpdate}</span>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Icon name="Edit" size={14} className="mr-1" />
            Изменить
          </Button>
          <Button variant="ghost" size="sm">
            <Icon name="MoreHorizontal" size={14} />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
