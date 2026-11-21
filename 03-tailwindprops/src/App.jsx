function ProfileCard({ name, role, description, buttonText, onAction }) {
  return (
    <div className="w-72 bg-gray-300 rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">

      <div className="w-28 h-28 rounded-full bg-black mx-auto border-4 border-gray-300"></div>

      <h2 className="text-xl font-bold text-gray-800 mt-4">
        {name}
      </h2>

      <p className="text-blue-600 font-medium mt-1">
        {role}
      </p>

      <p className="text-gray-500 text-sm mt-3">
        {description}
      </p>

      <button
        onClick={onAction}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-5 hover:bg-blue-700 transition"
      >
        {buttonText}
      </button>

    </div>
  )
}

function App() {

  const teamMembers = [
    {
      name: "Ahmed",
      role: "Full Stack Developer",
      description: "Building dynamic web applications with frontend and backend technologies.",
      buttonText: "View Profile"
    },
    {
      name: "Usman",
      role: "Web Designer",
      description: "Designing attractive, modern, and user-friendly website interfaces.",
      buttonText: "Visit Me"
    },
    {
      name: "Ali",
      role: "Software Engineer",
      description: "Developing reliable software solutions through problem-solving and clean code.",
      buttonText: "Follow Me"
    },
    {
      name: "Umar",
      role: "ML Engineer",
      description: "Building intelligent machine learning models to solve real-world problems.",
      buttonText: "Contact Me"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-5">

      <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Meet Our Team
      </h1>

      <div className="flex flex-wrap justify-center gap-8">

        {teamMembers.map((member, index) => (
          <ProfileCard
            key={index}
            name={member.name}
            role={member.role}
            description={member.description}
            buttonText={member.buttonText}
            onAction={() => alert(`Hello ${member.name}!`)}
          />
        ))}

      </div>
    </div>
  )
}

export default App