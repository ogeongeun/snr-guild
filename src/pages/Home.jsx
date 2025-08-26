import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    
       {
      title: '길드전',
      path: '/guild-defense',
      description: '길드전 방어팀 공격팀 추천',
      emoji: '🛡️'
    }
    

   
    
    
    
   

  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          세븐나이츠 리버스 공략 도우미 
          <p className="text-center text-xs text-red-500 mb-4 italic">
            본 콘텐츠는 천우회 길드 전용이며, 무단 사용 및 복제를 금합니다.
          </p>
        </h1>
        <p className="text-center text-sm text-gray-500 mb-6 italic">made by 건근본</p>
<Link to="/voodoo">
  <div className="text-center text-lg font-bold text-purple-700 bg-purple-100 rounded-xl py-2 mb-6 shadow-sm hover:bg-purple-200 cursor-pointer transition">
    🧙‍♂️ 1급 비밀 부두술
  </div>
</Link>
        {/* 카드 리스트 */}
     <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
 
          {features.map((feature, index) => (
            <Link
              to={feature.path}
              key={index}
              className="bg-white shadow hover:shadow-lg rounded-xl p-5 transition transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-2">{feature.emoji}</div>
              <h2 className="text-lg font-semibold text-gray-800">{feature.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* 오른쪽 하단 마크 */}
      <div className="absolute bottom-2 right-4 text-xs text-gray-400">
        sj
      </div>
    </div>
  );
};

export default Home;
