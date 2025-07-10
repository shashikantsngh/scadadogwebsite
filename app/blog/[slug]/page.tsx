"use client"

import { motion } from "framer-motion"
import Section from "@/components/Section"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Blog post data - in a real app, this would come from a CMS or database
const blogPosts = {
  "how-i-bypassed-ges-fancy-software-with-virtual-jumper-wires": {
    id: 1,
    title: "How I Bypassed GE’s Fancy Software with virtual Jumper Wires",
    excerpt:
      "GE’s turbine controls were bypassed using virtual I/O and custom software to spoof wind vane signals, enabling precise wake steering without compromising warranties or systems.",
    content: `
    TLDR; GE’s PLC logic forces outputs on the Digital Output modules that are not in use in order to block other logic running on the same PLC. I bypassed it using virtual IO module and a custom software running on the PLC to spoof the signal of a windvane and control the turbines wake steering.
    
    Our story begins with an idea. Can a wind turbines wake reduce the power output of a wind turbine behind it?
![https://www.empireengineering.co.uk/exploring-wake-losses-in-offshore-wind/](/blogs/turbines.jpeg)

According to researchers at the National Research Energy Labs (NREL), it could. It could have an effect of up to 14%, according to the paper we published in 2019. My contribution to the seminole study was very trivial. In fact I didn’t even know it was being crafted at the time. My job was to deliver the engineering solution and the data needed for the study. A much more straightforward thing to achieve for an engineer with little knowledge of the science at the time. My goal was to somehow make it possible to steer the wake of one turbine around the face of the other.

## My Brilliant Boss
He used a tiny plastic novelty wind turbine model he had on his desk, and a pencil. He propped them up and explained how wake steering works. After the hand waving, he leaned back on his squeaky office chair, and took a look outside of his window. He stared into the empty parking lot and pieced together his plan to use the wind vane to hijack the controls of a multi-million dollar piece of machinery.

The problem is that GE didn’t want anyone messing around with the controls alogirthm that they worked so hard on to build. It was designed to follow the optimal wind direction to output the most power the turbine can. And for sure, trying to reprogram it would void the warranty on the equipment. So instead the answer must be to trick the wind vane sensor that the optimal direction the wind is coming from is not where it thinks it is. This was obvious to my Boss because he saw wind turbines in the past steering all over the place when the wind vane was damaged.

## So Now What?

The same model wind vane was installed on most of the GE wind turbines.
![Hybrid XT Push-Pull Vane](/blogs/technical-drawing.jpeg)

The specific model was the Hybrid XT Push-Pull Vane. This meant that I had two cables from the wind vane (Yellow, White) that send a degree signal to the GE control software.
![Hybrid XT Push-Pull Vane](/blogs/circuit-operation.jpeg)

The wires are inserted into a digital input module on the Bachmann Process PLC installed on the GE ESS wind turbines. For a full list of parts on a GE ESS wind turbine see here.

![Bachmann PLC with a Digital Input Module](/blogs/bachman-plc.jpeg)

# Wind Vane Details

The Model 7894 Push-Pull Hybrid XT Vane is designed as a direct replacement for IceFree™3 wind vanes, compatible with NPN and PNP controllers. It provides two output signals in push-pull format, allowing current sourcing and sinking for wide compatibility.

![Wind Vane Dithering Control https://www.manualslib.com/manual/1639611/Nrg-Systems-Hybrid-Xt-Vane.html?page=25#manual](/blogs/wind-vane.jpeg)


# Output signals:
• Yaw Right / Yaw Left (VL) → White wire
• Upwind / Downwind (VR90) → Yellow wire

Most wind vanes are under-damped, causing them to move erratically due to turbulence. Some turbine control systems rely on this motion (dithering) to estimate the average wind direction by measuring the time spent in left vs. right positions. The Model 7894 XT vane has a stable output, reducing erratic movements and improving wind direction tracking. It generates a compatible dithered signal for controllers that require dithering.

The duty cycle of the PWM output signal is used to indicate wind direction:
• 0–160 degrees → 100% duty cycle
• 180 degrees → 50% duty cycle
• 200–359 degrees → 0% duty cycle
When the vane detects correct wind alignment, the output duty cycle stabilizes. This method is more accurate and a stable tracking of wind direction compared to under-damped sensors.

## What About the Controller?

So even though I have these signal wires I still need to be able to somehow spoof them. The key here lied in a clever idea. I cant take all of the credit to be honest. I was in Boston sitting in a training session with an instructor that was going over the details of the Bachmann PLC.

After trying out a very European coffee from a European break room, with some very polite germans I returned back to the conference room. The 5 day training was held in the Boston branch office no the Bachmman headquarters in germany. Either way they had a very talented developer explain the intricate layers of control and flexibility the Bachmann PLC has. He mentioned the debugging capabilities and even a very interesting feature that allowed a user to simulate IO’s in real time.

I asked, “Can I create a virtual IO card that looks like a real signal to the software?”. With a very matter of fact look on his face he mentioned that it is designed to mimic a real IO device, and as far as the software is concerned it is a real signal from an external sensor. I then went on to ask details about spoofing signals, and how I could use a configuration file to boot up the virtual IO.

After testing, and troubleshooting on a local PLC at my desk I was able to spoof a signal. I made sure that the inputs expected by GE software running on the Bachmann PLC came from a virtual input module, I did this by changing the module ID of the real module and assigning the ID to the virtual module. The next step was to create another piece of software that ran on the Bachmann PLC alongside the GE Software. This code would pass all the inputs from the physical module to the GE Software by feeding the physical inputs to the virtual input module. I tested the software and made sure that it would boot up and wouldn’t cause any issues with the GE Software. Finally, I edited my program to modify the two inputs from the wind vane by adjusting the VR90/VL values so that the final output would provide a wind direction offset in the amount I desired.

## Final Steps
To put it all together I had to create an installation script that did the following:

• Connect to Bachmann PLC
• Add/Configure a virtual IO
• Swap ID of Digital Input Module, and Virtual Module
• Install “Custom Wake Steering ByPass” software program
• Start up the “Custom Wake Steering ByPass”
• Save settings and reboot the Bachmann PLC

I wrote the script as a batch file that could run through a list of IP addresses at the Site (Wind Turbine IP addresses), and establish a SSH terminal with the PLC. I completed the steps using terminal commands defined by Bachmann’s operator terminal menu. I then initiated file transfers for the “Custom Wake Steering ByPass” program installation. Finally the changes are saved and a reboot is issued. I also created a step where I checked it was running once the PLC booted back up.
---`,
    date: "2024-01-15",
    category: "Industrial Automation",
    readTime: "6 min read",
    image: "/blogs/image1.jpeg?height=600&width=1200",
    author: "Hector Lopez",
    featured: true,
    tags: ["SCADA", "Python", "Modbus", "Custom Development", "Industrial Automation"],
  },
  "building-an-integration-for-the-datadog-marketplace": {
    id: 2,
    title: "Building an Integration for the DataDog Marketplace",
    excerpt:
      "Built a DataDog Marketplace integration by navigating partner approval, custom repo setup, CLI tooling, and code reviews—offering scalable observability for DevOps and SecOps teams.",
    content: `
## Building an Integration for the DataDog Marketplace

Are you Planning to Build a DataDog Integration ? Maybe My Experience can Answer Some Questions.

Our mission is to empower businesses with intelligent, secure, and scalable automation solutions that drive operational excellence and foster growth. We achieve this by leveraging our expertise in both OT and IT, enabling us to deliver comprehensive, end-to-end solutions tailored to your unique needs.
## Intro
A few years ago in 2018 I began using DataDog’s Observability platform in the workplace. I noticed the simplicity and intuitive UI and said ‘…alright not bad’ . It wasn't long until I dealt with their customer service and thats when I realized this company had something special going on. I invested as soon as they went IPO in 2019. They have been growing steadily like I knew they would. I was recently motivated to build an integration for a market that they have yet to address. Before I started the process I was a bit unaware of what I was going to encounter. I am writing the post I wish I had read when I started my journey a few months ago.
## Background
A few years ago in 2018 I began using DataDog’s Observability platform in the workplace. I noticed the simplicity and intuitive UI and said ‘…alright not bad’ . It wasn't long until I dealt with their customer service and thats when I realized this company had something special going on. I invested as soon as they went IPO in 2019. They have been growing steadily like I knew they would. I was recently motivated to build an integration for a market that they have yet to address. Before I started the process I was a bit unaware of what I was going to encounter. I am writing the post I wish I had read when I started my journey a few months ago.
A custom check is great for a unique application , but if its something others can benefit from like a generic application then developers can build a DataDog Custom Agent-Integration. The integration is a bit more polished than a local custom check and requires a few more hoops to jump through. Its always great to just check the public DataDog Integration GitHub Repo to see if your integration doesn’t already exist.
The next level is a Marketplace Integration. It is just a custom integration that is committed to the private repo called “DatDog/Marketplace”. (more on deploying this later). DataDog Technology Partners are given access to these repos to develop their offering. Some extra steps involved are figuring out the pricing and licensing agreements.
## Background
A few years ago in 2018 I began using DataDog’s Observability platform in the workplace. I noticed the simplicity and intuitive UI and said ‘…alright not bad’ . It wasn't long until I dealt with their customer service and thats when I realized this company had something special going on. I invested as soon as they went IPO in 2019. They have been growing steadily like I knew they would. I was recently motivated to build an integration for a market that they have yet to address. Before I started the process I was a bit unaware of what I was going to encounter. I am writing the post I wish I had read when I started my journey a few months ago.
## Process Steps
1. Connected with DataDog Sales and pitched my integration idea. They rescheduled a meeting to discuss the Marketplace.
2. Connected with DataDog Technology Partner program team , pitched my integration idea and got approval to start as a  Technology Partner.
3. Received confirmation emails and had to login into the Technology Partner portal with my account details. I then followed the steps to request a sandbox account.
4. Received an email with confirmation that my account was ready to use and then logged into www.datadog.hq to access the console for our sandbox account.
5. I then created a Github account linked to a new Github Organization account so that my team and I could use it to develop our integration. We sent the development accounts to our development team contact. After a couple days we had access to the ‘DataDog/marketplace’ repo.
6. Cloned the ‘datadog/marketplace’ repo
7. Read through the developer guide for integration setup. It was a bit confusing at first but the main take away is that the ddev cli utility has built in functions to guide you through the setup of a new integration and validate it as much as possible. The integration can be setup completely in a docker container and tested. The tooling isn’t that bad but it does require some careful reading.
8. Created a PR request on the ‘datadog/marketplace’ that tried to merge the the new folder we built with the integration in it.
9. We worked back and forth on all of the nuances we got wrong. I spent a lot of time copying from other completed integrations and leveraging some ideas as what the format should be.
10. We created vectorized logos, screenshots, and supporting documentation
11.A DataDog dashboard was created on the console that had all the widgets to present the metrics. Then a JSON file of the dashboard was exported (pretty printed) and stored with the integration.
12. A legal document EULA outlined the terms of usage for the integration.
13. I was surprised how thorough the code review was. They provided feedback from python syntax to layout of the readme.md
## In Review
So far the process has been smooth. I admire the extensive documentation and the focus on developer support. I sometimes have to figure out the nuance details on my own like any ‘real programmer’ would but I do feel like any major roadblocks could be solved by either reaching out to the team or diving into existing code from other integrators.
I have seen DataDog re-invest in new features over the years and its marketplace seems like its going to be very well supported. DataDogs development framework lends itself to great external collaboration. I predict that they will have many more offerings and continue to perfect the developer support.
I asked many founders and integrators how they felt about marketplace offerings. The overwhelming response has been “Its better to control your own destiny” . For most people this is the right approach. I do see a benefit to partnering with DataDog’s marketplace to reach a growing market of DevOps and SecOps professionals and build a proof of concept that can be distributed rapidly. I may one day develop a more performant product outside of the DataDog Integration. But I would still want to provide inter-operability to this growing platform.    `,
    date: "2021-05-21",
    category: "System Integration",
    readTime: "4 min read",
    image: "/blogs/datadog-poster.png?height=600&width=1200",
    author: "Hector Lopez",
    featured: true,
    tags: ["DataDog", "Integration", "OPC-UA", "Monitoring", "Python"],
  },
  "legacy-integrations-hacking-defunct-secondwind-scada": {
    id: 3,
    title: "Legacy Integrations: Hacking a Defunct SecondWind SCADA",
    excerpt:
      "TLDR: Automating GUI interactions for a defunct SCADA HMI allowed us to make the wind farm dynamically dispatch-able. This allowed us to make money on an older site by renegotiating the PPA without upgrading investing in a new SCADA system.",
    content: `
# Legacy Integrations : Hacking a Defunct SecondWind SCADA

TLDR: Automating GUI interactions for a defunct SCADA HMI allowed us to make the wind farm dynamically dispatch-able. This allowed us to make money on an older site by renegotiating the PPA without upgrading investing in a new SCADA system.
## Where it began…
There was a company that sold a SCADA (Supervisory Control and Data Acquisition) application called SecondWind specifically for the control and operation of wind turbines at a wind farm. By 2010 the system was severely outdated but owners of the SCADA application where locked into it because of its proprietary communication to the control systems on the wind turbine. A snippet from an outdated press release can be seen below:
“Our ADMS Wind SCADA and Wind Turbine Monitoring Systems are excellent technologies with a significant purpose in today’s growing renewable energy market,” said Second Wind CEO Larry Letteney. (see article here)
They where bought out by another company, CG-automation, that stopped supporting the application in any meaningful way. The application ran on Windows 2003 and polled a series of wind turbine controllers sequentially to draw the state of the turbine on a GUI (Graphical User Interface) that had text-boxes, and buttons to send back control signals in order to manage individual turbine states and the sites over-all power output.yzing network traffic between the SCADA server and turbines:
## How It Worked
When a wind farm is bought or built there is usually a contract to secure a certain amount of power from that wind farm over the course of some time. It is called a Power Purchase Agreement (PPA) . The PPA’s are common but there are merchant style wind farms who are not setup with a contract (I wont be discussing those much here). The PPA for this wind farm included the method to dispatch the site through a phone call. (Yes, a phone call). The operators would receive a phone call from the Independent Service Operator (ISO), a regulatory body that manages the approved output of energy produced on the grid, and then they would remote into the HMI (Human Machine Interface) and enter the set-point requested by the ISO. The ability to follow the set-point within a certain amount of time gave some leeway to this outdated process. For the most part it worked.
## Challenges
The site came up for PPA renewal. The ISO now had an API (application programmable interface) and was providing incentives to operators who would set up new PPA’s without the need for phone calls. So the question was asked to the SCADA controls team : Can we dispatch this SecondWind site dynamically through the use of an API, without spending any money upgrading the site or its out-dated SCADA application?

The initial reaction of my manager was, “No! We wont support that.” . But, then he spoke to his new employee who came over from IT and asked is there something we can do? I immediately said, “Yes”. All I needed was an agent that could automate the manual entry of an integer into the HMI’s set-point input-box. I would then simulate the proper button clicks to approve the change. The agent would receive the set-points through an API client that would route the signal from an internet facing business network down into the control network at the site. (Easy, peasey) Here where some things to consider :
1. Older Version of Microsoft Windows
2. Multiple versions of the SecondWind HMI
3. Locating windows GUI form using Spy++
4. Running along-side a Human Dispatcher (Raise Conditions)
5. End-to-End testing between a Business Network and Control Network
6. Operating (ICS) Industrial Control Systems with a hacky solution : Safety , Safety, Safety!
## Creating an API Client 
The ISO provided an API endpoint. I was hoping it was REST but it turned out to be a complicated SOAP endpoint. After hours of XML I built a contract in .NET to to handle the calls and set the appropriate polling rate to be every 15 minutes. (This is typical for most power markets). The response contained the timestamp and set-point. A handshake process was required to validate the set-point was received. I would reply with the set-point feedback with another prebuilt soap POST. The communication of this API client would require a secure certificate that was issued by the ISO. Every API submission had to be first validated by sending the security information as well. The way these API’s are set up can vary. Luckily we had example clients from the ISO and it was pretty easy to test this part of the project
The API client was hosted in our datacenter at the time. I added a few other features outside of just being a client :
1. Only one of its kind can be running on the machine at any given time , this prevented double set-points to be sent to the site.
2. Rolling log files to validate any set-point sent and to track if there was any errors.
3. Email notifications on any errors.
4. Watchdog service to monitor the API client if it every had issues as a precaution, also it would send email notification if the API did not reply every 15 minutes with a set-point.
5. Distribution of redundant services across multiple servers with a RabbitMQ topic to validate that at least one service is running.

## Routing Into A Control Network
Most Wind Farm operators will have a tiered network architecture. A business layer, control layer and device layer. They are seperated by firewalls and other security measures. Getting my signal from a datacenter server on the business layer all the way to the control network was not too bad.
Most sites already have these systems in place to send signals to a Park PLC (Programmable Logic Controller). The Park PLC (in this case a Modicon M1) can do several tasks but one of the basic tasks is to send signals directly to the wind turbines to reset faults or apply some type of site control on-top of what the SCADA is meant to do. These PLC’s use standard protocols to receive values (Modbus, OPC, DNP3). The ISO’s set-point was sent to the PLC using Modbus over ethernet. The API client server was whitelisted by the network team to send a signal down into the Park PLC.
![Modicon M1 CPU Momentum from Schneider Electric ](/blogs/modicon-m1-cpu.jpeg)

By sending the signal through the Modbus protocol I could reduce the attack vectors for a cyber criminal since its relatively difficult to “root” a PLC with Modbus traffic. Modbus is an open protocol and relatively easy to build apps against. (check out a great dotnet library for it).

The set-point would be embedded in a Modbus protocol tcp packet using 2 Modbus ‘holding’ registers, 16-bits each, to send a 32-bit set-point value. Other Modbus settings need to be considered such as bit-order and endianness. (more on Modbus)

The PLC is then programmed using Schneider Electric’s Unity Pro IDE. Something that I didn’t realize at first is that all of these PLC brands will have specific programmers. They usually are designed with specific chipsets that require a licensed utility to re-program them. (great for safety and vendor-lock-in)

![Unity Pro XL ScreenShot from PLCTutorials](/blogs/unity-pro-xl.jpeg)

The Unity program allows the user to connect to a PLC on the network and load new programming logic to the PLC. Once loaded the PLC will reboot and run its program managing all the IO and logic. For this project all I had to do was use the PLC to route my signal back to the SecondWind host computer on the control network. The PLC has two network cards (incoming from business layer) and a control layer network card. The Modbus/TCP register is read on every scan of the PLC logic (in milliseconds) and is then moved over to another Modbus/TCP connection on a control network IP address. Similar communication can be done for Modbus (serial) through a function block. Or create a custom TCP pack and send it over ethernet using functions blocks.

![Modbus Server Example on Unity Pro, Image from PLC Support](/blogs/modbus-server-example-on-unity-pro.jpeg)

## Integrating with SecondWind HMI
As mentioned before the set-point is captured with an API and routed into a PLC then relayed over Modbus to the host computer running the SecondWind HMI. At this point the agent I built running on the HMI is a hosting a Modbus server. The Modbus server is part of the agent that is accepting Modbus data on a pre-defined register. It captures the values on multiple holding registers and converts it into an int32 value. (Remember the feedback signal?) The agent also returns values to the PLC as a feedback set-point value.
The agent is built to take the set-point and then log the value it is reading as it changes. On a change of the set-point on the Modbus register it runs a routine to insert the value into the HMI’s SecondWind GUI. The goal here is to run through a series of commands that will emulate a user on the computer that clicks through the form and inserts the set-point. (This is also known as Robotic Process Automation, RPA .)

## Lets identify the clicks…
The SecondWind application could only run on Windows 2003, this presented some challenges. I had to upgrade the local .NET 1.1 framework to build an agent that could support the libraries I wanted to use. After much research around compatibility issues I built the courage to continue with it. I then used a Windows Interop and Windows Handler libraries to be able to grab access to the hWnd (handler) of the SecondWind form control.
1. Detect the process that is running “SecondWind” . This allowed me to make sure the app is running and identify the Process ID (PID).
2. Using the PID grab on to the windows form handle (hWnd).
3. Detect the name of the windows form , this gave me the title of the application. I used this to determine the version of the form I was dealing with. ie. “SWI Supervisory Computer 2.1.0” , or “SWI Supervisory Computer 2.1.2”
4. This is when I needed to use an old Microsoft utility called “Spy++”. It allowed me to detect the forms and its sub controls . By walking through the windows handler (hWnd) , I could pick out which object in the array to create another handle for and then finally access the property of the control object like an input-box.

![Example of Spy++](/blogs/example-of-spypp.jpeg)

The code I wrote is still proprietary so unfortunately I cant give away to much of the details but the idea is pretty simple. With the access to the form properties it is relatively easy to create a sequence of writing to to the input-box and clicking on the form buttons using the Windows Messaging library for the form controls. These methods have gotten a lot easier with the introduction of .NET 5.
Additional features:
1. Install the agent as a windows service
2. Slow down the form interactions
3. Create “writing and reading” sequence steps to validate what has been sent to the form .
4. Make sure that only one target application is running
5. Create different sequences for different versions of the target application ( form arrays/properties could be different and require another walkthrough with spy++).
6. Build a redundant service to “watch” the first service and make sure its running.
7. Implement a rolling-log file for error handling using Serilog. (rolling so that it doesn’t fill up the hard drive over time)
8. Modbus feedback and heartbeat signal (incremental value) to validate the PLC is still accessible and communicating (polled ever 5 seconds).
## Summary
By applying some windows form automation and tying it to an API connection we where able to renegotiate a power purchase agreement and make a legacy SCADA application for a wind farm dynamically dispatch-able. Considerations around redundancy and reliability where taken into account. As similar systems around the country begin to age owner/operators need to stay address what methods will be put in place to remain competitive in the renewables market.
    `,
    date: "2021-01-18",
    category: "Legacy Systems",
    readTime: "9 min read",
    image: "/blogs/legacy-integration.jpeg?height=600&width=1200",
    author: "Hector Lopez",
    featured: true,
    tags: ["Legacy Systems", "Reverse Engineering", "SCADA", "Wind Energy", "Data Migration"],
  },
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover opacity-25" />
          {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-black/80"></div> */}
        </div>

        <div className="absolute top-10 left-10 w-20 h-20 bg-gray-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gray-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <span className="text-gray-200 text-sm font-medium">{post.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">{post.title}</h1>
            <div className="flex items-center justify-center gap-6 text-gray-200 mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{post.readTime}</span>
              </div>
            </div>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">{post.excerpt}</p>
          </motion.div>
        </div>
      </Section>

      {/* Article Content */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8 not-prose">
              {post.tags?.map((tag) => (
                <span key={tag} className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>

            {/* Article Content */}
            <div
              className="prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split("\n")
                  .map((line) => {
                    if (line.startsWith("# ")) {
                      return `<h1 class="text-3xl font-bold mt-8 mb-4 text-gray-900">${line.substring(2)}</h1>`
                    } else if (line.startsWith("## ")) {
                      return `<h2 class="text-2xl font-bold mt-6 mb-3 text-gray-900">${line.substring(3)}</h2>`
                    } else if (line.startsWith("### ")) {
                      return `<h3 class="text-xl font-bold mt-4 mb-2 text-gray-900">${line.substring(4)}</h3>`
                    } else if (line.startsWith("```")) {
                      if (line.includes("python") || line.includes("javascript") || line.includes("yaml")) {
                        return '<pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4"><code>'
                      } else if (line === "```") {
                        return "</code></pre>"
                      }
                      return ""
                    } else if (line.startsWith("- **") && line.includes("**")) {
                      const match = line.match(/- \*\*(.*?)\*\* - (.*)/)
                      if (match) {
                        return `<li class="mb-2"><strong class="text-gray-900">${match[1]}</strong> - ${match[2]}</li>`
                      }
                      return `<p class="mb-4 text-gray-700 leading-relaxed">${line}</p>`
                    } else if (line.startsWith("![") && line.includes("](")) {
                      const [, alt, src] = line.match(/!\[(.*?)\]\((.*?)\)/)!;
                      return `
    <div class="my-8 flex flex-col items-center">
      <img
        src="${src}"
        alt="${alt}"
        class="rounded-lg shadow-md max-w-full"
      />
      <span class="mt-2 text-gray-500 text-sm">${alt}</span>
    </div>`;
                    } else if (line.trim() === "") {
                      return "<br>"
                    } else {
                      return `<p class="mb-4 text-gray-700 leading-relaxed">${line}</p>`
                    }
                  })
                  .join(""),
              }}
            />

            {/* Share Section */}
            <div className="border-t border-gray-200 pt-8 mt-12 not-prose">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Share this article</h3>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                      Twitter
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367 2.684z"
                        />
                      </svg>
                      Copy Link
                    </button>
                  </div>
                </div>
                <Link
                  href="/blog"
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  ← Back to Blog
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Related Articles */}
      <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">Related Articles</h2>
            <p className="text-lg text-gray-600">Continue exploring our technical insights</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(blogPosts)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 3)
              .map(([slug, relatedPost], index) => (
                <motion.article
                  key={slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <Link href={`/blog/${slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-600 px-3 py-1 rounded-full text-xs font-bold">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <time>
                          {new Date(relatedPost.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                        </time>
                        <span>•</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                </motion.article>
              ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
