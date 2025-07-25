
'use client';

export default function TeamGrid() {
  const teamMembers = [
    {
      name: 'Jellete Juian',
      role: 'COO & Founder',
      department: 'Operations Division',
      bio: 'Visionary leader with 12+ years in ecommerce. Former VP at major tech company.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20CEO%20portrait%20in%20modern%20corporate%20office%2C%20confident%20business%20leader%20wearing%20elegant%20business%20attire%2C%20contemporary%20executive%20headshot%20with%20clean%20lighting%20and%20professional%20background%2C%20leadership%20and%20success%20atmosphere&width=300&height=400&seq=ceo-sarah&orientation=portrait',
      expertise: ['Strategic Vision', 'Executive Leadership', 'Business Growth'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Jan Lester Juilian',
      role: 'CEO & Founder',
      department: 'Executive Management ',
      bio: 'Tech innovator specializing in ecommerce platforms and automation solutions.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20CTO%20portrait%20in%20tech%20office%20environment%2C%20confident%20technology%20leader%20wearing%20casual%20business%20attire%2C%20modern%20corporate%20headshot%20with%20clean%20lighting%2C%20innovation%20and%20technical%20expertise%20atmosphere&width=300&height=400&seq=cto-michael&orientation=portrait',
      expertise: ['Operational Excellence', 'Process Optimization', 'Team Execution],
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Jobelle Ortega',
      role: 'Administrative Executive',
      department: 'Executive Office ',
      bio: 'Digital marketing expert with proven track record in social commerce growth.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20marketing%20director%20portrait%20in%20creative%20office%20space%2C%20confident%20marketing%20leader%20wearing%20stylish%20business%20attire%2C%20contemporary%20corporate%20headshot%20with%20vibrant%20lighting%2C%20creativity%20and%20strategy%20atmosphere&width=300&height=400&seq=marketing-emily&orientation=portrait',
      expertise: ['Schedule Management', 'Executive Coordination', 'Document Control'],
      social: {
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      name: 'Elsa Domingo',
      role: 'Operations Manager',
      department: ' Operations Department',
      bio: 'Full-stack developer passionate about creating seamless ecommerce experiences.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20lead%20developer%20portrait%20in%20modern%20tech%20workspace%2C%20confident%20software%20engineer%20wearing%20casual%20professional%20attire%2C%20contemporary%20office%20headshot%20with%20clean%20lighting%2C%20coding%20and%20innovation%20atmosphere&width=300&height=400&seq=dev-david&orientation=portrait',
      expertise: ['Workflow Optimization', 'Team Supervision', 'Logistics Management'],
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Via',
      role: 'Human Resources Officer',
      department: 'Human Resources Department',
      bio: 'Creative designer focused on user-centered ecommerce interface design.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20UX%20designer%20portrait%20in%20creative%20design%20studio%2C%20confident%20designer%20wearing%20modern%20casual%20attire%2C%20contemporary%20workspace%20headshot%20with%20artistic%20lighting%2C%20creativity%20and%20user%20experience%20atmosphere&width=300&height=400&seq=designer-lisa&orientation=portrait',
      expertise: ['Talent Acquisition', 'Employee Engagement', 'Policy Compliance'],
      social: {
        linkedin: '#',
        dribbble: '#'
      }
    },
    {
      name: 'Claudine De Guzman',
      role: 'Finance Officer',
      department: 'Finance Department ',
      bio: 'Data scientist turning ecommerce metrics into actionable growth strategies.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20data%20analyst%20portrait%20in%20modern%20office%20with%20analytics%20displays%2C%20confident%20data%20scientist%20wearing%20business%20casual%20attire%2C%20contemporary%20workspace%20headshot%20with%20clean%20lighting%2C%20data%20and%20insights%20atmosphere&width=300&height=400&seq=analyst-james&orientation=portrait',
      expertise: ['Financial Reporting', 'Regulatory Compliance', 'Budget Forecasting'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'I.T Officer',
      role: 'Information Technology',
      department: ' Information Technology Department',
      bio: 'Expert in managing IT infrastructure, cybersecurity, and technical support.',
      image: 'https://readdy.ai/api/search-image?query=IT%20professional%20working%20on%20computer&width=300&height=400&orientation=portrait',
      expertise: ['Network Management', 'Cybersecurity', 'Technical Support', 'System Administration'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Leadership <span className="text-yellow-400">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the experts who drive our company's vision and lead our talented teams to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-black/30 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-yellow-400 font-medium text-sm mb-1">{member.role}</p>
                  <p className="text-gray-400 text-xs">{member.department}</p>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-medium text-sm mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <div
                      key={platform}
                      className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-yellow-600 transition-colors cursor-pointer"
                    >
                      <i className={`ri-${platform}-line text-white text-sm`}></i>
                    </div>
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
