import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const StatsOverview = () => {
  const stats = [
    {
      title: "Всего проектов",
      value: "12",
      change: "+2",
      changeType: "positive" as const,
      icon: "FolderOpen",
    },
    {
      title: "Активных проектов",
      value: "8",
      change: "+1",
      changeType: "positive" as const,
      icon: "Activity",
    },
    {
      title: "Пользователей",
      value: "24",
      change: "+5",
      changeType: "positive" as const,
      icon: "Users",
    },
    {
      title: "Telegram-интеграций",
      value: "6",
      change: "0",
      changeType: "neutral" as const,
      icon: "MessageCircle",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <div className="flex items-center mt-2">
                <span
                  className={`text-sm ${
                    stat.changeType === "positive"
                      ? "text-green-600"
                      : stat.changeType === "negative"
                        ? "text-red-600"
                        : "text-gray-500"
                  }`}
                >
                  {stat.change !== "0" &&
                    (stat.changeType === "positive" ? "+" : "")}
                  {stat.change}
                </span>
                <span className="text-xs text-gray-500 ml-1">за месяц</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Icon
                name={stat.icon as any}
                size={20}
                className="text-purple-600"
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default StatsOverview;
