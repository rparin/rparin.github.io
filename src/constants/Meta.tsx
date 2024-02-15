const og = {
  type: "website",
  url: "https://rparin.github.io/",
  title: "Ralph Parin | Portfolio",
  description:
    "The website showcases some projects I've worked on and things about me. The technologies used to develop this website include React, Next.js, Tailwind CSS, and Shadcn-ui.",
  siteName: "rparin.github.io",
  images: [
    {
      url: "https://raw.githubusercontent.com/rparin/rparin.github.io/main/Banner.png",
    },
  ],
};

const Metadata = {
  metadataBase: new URL("https://rparin.github.io"),
  title: og.title,
  description: og.description,
  openGraph: og,
};

export { Metadata };
