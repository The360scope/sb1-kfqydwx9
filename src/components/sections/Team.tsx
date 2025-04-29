const teamMembers = [
    { name: 'Shawn Henry', role: 'CEO / Founder', image: 'https://storage.googleapis.com/msgsndr/8ubkuCoWLtkXYGj3FdoU/media/68112ee4b3d5833336cea013.jpeg' },
    { name: 'Corinna Foster', role: 'COO', image: 'https://storage.googleapis.com/msgsndr/8ubkuCoWLtkXYGj3FdoU/media/68112ee460b2253253dee39b.jpeg' },
    { name: 'Nick Lemberger', role: 'CMO', image: 'https://storage.googleapis.com/msgsndr/8ubkuCoWLtkXYGj3FdoU/media/68112ee4eb94a858520b43c1.jpeg' },
    { name: 'Kaitlyn Dawson', role: 'Creatives', image: 'https://storage.googleapis.com/msgsndr/8ubkuCoWLtkXYGj3FdoU/media/68112ee460b225e083dee39c.jpeg' },
    { name: 'Ana Katrina', role: 'Tech', image: 'https://storage.googleapis.com/msgsndr/8ubkuCoWLtkXYGj3FdoU/media/68112ee460b22528b6dee39d.jpeg' },
    { name: 'Danielle Brock', role: 'Copy', image: 'https://storage.googleapis.com/msgsndr/8ubkuCoWLtkXYGj3FdoU/media/68112ee4d5bace465799bd5d.jpeg' },
  ];
  
  const Team = () => {
    return (
      <section className="min-h-screen py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
          Meet Our Team
        </h1>
  
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center glass rounded-xl p-10 transition-transform duration-300 hover:scale-105 min-h-[350px]"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 object-cover rounded-full mb-6 shadow-lg"
              />
              <h3 className="text-2xl font-bold gradient-text leading-tight text-balance">
                {member.name}
              </h3>
              <p className="text-muted-foreground mt-2">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Team;
  