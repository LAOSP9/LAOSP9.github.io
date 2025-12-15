// components/Hero.tsx
export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        {/* 头像 - 请确保在public文件夹下有名为avatar.jpg的图片 */}
        <img 
          src="/avatar.jpg" 
          alt="个人头像" 
          className="mx-auto rounded-full w-32 h-32 border-4 border-white shadow-lg mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">你的姓名</h1>
        <p className="text-xl mb-6">你的职位（例如：前端开发工程师）</p>
        <div className="flex justify-center space-x-4">
          <a href="mailto:your-email@example.com" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition duration-200">
            联系我
          </a>
          <a href="https://github.com/yourusername" className="bg-indigo-700 px-6 py-2 rounded-lg font-medium hover:bg-indigo-800 transition duration-200">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}