"use client"
import Image from "next/image";
import img4064 from "../public/images/IMG_4064.jpg";
import img4074 from "../public/images/IMG_4074.jpg";
import img4140 from "../public/images/IMG_4140.jpg";
import img4142 from "../public/images/IMG_4142.jpg";
import img4143 from "../public/images/IMG_4143.jpg";
import img4158 from "../public/images/IMG_4158.jpg";
import img7972 from "../public/images/IMG_7972.jpg";
import img7973 from "../public/images/IMG_7973.jpg";
import img7975 from "../public/images/IMG_7975.jpg";
import crowd from "../public/images/crowd.jpeg";

const TICKET_URL = "https://www.eventbrite.com/e/1762416438009?aff=oddtdtcreator";

export default function Home() {
  const gallery = [
    img4064,
    img4074,
    img4140,
    img4142,
    img4143,
    img4158,
    img7972,
    img7973,
    img7975,
  ];

  return (
    <div>
      {/* Hero with full-size logo */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-pink-100">
        <div className="max-w-6xl mx-auto px-4 py-24 sm:py-36 flex flex-col items-center justify-center text-center">
          <h1 className="sr-only">49th Annual Bridal Showcase</h1>
          <Image
            src="/logo.jpg"
            alt="49th Annual Bridal Showcase logo"
            width={1200}
            height={500}
            className="w-full max-w-5xl h-auto object-contain"
            priority
          />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#dates" className="px-6 py-3 rounded-full bg-pink-600 text-white font-medium shadow hover:bg-pink-700">See Dates</a>
            <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-pink-300 text-pink-700 font-medium hover:border-pink-400 hover:bg-white">Buy Tickets</a>
          </div>
        </div>
      </section>


      {/* Overview & Dates (combined) */}
      <section id="dates" className="scroll-mt-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Image src={gallery[0]} alt="Bridal Showcase overview" className="w-full h-auto lg:max-w-md mx-auto rounded-2xl shadow ring-1 ring-pink-200 bg-pink-50" priority />
          <div>
            <h2 className="text-3xl font-semibold text-pink-800">49th Annual Bridal Showcase — Overview</h2>
            <div className="mt-4 space-y-4 text-zinc-700 max-w-prose">
              <p>The 2026 Bridal Showcase in Rapid City gives brides-to-be and grooms the opportunity to meet the professionals who help make their event memorable. This annual event features photographers, florists, DJs, hotel and reception facility coordinators, jewelry professionals, wedding planners and officiants, beauty and makeup experts, and more.</p>
              <p>Whether you&#39;re planning your wedding or organizing a special event, the Bridal Showcase professionals can customize your experience to ensure your special day is anything but ordinary!</p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-pink-800">Event Date & Location</h3>
              <p className="mt-2 text-zinc-700">Plan to attend the <strong>49th Annual Bridal Showcase</strong> on <strong>Saturday, January 3, 2026</strong>, at the <strong>Best Western Ramkota Hotel and Conference Center</strong> in Rapid City, SD.</p>
              <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-5 py-2.5 rounded-full bg-pink-600 text-white font-medium hover:bg-pink-700">Get Tickets</a>
            </div>
          </div>
        </div>
      </section>

      {/* Tickets & Registration (combined) */}
      <section id="tickets" className="scroll-mt-24 bg-pink-50/60 border-y border-pink-200">
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-semibold text-pink-800">Buy Tickets & Registration</h2>
            <p className="mt-4 text-zinc-700 max-w-prose">Secure your spot and enjoy the full experience. Online registration automatically enters you into the prize drawings.</p>
            <ul className="mt-6 space-y-2 text-zinc-700 max-w-2xl">
              <li>General Admission Tickets: $5.00 per person (attendees 16 and under are free)</li>
              <li>Upgraded Admission Tickets — includes one admission ticket and one drink ticket: $8.00</li>
              <li>VIP Tickets — includes 2 Admission Tickets, 2 Drink Tickets and 2 guaranteed front row seats for the Runway Fashion Show at Noon: $28. <em>(Tickets are limited to the first 50 VIP ticketholders)</em></li>
              <li>Tickets Available at the Door the Day of Event: $7.50 per person</li>
            </ul>
            <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block px-6 py-3 rounded-full bg-pink-600 text-white font-medium shadow hover:bg-pink-700">Get Tickets on Eventbrite</a>
          </div>
          <Image src={gallery[2]} alt="Tickets and registration" className="w-full h-auto lg:max-w-md mx-auto rounded-2xl shadow ring-1 ring-pink-200 bg-pink-50" />
        </div>
      </section>

      {/* Highlights: Fashion & Prizes (combined) */}
      <section id="fashion" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Image src={gallery[3]} alt="Runway and prizes highlights" className="w-full h-auto lg:max-w-md mx-auto rounded-2xl shadow ring-1 ring-pink-200 bg-pink-50" />
          <div>
            <h2 className="text-3xl font-semibold text-pink-800">Highlights: Fashion Show & Prizes</h2>
            <div className="mt-4 space-y-4 text-zinc-700 max-w-prose">
              <p><strong>Fashion Show at Noon and 3 PM</strong> — Be inspired by the latest bridal attire as it takes the runway.</p>
              <div>
                <p className="font-semibold text-pink-800">Prizes & Giveaways</p>
                <ul className="mt-2 space-y-2 list-disc pl-5">
                  <li>Bride&#39;s — register for the <strong>$750 gift certificate</strong> from Riddle&#39;s Jewelry.</li>
                  <li>Grooms — register at the door for a <strong>50&quot; LED 4K Smart Fire TV</strong>. <em>(Must be present to win)</em></li>
                </ul>
                <p className="mt-2">Other drawings include gift baskets, dinner reservations, overnight hotel stays, gift cards, and more. Your online registration automatically enters you in the drawings.</p>
                  <Image src={crowd} alt="Crowd enjoying the Bridal Showcase" className="w-full h-auto lg:max-w-md mt-8 rounded-2xl shadow ring-1 ring-pink-200 bg-pink-50" />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Video */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 items-start">
          <div>
            <h2 className="text-3xl font-semibold text-pink-800">See the Magic</h2>
            <p className="mt-4 text-zinc-700 max-w-prose">A glimpse of the romance and inspiration you can expect at the Bridal Showcase.</p>
            <div className="mt-6 aspect-video rounded-2xl overflow-hidden shadow ring-1 ring-pink-200 bg-pink-100">

                <video
                    className="w-full h-full"
                    controls
                    poster="/logo.jpg"
                >
                    <source src="/media/bridal-showcase-2024.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
          </div>
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="scroll-mt-24 bg-white hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-semibold text-pink-800">Contact</h2>
            <p className="mt-4 text-zinc-700">Have questions or want to become a vendor? Send us a message.</p>
            <div className="mt-6 text-zinc-700">
              <p>Email: <a className="text-pink-700 underline" href="mailto:info@bridalshowcase.local">info@bridalshowcase.local</a></p>
            </div>
          </div>
          {/* <form className="bg-white rounded-2xl p-6 shadow ring-1 ring-pink-200 grid gap-4" onSubmit={(e) => e.preventDefault()} aria-label="Quick contact form (demo)">
            <label className="grid gap-1">
              <span className="text-sm text-zinc-600">Name</span>
              <input className="px-3 py-2 rounded-md border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="Your name" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-zinc-600">Email</span>
              <input type="email" className="px-3 py-2 rounded-md border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="you@example.com" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-zinc-600">Message</span>
              <textarea rows={4} className="px-3 py-2 rounded-md border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="Tell us how we can help" />
            </label>
            <button className="mt-2 px-5 py-2.5 rounded-full bg-pink-600 text-white font-medium hover:bg-pink-700">Send</button>
            <p className="text-xs text-zinc-500">Demo form — wired for design only.</p>
          </form> */}
        </div>
      </section>
    </div>
  );
}
