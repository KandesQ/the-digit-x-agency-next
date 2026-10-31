type TeamMember = {
  role: string;
  area: string;
  description: string;
};

export default function OurTeam() {
  const teamMembers: TeamMember[] = [
    {
      role: "Creative Designer",
      area: "Brand & Visual Identity",
      description:
        "I shape how each brand looks and feels — from the smallest social post to the full identity system. Good design should make customers trust you before they ever speak to you.",
    },
    {
      role: "Content Strategist",
      area: "Storytelling & Content",
      description:
        "I help brands talk like real humans. Every caption, reel, and campaign idea starts with one question: would your customer actually care about this?",
    },
    {
      role: "Performance Specialist",
      area: "Paid Media & Analytics",
      description:
        "I run the campaigns that turn attention into action. My job is to make sure every rupee spent on ads is working towards real business outcomes.",
    },
  ];

  return (
    <section className="py-[80]">
      <div className="text-center flex flex-col items-center our-team__container">
        <span className="uppercase font-semibold text-xs leading-[16px] tracking-[2.4px] text-[var(--primary-color)]">Our Team</span>

        <h2 className="mt-[12] font-bold text-5xl leading-[1.25] tracking-[-0.96px] text-white max-md:text-4xl max-sm:text-3xl">
          Meet The People Behind <span className="text-gradient">The Work</span>
        </h2>

        <p className="mt-[16] text-lg leading-[1.625] max-sm:text-base">
          A small, focused team that genuinely cares about every brand we work
          with.
        </p>

        <ul className="mt-[56] w-full grid grid-cols-4 max-lg:grid-cols-2 gap-[20] max-sm:grid-cols-1">
          {teamMembers.map((teamMember) => (
            <li
              key={teamMember.role}
              className="group flex flex-col items-center border border-[var(--border-color)] py-[25] px-[27] hover:border-[var(--primary-color)]/60 rounded-2xl hover:-translate-y-2 transition-all"
            >
              <div className="size-[96] text-black font-bold text-3xl bg-gradient-to-br from-[var(--primary-color)] to-[var(--electric-glow)] flex items-center justify-center rounded-full group-hover:glow-effect-lg transition-all">
                {teamMember.role[0]}
              </div>
              <h4 className="mt-[16] font-semibold text-base leading-[24px] tracking-[-0.32px] text-white">
                {teamMember.role}
              </h4>
              <span className="mt-[4] uppercase text-xs leading-[16px] tracking-[0.6px] text-[var(--primary-color)]">
                {teamMember.area}
              </span>
              <p className="mt-[13] text-xs leading-[19.5px] text-center">
                {teamMember.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
