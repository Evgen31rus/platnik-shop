/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'hero-pattern': "url('https://img.freepik.com/free-photo/html-and-css-collage-concept-with-hacker_23-2150061984.jpg?w=1480&t=st=1704656449~exp=1704657049~hmac=52bf58d149fc5a16251967020464462421f1e5a6a44de5660df1597cde62337b')",
        'footer-texture': "url('https://img.freepik.com/free-photo/html-system-for-website-concept_23-2150376744.jpg?w=1480&t=st=1704656801~exp=1704657401~hmac=0548e501925e02dbea842ce7d3f8aa3e2cda1ab7be378549e4467efd5a212258')",
        'foo': "url('https://img.freepik.com/free-photo/hacker-working-in-the-darkness_53876-94580.jpg?w=1800&t=st=1704656934~exp=1704657534~hmac=9b4a1dbca74817303be72159c6cee1119276b8d8df69fe42b00fa2b93aa7b605')",
        'foot': "url('https://img.freepik.com/free-photo/metaverse-avatar-collage-concept_52683-96428.jpg?w=740&t=st=1704657235~exp=1704657835~hmac=14bc174e669878f2b19ab492a40dfb824d589171267d10a0e06139b5a354c260')",
       }

    },
  },
  plugins: []
}

