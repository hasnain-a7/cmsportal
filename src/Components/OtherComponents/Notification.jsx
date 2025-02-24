const notifications = [
  {
    time: "10 Feb",
    message:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Magnis nulla cubilia vel aliquam ",

    color: "border-blue-500",
  },
  {
    time: "08:40",
    message: "Proin iacul eros no odi.",

    color: "border-green-500",
  },
  {
    time: "07:10",
    message: "In mattis mi posuere.",

    color: "border-blue-500",
  },
  {
    time: "01:15",
    message: "Morbi quis ex eu arcu.",

    color: "border-red-500",
  },
  {
    time: "23:12",
    message: "Morbi quis ex eu arcu.",

    color: "border-orange-500",
  },
];

export default function Notification() {
  return (
    <div className="w-full h-full bg-[#FFFFFF] border-[#3CBEA9] border-t-4 rounded-sm  p-3 sm:p-2 mx-auto relative">
      {/* Header */}
      <div className="bg-[#3CBEA9] text-white font-bold p-2 mb-2">
        <h2>Notifications Alerts</h2>
      </div>

      {/* Notifications List */}
      <div className="relative flex flex-col rounded-lg shadow-sm border border-slate-200 h-auto overflow-y-auto p-2">
        {notifications.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-white p-3 rounded-md border border-slate-200 shadow-sm mb-2"
          >
            {/* Time with colored border */}
            <div
              className={`text-lg font-bold text-gray-700  border-l-4 ${item.color} pl-2`}
            >
              {item.time}
            </div>

            {/* Message Content */}
            <div>
              <p className="text-gray-800 font-medium">{item.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
