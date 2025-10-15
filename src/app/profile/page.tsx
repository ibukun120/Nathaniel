// import SocialIconsRow1 from "@/components/SocialIconsRow";
// import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="pt-4 md:pt-20 flex px-6 md:px-12 bg-white md:bg-[url('/images/nath-profile.jpeg')] bg-center bg-cover bg-no-repeat">
      
        {/* <Image
          src="/images/nath-profile.jpeg"
          alt="nath"
          width={100}
          height={100}
          className="absolute object-cover"
        /> */}
        
        <div className="hidden md:flex w-1/2 px-2 py-32"></div>
        
        <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-16 text-gray-800 text-sm px-2 md:px-8 py-40">
          <h1 className="text-4xl font-bold text-gray-950">PROFILE</h1>
          <p>
            Pastor Nathaniel Bassey is a Gospel Music Minister from Akwa Ibom
            State, Nigeria. He is a Recording Artiste, trumpet player,
            singer/song-writer and a music producer. He serves as The Pastor of
            THE OASIS- The Youth Church of RCCG, The King’s Court. Lagos,
            Nigeria. Before accepting the call of God to full time music
            ministry, Pastor Nath was band leader of the Steve Rhodes Jazz
            orchestra, a member of the Spectrum 4 jazz quintet, and many other
            musical bands and affiliations.
          </p>
          <p>
            Minister Bassey believes that music is primarily, a fundamental tool
            in the praise and worship of God and an avenue by which He (God)
            relates with His people. He expresses his deep love for God through
            his music and features in concerts, crusades, church events and
            other kingdom gatherings and continues to lead many to the LORD.
          </p>

          <p>
            Pastor Nath speaks at worship and music seminars within and outside
            the shores of Nigeria. Inspiring the next generation of worship
            leaders and gospel musicians has also been a major focus of his
            ministry, regularly emphasizing the concept of a “TOTAL AND
            COMPLETE” music minister with SPIRIT, SKILL, AND CHARACTER.
          </p>

          <p>
            His distinctly prophetic sound on the trumpet resonates far and
            wide, stirring a revival and passion to holiness, godliness and
            heartfelt worship in the body of Christ.
          </p>

          <p>
            His debut album, ELOHIM, was recorded in 2008 in Capetown South
            Africa. He has gone ahead to release other albums since then; THE
            SON OF GOD(2014), THIS GOD IS TOO GOOD(2016), REVIVAL FLAMES (2017),
            JESUS: THE RESURRECTION AND THE LIFE(2018), THE KING IS COMING
            (2019), and HALLELUJAH AGAIN (2021) with Songs that have become
            church anthems; transcending racial, cultural and ethnic lines and
            boundaries.
          </p>

          <p>
            His most recent project, a 15-Track album filled with Prophetic
            Chants, High Praise, Adoration, Psalms, Hymns and Spiritual songs,
            ‘THE NAMES OF GOD’ was recorded live in November 2021 and has become
            a major tool of worship for Worshippers of Jesus across the globe.
          </p>

          <p>
            n June 2017, he kicked off the “HALLELUJAH CHALLENGE”, an online
            praise and prayer meeting which attracts thousands of participants
            from around the world to date.
          </p>

          <p>
            He is married and lives in Lagos, Nigeria, with his wife and their
            children.
          </p>
        </div>
      
    </div>
  );
};

export default page;
