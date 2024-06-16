import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <Head>
        <title>Next-WPA</title>
        <meta name="description" content="Empowering Your Workplace Success" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <img src="/logo.svg" alt="Logo" className="h-10 w-[25%]" />

        <nav>
          <ul className="flex space-x-4">
            {["Home", "About Us", "Services", "Resources", "Contact Us"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="hover:text-blue-600"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </header>

      <section
        id="home"
        className="flex items-center justify-center h-screen bg-cover bg-center text-center text-gray-800"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md">
          <h1 className="text-5xl font-bold text-blue-600">
            Empowering Your Workplace Success
          </h1>
          <p className="mt-4 text-xl">
            Comprehensive support and resources for a thriving work environment.
          </p>
          <a
            href="#services"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md"
          >
            Get Started
          </a>
        </div>
      </section>

      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-600">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Employee Counseling",
                description:
                  "Supporting employees through confidential counseling services.",
              },
              {
                title: "Training Programs",
                description:
                  "Enhancing skills and knowledge through tailored training sessions.",
              },
              {
                title: "Conflict Resolution",
                description:
                  "Facilitating effective conflict resolution and mediation.",
              },
              {
                title: "Wellness Programs",
                description: "Promoting health and wellness in the workplace.",
              },
            ].map((service, index) => (
              <div key={index} className="p-6 bg-white shadow-md rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  {service.title}
                </h3>
                <p>{service.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-600 hover:underline"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-600">
            About Get Da App
          </h2>
          <Image
            src="/team-photo.jpg"
            alt="Our Team"
            width={600}
            height={400}
            className="mx-auto mb-8 rounded-lg shadow-md"
          />
          <p className="max-w-2xl mx-auto">
            We are dedicated to fostering a supportive and productive work
            environment. Our team of professionals provides comprehensive
            services to help you achieve your workplace goals.
          </p>
          <div className="flex justify-center mt-8 space-x-8">
            {[
              {
                title: "Integrity",
                description: "We adhere to the highest ethical standards.",
              },
              {
                title: "Support",
                description: "We provide unwavering support to our clients.",
              },
              {
                title: "Innovation",
                description:
                  "We embrace innovative solutions to workplace challenges.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">
                  {value.title}
                </h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-600">
            What Our Clients Say
          </h2>
          <div className="space-y-8">
            {[
              {
                quote:
                  "Next-WPA has transformed our workplace. The support and training have been invaluable.",
                author: "Client Name",
              },
              {
                quote:
                  "The wellness programs have significantly improved employee morale and productivity.",
                author: "Client Name",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg"
              >
                <p className="mb-4">"{testimonial.quote}"</p>
                <cite className="text-gray-700">- {testimonial.author}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-600">Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "eBooks",
                description:
                  "Downloadable resources to enhance your knowledge.",
              },
              {
                title: "Articles",
                description: "In-depth articles on workplace assistance.",
              },
              {
                title: "Webinars",
                description: "Online webinars covering various topics.",
              },
              {
                title: "Toolkits",
                description:
                  "Practical tools and resources for your workplace.",
              },
            ].map((resource, index) => (
              <div key={index} className="p-6 bg-white shadow-md rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  {resource.title}
                </h3>
                <p>{resource.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-600 hover:underline"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-600">
            Get in Touch
          </h2>
          <form className="max-w-xl mx-auto space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md h-32"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="mt-8">
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@next-wpa.com</p>
            <p>Address: 123 Main Street, City, State, ZIP</p>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-white shadow-md">
        <div className="container mx-auto text-center">
          <ul className="flex justify-center space-x-4">
            {["Home", "About Us", "Services", "Resources", "Contact Us"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="hover:text-blue-600"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
          <div className="mt-4">
            <p>&copy; 2024 Get Da App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
