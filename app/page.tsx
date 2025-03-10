import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="w-full md:w-1/4">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <div className="w-full aspect-[4/5] relative">
            <Image 
              src="/images/me.jpg" 
              alt="Ziyang Luo"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="p-6 bg-white">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Ziyang Luo</h2>
            <p className="text-gray-600 mb-2">PhD Candidate</p>
            {/* <p className="text-gray-600 mb-2">Department of Computer Science</p> */}
            <p className="text-gray-600">Hong Kong Baptist University</p>
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-3/4">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">About Me</h2>
          <div className="space-y-4 text-gray-200 leading-relaxed">
            <p>
              I am a final-year PhD candidate in Computer Science at{' '}
              <span className="inline-flex items-center gap-1">
                <Image 
                  src="/images/logos/hkbu.png" 
                  alt="HKBU Logo" 
                  width={15} 
                  height={15}
                  className="inline"
                />
                Hong Kong Baptist University
              </span>
              , advised by{' '}
              <a 
                href="https://www.comp.hkbu.edu.hk/~majing/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline"
              >
                Dr. Jing Ma
              </a>
              . Starting from 2025, I will be joining{' '}
              <span className="inline-flex items-center gap-1">
                <Image 
                  src="/images/logos/Salesforce.com_logo.svg.png" 
                  alt="Salesforce Logo" 
                  width={16} 
                  height={16}
                  className="inline"
                />
                Salesforce Research
              </span>
              {' '}as a Research Scientist. Previously, I was a visiting researcher at the National University of Singapore (2024), collaborating with{' '}
              <a 
                href="https://www.comp.nus.edu.sg/~mohan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline"
              >
                Professor Mohan Kankanhalli
              </a>
              .
            </p>
            <p>
              My research focuses on foundation models and artificial intelligence, with a particular emphasis on developing intelligent agents that can effectively interact with both digital and physical environments. I have published over 20 papers at top-tier AI conferences, including ICLR, CVPR, ICCV, ACL, and EMNLP.
            </p>
            <p>
              I hold a Bachelor&apos;s degree from Sun Yat-sen University (Guangzhou, China) and a Master&apos;s degree from Uppsala University (Sweden). For academic collaboration or inquiries, please reach out via email at cszyluo AT comp.hkbu.edu.hk or WeChat (ID: chiyeunglaw).
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Latest News</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-gray-400 pl-4">
              <p className="text-sm text-gray-400">March 2025</p>
              <p className="text-gray-200"><a href="https://videoautoarena.github.io/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">VideoAutoArena</a> is accepted by CVPR 2025.</p>
            </div>
            <div className="border-l-4 border-gray-400 pl-4">
              <p className="text-sm text-gray-400">January 2025</p>
              <p className="text-gray-200">Release popular GUI grounding benchmark <a href="https://gui-agent.github.io/grounding-leaderboard/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">ScreenSpot-Pro</a>.</p>
              <p className="text-gray-200"><a href="https://arxiv.org/abs/2405.00253" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">CodeHalu</a> is accepted by AAAI 2025.</p>
            </div>
            <div className="border-l-4 border-gray-400 pl-4">
              <p className="text-sm text-gray-400">September 2024</p>
              <p className="text-gray-200">3 papers are accepted by EMNLP 2024.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
