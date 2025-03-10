export default function Contact() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-8 text-white">Contact</h1>
      
      <div className="space-y-6">
        <div className="bg-gray-800/50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-white">Academic Email</h2>
          <div className="flex items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:cszyluo@comp.hkbu.edu.hk" className="text-blue-300 hover:underline">cszyluo@comp.hkbu.edu.hk</a>
          </div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-white">Personal Email</h2>
          <div className="flex items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:chiyeunglaw1@gmail.com" className="text-blue-300 hover:underline">chiyeunglaw1@gmail.com</a>
          </div>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-white">Social Media</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.436 14.723c-.099-.186-.351-.275-.614-.214-1.007.233-1.927.384-2.598.384-2.313 0-3.701-1.388-3.701-3.701 0-1.076.19-2.197.568-3.362.107-.324-.045-.684-.374-.684h-1.627c-.192 0-.35.135-.374.324-.432 3.38.666 6.177 5.508 6.177.872 0 1.855-.102 2.929-.308.263-.051.424-.305.283-.616zm-9.436-6.723c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5z"/>
              </svg>
              <a href="https://scholar.google.com/citations?user=VI8NeJEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">Google Scholar</a>
            </div>

            <div className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <a href="https://x.com/ChiYeung_Law" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">@ChiYeung_Law</a>
            </div>

            <div className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <a href="https://www.linkedin.com/in/ziyang-luo-681a17192/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">Ziyang Luo</a>
            </div>

            <div className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <a href="https://github.com/ChiYeungLaw" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">@ChiYeungLaw</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 