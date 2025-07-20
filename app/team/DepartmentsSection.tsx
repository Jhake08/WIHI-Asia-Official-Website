
'use client';

export default function DepartmentsSection() {
  const departments = [
    {
      name: 'Engineering',
      memberCount: 15,
      description: 'Building robust and scalable ecommerce solutions',
      icon: 'ri-code-line',
      color: 'from-blue-600 to-cyan-600',
      skills: ['React', 'Node.js', 'Python', 'AWS', 'DevOps']
    },
    {
      name: 'Marketing',
      memberCount: 12,
      description: 'Driving growth through strategic campaigns',
      icon: 'ri-megaphone-line',
      color: 'from-yellow-500 to-orange-500',
      skills: ['Social Media', 'PPC', 'SEO', 'Content', 'Analytics']
    },
    {
      name: 'Design',
      memberCount: 8,
      description: 'Creating beautiful and intuitive user experiences',
      icon: 'ri-palette-line',
      color: 'from-green-600 to-teal-600',
      skills: ['UI/UX', 'Figma', 'Prototyping', 'Branding', 'Motion']
    },
    {
      name: 'Data Science',
      memberCount: 6,
      description: 'Turning data into actionable business insights',
      icon: 'ri-bar-chart-line',
      color: 'from-orange-600 to-red-600',
      skills: ['Python', 'SQL', 'Machine Learning', 'Visualization', 'Statistics']
    },
    {
      name: 'Customer Success',
      memberCount: 10,
      description: 'Ensuring client satisfaction and growth',
      icon: 'ri-customer-service-line',
      color: 'from-yellow-600 to-orange-600',
      skills: ['Support', 'Training', 'Onboarding', 'Retention', 'Communication']
    },
    {
      name: 'Operations',
      memberCount: 5,
      description: 'Streamlining processes and ensuring efficiency',
      icon: 'ri-settings-line',
      color: 'from-gray-600 to-gray-800',
      skills: ['Project Management', 'Process Optimization', 'Quality Assurance', 'Documentation']
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-orange-400">Departments</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized teams working together to deliver comprehensive ecommerce solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="group p-8 bg-black/30 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${dept.color} rounded-full mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${dept.icon} text-white text-2xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{dept.name}</h3>
                  <p className="text-gray-400 text-sm">{dept.memberCount} team members</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{dept.description}</p>
              
              <div>
                <h4 className="text-white font-medium mb-3">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {dept.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full hover:bg-gray-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
