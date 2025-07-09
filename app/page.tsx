"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Section from "@/components/Section"
import TestimonialCarousel from "@/components/TestimonialCarousel"
import Image from "next/image"

export default function Home() {
  const testimonials = [
    {
      id: 1,
      quote:
        "ScadaDog transformed our legacy SCADA system into a modern, secure, and efficient operation. Their expertise in bridging OT and IT is unmatched.",
      author: "Sarah Johnson",
      title: "Plant Manager",
      company: "Advanced Manufacturing Corp",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "The IIoT data collection solution they implemented gave us real-time visibility into our operations. ROI was achieved within 6 months.",
      author: "Michael Chen",
      title: "Operations Director",
      company: "Energy Solutions Inc",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Their AI-powered predictive maintenance system has reduced our unplanned downtime by 40%. Exceptional technical expertise and support.",
      author: "David Rodriguez",
      title: "Maintenance Manager",
      company: "Industrial Dynamics LLC",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      id: 4,
      quote:
        "ScadaDog's team understood our complex requirements and delivered a solution that exceeded expectations. True industrial automation experts.",
      author: "Lisa Thompson",
      title: "IT Director",
      company: "Process Control Systems",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      id: 5,
      quote:
        "The cybersecurity implementation for our OT network was flawless. They know how to protect industrial systems without disrupting operations.",
      author: "Robert Kim",
      title: "Security Manager",
      company: "Critical Infrastructure Co",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      id: 6,
      quote:
        "From legacy modernization to cloud integration, ScadaDog handled our digital transformation with professionalism and expertise.",
      author: "Amanda Foster",
      title: "Chief Technology Officer",
      company: "Manufacturing Excellence Group",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.webp?height=1080&width=1920"
            alt="Industrial automation background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-black/80"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gray-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gray-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <span className="text-gray-200 text-sm font-medium">🚀 Industrial Automation Excellence</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
              Where IT Meets OT
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-100 max-w-4xl mx-auto font-light">
              Software Services with Industrial Strength
            </p>
            <p className="text-xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              At SCADADOG, we bridge the gap between automation, data, and intelligence to empower industries with
              cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/services"
                className="group bg-white text-black px-10 py-5 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  Explore Services
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/contact"
                className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "20+",
                label: "Years Experience",
                description: "Proven expertise in industrial automation",
                icon: "🏆",
              },
              {
                number: "50+",
                label: "Projects Delivered",
                description: "Successful implementations across industries",
                icon: "🚀",
              },
              {
                number: "10+",
                label: "Happy Clients",
                description: "Trusted by leading industrial companies",
                icon: "🤝",
              },
              {
                number: "24/7",
                label: "Support Available",
                description: "Round-the-clock technical assistance",
                icon: "⚡",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center bg-gray-50 border border-gray-200 rounded-full px-6 py-2 mb-6">
              <span className="text-gray-600 text-sm font-medium">⚡ Our Expertise</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 text-gray-900 bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions bridging operational technology and information technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "IIoT Data Collection",
                description: "Smart data acquisition from industrial systems with real-time processing",
                image: "/card1.jpeg?height=300&width=400",
                gradient: "from-gray-500 to-gray-500",
              },
              {
                title: "Application Development",
                description: "Custom industrial software solutions tailored to your needs",
                image: "/card2.jpeg?height=300&width=400",
                gradient: "from-gray-500 to-gray-500",
              },
              {
                title: "Operational  Intelligence",
                description: "Transform raw data into actionable insights and predictive analytics",
                image: "/card3.jpeg?height=300&width=400",
                gradient: "from-gray-500 to-gray-500",
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80`}></div> */}
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl filter drop-shadow-lg">{service.icon}</div>
                  </div> */}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  {/* <div className="mt-6 flex items-center text-gray-600 font-medium group-hover:text-gray-800 transition-colors">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Industry Expertise */}
      {/* <Section className="bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-gray-50 border border-gray-200 rounded-full px-6 py-2 mb-6">
              <span className="text-gray-600 text-sm font-medium">🏭 Industries We Serve</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Industry Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering specialized solutions across diverse industrial sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Manufacturing",
                description: "Smart factory solutions and process optimization",
                icon: "🏭",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "Energy & Utilities",
                description: "Power generation and distribution automation",
                icon: "⚡",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "Oil & Gas",
                description: "Pipeline monitoring and refinery automation",
                icon: "🛢️",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "Water Treatment",
                description: "Water quality monitoring and treatment systems",
                icon: "💧",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "Food & Beverage",
                description: "Process control and quality assurance systems",
                icon: "🍽️",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "Pharmaceuticals",
                description: "Compliance-focused automation solutions",
                icon: "💊",
                image
              },
              {
                name: "Mining",
                description: "Equipment monitoring and safety systems",
                icon: "⛏️",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "Transportation",
                description: "Fleet management and logistics automation",
                icon: "🚛",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-gray-50 to-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="relative h-32 mb-4 overflow-hidden rounded-xl">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl filter drop-shadow-lg">{industry.icon}</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section> */}

      {/* Client Logos */}
      <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Trusted by Industry Leaders</h2>
            <p className="text-lg text-gray-600">
              We're proud to work with some of the most innovative companies in industrial automation
            </p>
          </motion.div>

          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center text-center justify-items-center mx-auto">
              {[
                { name: "CCE-logo", logo: "/clients/cce-logo-stacked.svg?height=80&width=120" },
                { name: "nextra-energy", logo: "/clients/nextera-energy-logo.png" },
                { name: "plus-power", logo: "/clients/pluspower.webp" },
                { name: "exowatt", logo: "/clients/exowatt.avif" }
              ].map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex flex-col items-center justify-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={120}
                    height={80}
                    className="max-w-full h-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Certifications & Partnerships */}
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
              <span className="text-gray-600 text-sm font-medium">🏅 Certified Excellence</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Certifications & Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Recognized by industry leaders, we are certified partners with Canary, Ignition, and ISN, ensuring
              top-tier solutions and integrations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 items-center">
            {[
              {
                name: "Canary Labs",
                description: "Certified Partner for Industrial Data Historian Solutions",
                logo: "/CertifiedBadge.png?height=120&width=200",
                badge: "Certified Partner",
                color: "from-gray-600 to-gray-700",
                height: 120,
                width: 200,
              },
              {
                name: "Ignition Integrator",
                description: "Certified to deliver Ignition-based automation solutions",
                logo: "/certi1.png?height=60&width=60",
                badge: "Inductive Automation",
                color: "from-gray-700 to-gray-800",
                height:80,
                width:80

              },
              {
                name: "ISN Registered Contractor",
                description: "Verified for safety, compliance, and performance.",
                logo: "/certi2.png?height=60&width=60",
                badge: "Verified Contractor",
                color: "from-gray-500 to-gray-600",
                height:120,
                width:200
              },
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 text-center relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 rounded-full transform translate-x-16 -translate-y-16"></div>
                </div>

                {/* Certification Badge */}
                <div
                  className={`inline-flex items-center bg-gradient-to-r ${partner.color} text-white text-xs font-semibold px-4 py-2 rounded-full mb-6`}
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 001.414-1.414zm-4 4a1 1 0 010 2h8a1 1 0 010-2zm-4-4a1 1 0 012 0v8a1 1 0 01-2 0zm4 4h2a1 1 0 010 2v-2a1 1 0 01-2 0zm-4-4v2a1 1 0 012 0h-2a1 1 0 010-2zm4 4a1 1 0 002 0v-2a1 1 0 00-2 0zm-4 0h2a1 1 0 000 2v-2a1 1 0 00-2 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {partner.badge}
                </div>

                {/* Logo */}
                <div className="relative h-24 mb-6 flex items-center justify-center">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    width={partner.width}
                    height={partner.height}
                    className="max-w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{partner.description}</p>

                {/* Verification Icon */}
                <div className="mt-6 flex justify-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-gray-50 to-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Certifications</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "ISO 9001:2015", description: "Quality Management" },
                  { name: "OSHA 30-Hour", description: "Safety Training" },
                  { name: "NIST Cybersecurity", description: "Framework Compliance" },
                  { name: "IEC 62443", description: "Industrial Security" },
                ].map((cert, index) => (
                  <div key={cert.name} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex-shrink-0"></div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900 text-sm">{cert.name}</div>
                      <div className="text-gray-600 text-xs">{cert.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Testimonials Carousel */}
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
              <span className="text-gray-600 text-sm font-medium">💬 Client Success Stories</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from industry professionals who trust ScadaDog with their critical systems
            </p>
          </motion.div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </Section>

      {/* Technology Stack */}
      {/* <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-gray-50 border border-gray-200 rounded-full px-6 py-2 mb-6">
              <span className="text-gray-600 text-sm font-medium">🔧 Technology Stack</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Technical Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technologies and protocols for industrial automation solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Industrial Protocols",
                technologies: [
                  "Modbus RTU/TCP",
                  "OPC-UA",
                  "Ethernet/IP",
                  "PROFINET",
                  "DNP3",
                  "BACnet",
                  "MQTT",
                  "LoRaWAN",
                ],
                icon: "🔌",
                gradient: "from-gray-500 to-gray-600",
              },
              {
                category: "Development Platforms",
                technologies: [
                  "Python",
                  "C# .NET",
                  "JavaScript/Node.js",
                  "React/Next.js",
                  "Docker",
                  "Kubernetes",
                  "Azure IoT",
                  "AWS IoT Core",
                ],
                icon: "💻",
                gradient: "from-gray-500 to-gray-600",
              },
              {
                category: "Industrial Software",
                technologies: [
                  "Ignition SCADA",
                  "Wonderware",
                  "FactoryTalk",
                  "WinCC",
                  "Kepware",
                  "Matrikon OPC",
                  "Historian Systems",
                  "MES Integration",
                ],
                icon: "⚙️",
                gradient: "from-gray-500 to-gray-600",
              },
            ].map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stack.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                >
                  <span className="text-3xl">{stack.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{stack.category}</h3>
                <div className="space-y-3">
                  {stack.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-gray-500 to-gray-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section> */}

      {/* CTA Section */}
      <Section className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Bridge IT and OT?</h2>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Let's discuss how we can transform your industrial operations with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
