"use client"

import { motion } from "framer-motion"
import Section from "@/components/Section"
import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-us-bg.jpg?height=800&width=1600"
            alt="ScadaDog team background"
            fill
            className="object-cover opacity-20"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90"></div> */}
        </div>

        <div className="absolute top-20 left-20 w-72 h-72 bg-gray-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-3 mb-8">
              <span className="text-gray-200 text-sm font-medium">🏢 Our Story</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
              About ScadaDog
            </h1>
            <p className="text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
              Redefining industrial automation by seamlessly bridging the gap between OT and IT with cutting-edge
              solutions
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Mission Section */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At SCADADOG, we are redefining industrial automation by seamlessly bridging the gap between operational
                technology (OT) and information technology (IT). Our mission is to empower industries with cutting-edge
                technology solutions that transform data into actionable intelligence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that the future of industrial operations lies in the intelligent integration of systems,
                data, and processes. Through our innovative approach, we help organizations unlock the full potential of
                their industrial infrastructure.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-600 mb-2">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-600 mb-2">100+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-gray-50 border border-gray-200 rounded-full px-6 py-2 mb-6">
              <span className="text-gray-600 text-sm font-medium">👥 Meet the Team</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 bg-gradient-to-r from-gray-900 to-gray-900 bg-clip-text text-transparent">
              Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of engineers and specialists brings decades of combined experience in industrial
              automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Chief Technology Officer",
                role: "Industrial Automation Expert",
                image: "/placeholder.svg?height=400&width=400",
                bio: "15+ years in SCADA systems and industrial protocols",
              },
              {
                name: "Lead Software Engineer",
                role: "Full-Stack Developer",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Specializes in modern web technologies and industrial integration",
              },
              {
                name: "Systems Integration Specialist",
                role: "OT/IT Bridge Expert",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Expert in connecting legacy systems with modern infrastructure",
              },
              {
                name: "AI/ML Engineer",
                role: "Data Science Lead",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Develops intelligent solutions for industrial automation",
              },
              {
                name: "Cybersecurity Specialist",
                role: "OT Security Expert",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Protects industrial networks from modern cyber threats",
              },
              {
                name: "Project Manager",
                role: "Client Success Lead",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Ensures seamless project delivery and client satisfaction",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-500/20 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description: "Constantly pushing the boundaries of what's possible in industrial automation",
                icon: "💡",
              },
              {
                title: "Reliability",
                description: "Building robust solutions that perform consistently in demanding environments",
                icon: "🔧",
              },
              {
                title: "Security",
                description: "Prioritizing cybersecurity in every solution we develop and deploy",
                icon: "🔒",
              },
              {
                title: "Partnership",
                description: "Working closely with clients as trusted advisors and long-term partners",
                icon: "🤝",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Expertise Section */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep knowledge across multiple domains of industrial technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Industrial Protocols",
                items: ["Modbus", "OPC-UA", "Ethernet/IP", "PROFINET", "DNP3", "BACnet"],
              },
              {
                title: "Programming Languages",
                items: ["Python", "C#", "JavaScript", "Ladder Logic", "Structured Text", "SQL"],
              },
              {
                title: "Platforms & Systems",
                items: ["Windows", "Linux", "Docker", "Kubernetes", "AWS", "Azure"],
              },
            ].map((expertise, index) => (
              <motion.div
                key={expertise.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900">{expertise.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {expertise.items.map((item) => (
                    <span key={item} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Let's discuss how ScadaDog can help bridge the gap between your OT and IT systems.
            </p>
            <a
              href="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg"
            >
              Start the Conversation
            </a>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
