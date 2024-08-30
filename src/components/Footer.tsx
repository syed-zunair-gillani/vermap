import React from "react";
import Container from "./ui/container";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-[#f7f7f7] pt-[48px] border-t-[1px] border-gray-300">
      <Container>
          <div className="grid md:grid-cols-3">
            {
              footerNav?.map((item,idx)=>(
                <div key={idx}>
                  <h6>{item.title}</h6>
                  <ul className="mt-3">
                    {
                      item?.links.map((link,id)=>(
                        <li key={id} className="font-light text-gray-500 py-1.5">
                          <Link href={'/'+link.href}>{link.label}</Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </div>
          <div className="border-t-[1px] border-gray-200 flex justify-between py-7 mt-10">
          <div className="flex items-center gap-6 text-sm font-light">
            <p>© 2024 vermap, Inc.</p>
            <ul className="flex items-center gap-6">
              <li>Terms</li>
              <li>Sitemap</li>
              <li>Privacy</li>
              <li>Your Privacy Choices</li>
            </ul>
          </div>
          <div className="text-sm flex gap-6">
            <h6>English (US)</h6>
            <h6>$ USD</h6>
          </div>
          </div>
      </Container>
    </section>
  );
};

export default Footer;


const footerNav = [
  {
    title: "Support",
    links: [
      {
        label: "Help Center",
        href: "#"
      },
      {
        label: "AirCover",
        href: "#"
      },
      {
        label: "Anti-discrimination",
        href: "#"
      },
      {
        label: "Disability support",
        href: "#"
      },
      {
        label: "Cancellation options",
        href: "#"
      },
      {
        label: "Report neighborhood concern",
        href: "#"
      },
    ]
  },
  {
    title: "Hosting",
    links: [
      {
        label: "Airbnb your home",
        href: "#"
      },
      {
        label: "AirCover for Hosts",
        href: "#"
      },
      {
        label: "Hosting resources",
        href: "#"
      },
      {
        label: "Community forum",
        href: "#"
      },
      {
        label: "Hosting responsibly",
        href: "#"
      },
      {
        label: "Airbnb-friendly apartments",
        href: "#"
      },
      {
        label: "Join a free Hosting class",
        href: "#"
      },
    ]
  },
  {
    title: "Airbnb",
    links: [
      {
        label: "Newsroom",
        href: "#"
      },
      {
        label: "New features",
        href: "#"
      },
      {
        label: "Careers",
        href: "#"
      },
      {
        label: "Investors",
        href: "#"
      },
      {
        label: "Gift cards",
        href: "#"
      },
    ]
  }
]