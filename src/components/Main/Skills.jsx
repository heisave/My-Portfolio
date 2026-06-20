import { useState } from 'react';
import Navbar from '../Other/Navbar';

const categories = [
  {
    id: 'frontend',
    label: 'Frontend & Dev',
    skills: [
      { name: 'JavaScript / TypeScript', level: 'Daily driver' },
      { name: 'React', level: 'Daily driver' },
      { name: 'Tailwind CSS', level: 'Daily driver' },
      { name: 'Node.js', level: 'Comfortable' },
      { name: 'REST APIs', level: 'Comfortable' },
      { name: 'Git & GitHub', level: 'Comfortable' },
    ],
  },
  {
    id: 'support',
    label: 'Support & Client',
    skills: [
      { name: 'Zendesk Support Admin', level: 'Certified' },
      { name: 'Triggers & Automations', level: 'Comfortable' },
      { name: 'SLA Policies', level: 'Comfortable' },
      { name: 'Macros & Workflows', level: 'Comfortable' },
      { name: 'Active Listening', level: 'Leveling up' },
      { name: 'Client Communication', level: 'Leveling up' },
    ],
  },
  {
    id: 'creative',
    label: 'Creative & Content',
    skills: [
      { name: 'Video Editing', level: 'Comfortable' },
      { name: 'VN Video Editor', level: 'Comfortable' },
      { name: 'Content Strategy', level: 'Comfortable' },
      { name: 'Social Storytelling', level: 'Leveling up' },
    ],
  },
];

const Skills = () => {
  const [activeId, setActiveId] = useState(categories[0].id);
  const active = categories.find((c) => c.id === activeId);

  return (
    <section className="px-6 py-24">
        <Navbar/>
      <div className="max-w-7xl mx-auto relative mt-5">

        <div className="absolute -top-10 -right-10 w-72 h-72 bg-cyan-500/10 blur-3xl"></div>

        <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm border border-cyan-500/20">
          Skills • What I work with
        </span>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-black">
          Tools I use to
          <span className="text-cyan-400"> build things.</span>
        </h2>

        <p className="mt-6 text-zinc-400 text-lg max-w-xl leading-relaxed">
          A mix of code, client communication, and creative tools — built through real
          projects, a couple of certifications, and a lot of practice.
        </p>

        {/* Category tabs */}
        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((cat) => {
            const isActive = cat.id === activeId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-cyan-500 text-black'
                    : 'border border-zinc-700 text-black hover:border-zinc-400'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills grid */}
        <div className="relative mt-8 rounded-3xl border border-zinc-200 bg-white p-8">
          <ul className="grid sm:grid-cols-2 gap-4">
            {active.skills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center justify-between gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4"
              >
                <span className="flex items-center gap-3 text-black font-medium">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  {skill.name}
                </span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs border border-cyan-500/20 whitespace-nowrap">
                  {skill.level}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;