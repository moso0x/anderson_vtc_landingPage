import React from "react";

const activities = [
  {
    title: "Coding Club",
    description:
      "Join fellow tech enthusiasts to learn programming, work on projects, and participate in hackathons.",
  },
  {
    title: "Robotics Society",
    description:
      "Build and program robots, compete in robotics challenges, and explore automation technologies.",
  },
  {
    title: "Drama & Arts Club",
    description:
      "Express yourself through acting, painting, and creative arts. Participate in school plays and exhibitions.",
  },
  {
    title: "Sports & Athletics",
    description:
      "Stay active and healthy by joining our football, basketball, and athletics teams. Compete at inter-school events.",
  },
  {
    title: "Environmental Club",
    description:
      "Engage in sustainability projects, tree planting, and awareness campaigns to protect our environment.",
  },
  {
    title: "Music & Choir",
    description:
      "Develop your musical talents, join the choir, or play instruments in school concerts and events.",
  },
];

const ActivityCard = ({ title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-[#00879E] font-bold text-xl mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const ActivitiesSection = () => {
  return (
    <section className="bg-green-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#00879E] mb-8 text-center">
          Clubs & Activities at Anderson VTC
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, idx) => (
            <ActivityCard key={idx} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
