import Image from 'next/image';

export default function Contact() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700 ">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Contact Me</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Hi! I'm a 3rd-year B.Tech student at Lovely Professional University (LPU). I'm passionate about software development and eager to connect with like-minded individuals, mentors, or collaborators.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                Feel free to reach out if you have opportunities, suggestions, or just want to chat about tech and development!
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              Whether you have a project in mind, need help, or just want to connect — send a message!
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input type="text" className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 dark:text-white" required />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input type="email" className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 dark:text-white" required />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea rows={4} className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 dark:text-white" required></textarea>
            </div>
            <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
