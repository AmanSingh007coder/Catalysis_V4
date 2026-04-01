"use client";

import Container from "@/components/common/Container";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const images = [
  "/gallery/1.JPG", "/gallery/2.JPG", "/gallery/3.JPG", 
  "/gallery/4.JPG", "/gallery/5.JPG", "/gallery/6.JPG", 
  "/gallery/7.JPG", "/gallery/8.JPG", "/gallery/9.JPG",
  "/gallery/10.JPG"
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#FFEEF0]">
      <Container>
        <div className="rounded-[3rem] p-8 md:p-16 border-2 border-black bg-[#FAF7ED] shadow-sm relative overflow-hidden">
          
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-block border border-black rounded-full px-6 py-1 bg-white text-sm font-medium mb-8">
              GALLERY
            </div>
            
            <div className="mb-6">
              <Image 
                src="/gallery-heading.png" 
                alt="Moments from the Past" 
                width={600} 
                height={120}
                className="object-contain"
              />
            </div>

            <p className="text-[#3b0a1e] font-medium text-lg md:text-xl max-w-3xl leading-relaxed">
              Explore a detailed look at our past events and experience the vibrant energy that truly defines Catalysis, showcasing the passion and innovation that drive our community forward.
            </p>
          </div>
          <div className="hidden md:grid grid-cols-12 auto-rows-[70px] gap-3">
              
              {/* Image 1: Main Group */}
              <div className="col-span-4 row-span-4 relative rounded-[2rem] overflow-hidden border-2 border-black">
                <Image src="/gallery/1.jpg" alt="Organizing Team" fill className="object-cover" />
              </div>

              {/* Image 3: Lab Session */}
              <div className="col-span-3 row-span-4 relative rounded-[1.5rem] overflow-hidden border-2 border-black">
                <Image src="/gallery/3.jpg" alt="ISE Lab session" fill className="object-cover" />
              </div>

              {/* Image 5: Gaming */}
              <div className="col-span-5 row-span-3 relative rounded-[2rem] overflow-hidden border-2 border-black">
                <Image src="/gallery/5.jpg" alt="Gaming competition" fill className="object-cover" />
              </div>

              {/* Image 4: Laptop Detail */}
              <div className="col-span-5 row-span-2 relative rounded-[1.5rem] overflow-hidden border-2 border-black">
                <Image src="/gallery/4.jpg" alt="Development" fill className="object-cover" />
              </div>

              {/* Image 7: Wide Group (Center Anchor) */}
              <div className="col-span-6 row-span-3 relative rounded-[2rem] overflow-hidden border-2 border-black">
                <Image src="/gallery/7.jpg" alt="Catalysis Event Group" fill className="object-cover" />
              </div>

              {/* Image 6: Lab Overview */}
              <div className="col-span-3 row-span-3 relative rounded-[1.5rem] overflow-hidden border-2 border-black">
                <Image src="/gallery/6.jpg" alt="Lab Overview" fill className="object-cover" />
              </div>

              {/* Image 2: Team Backs */}
              <div className="col-span-3 row-span-3 relative rounded-[1.5rem] overflow-hidden border-2 border-black">
                <Image src="/gallery/2.jpg" alt="Team Genesis" fill className="object-cover" />
              </div>

              {/* Image 8: Student Focus */}
              <div className="col-span-3 row-span-3 relative rounded-[1.5rem] overflow-hidden border-2 border-black">
                <Image src="/gallery/8.jpg" alt="Focused student" fill className="object-cover" />
              </div>

              {/* Image 10: Collaboration */}
              <div className="col-span-3 row-span-3 relative rounded-[1.5rem] overflow-hidden border-2 border-black">
                <Image src="/gallery/10.jpg" alt="Collaboration" fill className="object-cover" />
              </div>

              {/* Image 9: Steps Discussion (Now integrated as a side block) */}
              <div className="col-span-6 row-span-3 relative rounded-[2rem] overflow-hidden border-2 border-black">
                <Image src="/gallery/9.jpg" alt="Discussions" fill className="object-cover" />
              </div>
          </div>

          <div className="md:hidden w-full">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1.2}
              centeredSlides={true}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              className="pb-12"
            >
              {images.map((src, i) => (
                <SwiperSlide key={i}>
                  <div className="relative aspect-[4/5] w-full rounded-[1.2rem] overflow-hidden border-2 border-black">
                    <Image src={src} alt={`Gallery ${i}`} fill className="object-cover" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </Container>

      <style jsx global>{`
        .swiper-pagination-bullet { background: black !important; }
        .swiper-pagination-bullet-active { background: #E3242B !important; width: 20px; border-radius: 5px; }
      `}</style>
    </section>
  );
}