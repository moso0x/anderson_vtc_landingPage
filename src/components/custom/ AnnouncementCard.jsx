import React from "react";
import { FaBullhorn, FaCalendarAlt } from "react-icons/fa";


const AnnouncementCard = ({ announcement }) => {
  const { date, title, description, type } = announcement;

  // Color schemes based on type
  const colorClasses =
    type === "announcement"
      ? "bg-yellow-100 text-yellow-900 border-yellow-300"
      : "bg-blue-100 text-blue-900 border-blue-300";

  const Icon = type === "announcement" ? FaBullhorn : FaCalendarAlt;

  return (
    <div
      className={`max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border-l-8 ${colorClasses} transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer`}
      role="article"
      tabIndex={0}
    >
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-2">
          <Icon className="text-2xl" />
          <time dateTime={date} className="text-sm font-semibold text-red-800">
            {new Date(date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default AnnouncementCard