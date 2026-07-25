export default function Journey() {
  const timeline = [
    {
      year: "2024",
      title: "Making History",
      description: "Global Punjabi chart dominance with nonstop hits and worldwide fanbase.",
      features: ["Four You Album", "Softly Viral", "Punjabi Billboard Entries"],
      color: "bg-yellow-500"
    },
    {
      year: "2023",
      title: "Born to Shine Era",
      description: "Worldwide shows, viral music drops, and Aujla became an international superstar.",
      features: ["Way Ahead EP", "London & Canada Tours", "Millions of Streams"],
      color: "bg-red-500"
    },
    {
      year: "2022",
      title: "Rise of the GOAT",
      description: "Dropped back-to-back hits and established himself as a lyrical legend.",
      features: ["You Know It", "Players", "Game-Changing Collabs"],
      color: "bg-purple-600"
    },
    {
      year: "2021",
      title: "The Breakthrough",
      description: "Aujla went from rising talent to household name across the Punjabi industry.",
      features: ["Don't Look", "Chithiyaan", "Record-Breaking Numbers"],
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 w-full bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Karan Aujla Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            The evolution of a Punjabi superstar — from local talent to global icon.
          </p>
        </div>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-zinc-800"></div>

          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "justify-start" : "justify-start md:justify-end"
              }`}
            >
              <div
                className={`w-full md:w-5/12 pl-16 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-8 text-left md:text-right" : "md:pl-8 text-left"
                }`}
              >
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mb-4 ${item.color}`}
                  >
                    {item.year}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`flex items-center ${
                          index % 2 === 0 ? "justify-start md:justify-end" : "justify-start"
                        }`}
                      >
                        <span className="text-sm text-gray-500 dark:text-gray-500">
                          • {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-black border-4 border-yellow-500 rounded-full z-10"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            And the journey continues...
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
            Explore Albums
          </button>
        </div>

      </div>
    </section>
  );
}
