import React, { useState } from 'react';

const MGSRealtorHome = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MGS Realtor
              </h1>
            </div>

            <div className="hidden md:block">
              <span className="text-gray-600 text-sm font-medium">
                Your Trusted Property Partner
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="w-full bg-white overflow-hidden relative" style={{ height: 'calc(100vh - 64px)' }}>
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center z-10">
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto">
                  <div className="relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[40px] border-r-[40px] border-b-[30px] border-l-transparent border-r-transparent border-b-blue-600 animate-pulse"></div>
                    <div className="absolute top-6 w-16 h-12 bg-blue-500 rounded-sm mx-auto left-1/2 transform -translate-x-1/2 animate-pulse"></div>
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 translate-x-2 w-4 h-8 bg-white rounded-sm"></div>
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-x-4 w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4">
                  <div className="w-6 h-6 text-yellow-500 animate-bounce">
                    🔑
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-700">
                  Finding Your Dream Property
                </h3>
                <div className="flex items-center justify-center space-x-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <p className="text-gray-500 text-sm">
                  Loading property search...
                </p>
              </div>
            </div>
          </div>
        )}
        
        <iframe 
          src="https://www.har.com/idx/myquicksearch?sitetype=aws&cid=795304&allmls=n"
          className="w-full border-0"
          title="Property Search"
          style={{ 
            height: 'calc(100vh - 64px + 200px)', 
            marginBottom: '-200px' 
          }}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
};

export default MGSRealtorHome;