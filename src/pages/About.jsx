export default function About() {
  return (
    <section className="section">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent brand-accent">About Me</h2>
          <p className="text-white">My name is Ifeanyichukwu Oko Isu, but in the professional and tech community I am widely recognized as Ify Wigatechz. I am a passionate and versatile Full-Stack Web Developer, UI/UX Designer, and Digital Skills Trainer, based in Port Harcourt, Nigeria. My career is built around one clear vision: to create modern digital solutions that empower individuals, businesses, and communities to thrive in the digital age.</p>
          <p className="text-white">I specialize in front-end and back-end development, with a strong focus on technologies like React, Vite, TailwindCSS, MERN and serverless backends deployed on Vercel. My projects are not just about writing code — they are about delivering functional, scalable, and visually engaging products that solve real-world problems. Whether I am building a corporate website, an e-commerce platform, or an educational portal, I ensure every detail aligns with best practices in performance, security, and user experience.</p>
          <p className="text-white">As the founder of Ifywigatechz Academy, I am deeply committed to teaching and mentoring. My academy focuses on equipping learners, entrepreneurs, and aspiring developers with practical, hands-on skills in web development, UI/UX design, and digital marketing. I believe strongly in the mantra: “Learn fast. Build fast. Tech to success.” — a philosophy that pushes me and my students to combine speed with quality in everything we build.</p>
          <p className="text-white">Over the years, I have collaborated with clients and organizations on diverse projects across different industries. From real estate websites and construction company portfolios, to stamp concrete branding platforms and personal blogs, my work has always been about delivering solutions that reflect professionalism, creativity, and measurable impact.</p>
          <p className="text-white">Beyond coding and design, I am a strong advocate for community growth and knowledge-sharing. I believe that technology is one of the most powerful tools for empowerment, especially for young people in Africa. By mentoring others and creating opportunities for collaboration, I aim to contribute to a future where more people can access global opportunities through digital skills.</p>
          <p className="text-white">Looking ahead, my goal is to continue evolving as a developer, educator, and entrepreneur, building platforms that not only serve businesses but also inspire the next generation of digital creators. In every project I undertake, I bring a commitment to excellence, innovation, and integrity — qualities that define me both as a professional and as a person.</p>
          <p className="text-white">Mantra: <span className="text-primary">Learn fast. Build fast. Tech to success.</span></p>
        </div>
        <div className="card">
          <h3 className="font-semibold text-lg mb-3">Tech Stack</h3>
          <ul className="text-gray space-y-2 list-disc list-inside">
            <li>Frontend: React, Vite, Tailwind CSS</li>
            <li>Backend: MERN, Vercel Serverless APIs</li>
            <li>Payments: Paystack</li>
            <li>Tools: Git, Vercel, Figma, Postman</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
