"use client";

import { useEffect, useRef } from "react";

const NotFound = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  // const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.5 },
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => setShowButton(true), 4000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <section className="bg-white">
      <div className="flex justify-center items-center h-[calc(100vh-4rem)] w-full">
        <div className="relative">
          <video
            ref={videoRef}
            src="/video/sorry.mp4"
            preload="auto"
            muted
            loop
            playsInline
            poster="/not-found.png"
            className="lg:w-full lg:h-[calc(100vh-4rem)] object-cover"
          />
          {/* {showButton && (
            <Button
              variant="ghost"
              asChild
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center text-primary hover:bg-background hover:text-foreground hover:shadow-lg"
            >
              <Link
                href="/"
                className={`animate-pulse hover:animate-none font-semibold text-xl ${eduNswActCursive.className}`}
              >
                Please Go Home
              </Link>
            </Button>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default NotFound;
