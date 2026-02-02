const config = {
  title: "Ngoc Thang",
  description: {
    long: "Explore the portfolio of Naresh, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Naresh, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Ngoc Thang",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Ngoc Thang",
  email: "lavang390@gmail.com",
  site: "https://ngocthang.site",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/lavang390?s=21",
    linkedin: "https://www.linkedin.com/in/v%C3%A0ng-l%C3%A1-3a83763aa/",
    instagram: "https://www.instagram.com/21.th08/",
    facebook: "https://www.facebook.com/ngthua218",
    github: "https://github.com/thangdautom",
  },
};
export { config };
