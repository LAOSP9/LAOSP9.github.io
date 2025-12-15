import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* 简历容器 */}
            <div className="max-w-4xl mx-auto px-6 py-12">

                {/* 个人信息头部 */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:mr-8 mb-6 md:mb-0">
                            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                                学
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">你的姓名</h1>
                            <p className="text-xl text-blue-600 mb-3">北京信息科技大学 · 大三学生</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
                                <p>🎂 2005年出生</p>
                                <p>🎓 2023年入学</p>
                                <p>🏫 电子信息科技大学</p>
                                <p>📚 电技2302班</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 教育背景 */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-100 pb-2">教育背景</h2>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                <span className="text-2xl">🎓</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">北京信息科技大学</h3>
                                <p className="text-blue-600 font-medium">电子信息工程 · 本科</p>
                                <p className="text-gray-600">2023年9月 - 至今（大三在读）</p>
                                <p className="text-gray-600 mt-2">班级：电技2302班</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 专业技能 */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-100 pb-2">专业技能</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-800 mb-2">前端技术</h4>
                            <ul className="space-y-1 text-gray-600">
                                <li>• HTML/CSS/JavaScript</li>
                                <li>• React/Next.js 框架</li>
                                <li>• Tailwind CSS</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-800 mb-2">后端技术</h4>
                            <ul className="space-y-1 text-gray-600">
                                <li>• Node.js 基础</li>
                                <li>• 数据库基础</li>
                                <li>• API 设计理念</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-800 mb-2">开发工具</h4>
                            <ul className="space-y-1 text-gray-600">
                                <li>• Git 版本控制</li>
                                <li>• VS Code 编辑器</li>
                                <li>• Chrome 开发者工具</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-800 mb-2">其他技能</h4>
                            <ul className="space-y-1 text-gray-600">
                                <li>• 团队协作能力</li>
                                <li>• 问题解决能力</li>
                                <li>• 持续学习能力</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 项目经验 */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-100 pb-2">项目经验</h2>
                    <div className="space-y-6">
                        <div className="border-l-4 border-blue-500 pl-6 ml-3">
                            <h3 className="text-xl font-semibold text-gray-800">个人在线简历网站</h3>
                            <p className="text-blue-600 font-medium">2024年12月</p>
                            <p className="text-gray-600 mt-2">
                                使用 Next.js + Tailwind CSS 技术栈开发的响应式个人简历网站，
                                具备现代化的UI设计和良好的用户体验。
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Next.js</span>
                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">响应式设计</span>
                            </div>
                        </div>

                        <div className="border-l-4 border-green-500 pl-6 ml-3">
                            <h3 className="text-xl font-semibold text-gray-800">学术课程项目</h3>
                            <p className="text-green-600 font-medium">2023年 - 至今</p>
                            <p className="text-gray-600 mt-2">
                                在校期间完成多个电子信息技术相关课程项目，包括电路设计、
                                编程实践和团队合作项目，积累了扎实的专业基础。
                            </p>
                        </div>
                    </div>
                </div>

                {/* 联系方式 */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-100 pb-2">联系方式</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="text-center">
                            <div className="bg-blue-50 p-4 rounded-lg inline-block">
                                <span className="text-3xl">📧</span>
                            </div>
                            <h3 className="font-semibold mt-2">邮箱</h3>
                            <p className="text-gray-600">2855197###.email@example.com</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-50 p-4 rounded-lg inline-block">
                                <span className="text-3xl">📱</span>
                            </div>
                            <h3 className="font-semibold mt-2">电话</h3>
                            <p className="text-gray-600">1851-XXX-XXXX</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}