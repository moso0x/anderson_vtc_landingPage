import React, { useState, useEffect } from "react";

const backgroundImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80",
];

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
  <div
    className="relative bg-white bg-opacity-90 rounded-lg shadow-md p-6 border border-gray-300 cursor-pointer
    hover:shadow-xl hover:bg-opacity-100 transition-all duration-300 transform hover:scale-[1.05]"
  >
    <h3 className="text-[#00879E] font-bold text-xl mb-2 hover:underline">{title}</h3>
    <p className="text-gray-800">{description}</p>
  </div>
);

const ActivitiesSection = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 7000); // change every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-12 px-6 bg-cover bg-center transition-background duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${backgroundImages[currentBgIndex]})` }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#00B8D9] mb-8 text-center">
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
