
 import AnnouncementCard from "./ AnnouncementCard";
const announcements = [
  {
    id: 1,
    date: "2025-07-01",
    title: "New Semester Registration Opens",
    description:
      "Students can now register online for the upcoming semester. Ensure you complete your enrollment before July 15th.",
    type: "announcement",
  },

  {
    id: 3,
    date: "2025-07-20",
    title: "Annual Graduation Ceremony",
    description:
      "Celebrate with us as we honor our graduating students. Family and friends are welcome.",
    type: "event",
  },
  {
    id: 4,
    date: "2025-07-25",
    title: "Community Outreach Program",
    description:
      "Anderson VTC students will participate in local community service projects. Volunteers needed!",
    type: "announcement",
  },
];

const AnnouncementsList = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-red-500">
        Latest Announcements & Events
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {announcements.map((announcement) => (
          <AnnouncementCard key={announcement.id} announcement={announcement} />
        ))}
      </div>
    </section>
  );
};

export default AnnouncementsList;
