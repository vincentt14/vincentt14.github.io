export const Journey = () => {
  const experiences = [
    {
      id: 4,
      place: "Indomaret Group",
      title: "IT Specialist SD 3",
      timespan: "Jan 2024 - Present",
    },
    {
      id: 3,
      place: "Dicoding Academy",
      title: "Study Independent | Front-End & React",
      timespan: "Aug 2022 - Dec 2022",
    },
    {
      id: 2,
      place: "Hashmicro",
      title: "Software Implementation Consultant",
      timespan: "Feb 2022 - Jun 2022",
    },
    {
      id: 1,
      place: "Multimedia Nusantara University",
      title: "Bachelor's Degree | Computer Science",
      timespan: "Aug 2019 - Jul 2023",
    },
  ];

  return (
    <>
      <h1 className="text-base font-medium text-primary md:text-xl">
        Experience <span className="block font-bold text-white text-4xl mt-1 lg:text-5xl">My Journey</span>
      </h1>
      <hr className="w-28 my-3 p-1 bg-tertiary border border-borderColor rounded-sm" />

      <div className="grid lg:grid-cols-2 my-4 gap-2">
        {experiences.map((experience) => (
          <div key={experience.place} className="bg-tertiary border border-borderColor rounded-md">
            <p className="text-justify font-bold text-white text-lg col-span-2 p-3">
              {experience.place}
              <span className="block font-normal text-slate-200 mt-1 text-base">{experience.title}</span>
              <span className="block font-normal text-primary mt-1 text-sm">{experience.timespan}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
