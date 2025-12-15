// components/Experience.tsx
export default function Experience() {
  // 工作经历数据
  const experiences = [
    {
      id: 1,
      company: "某科技有限公司",
      position: "前端开发工程师",
      period: "2023年1月 - 至今",
      description: "负责使用Next.js和React构建高性能Web应用，参与项目需求讨论和代码复审。"
    },
    {
      id: 2,
      company: "另一家互联网公司", 
      position: "初级前端开发",
      period: "2021年7月 - 2022年12月",
      description: "参与主要产品的前端开发，使用Vue.js框架，优化页面性能提升用户体验。"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">工作经历</h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-2 flex-col sm:flex-row">
                <div className="mb-2 sm:mb-0">
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  <p className="text-indigo-600 font-medium">{exp.position}</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-600 mt-4">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}