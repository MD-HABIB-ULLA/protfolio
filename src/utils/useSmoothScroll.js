import { useEffect } from "react";

export const useSmoothScroll = () => {
  useEffect(() => {
    const smoothScroll = (e) => {
      e.preventDefault();

      const delta = e.deltaY;
      const scrollSpeed = 5; // Adjust speed for smoother experience
      const currentScroll = window.pageYOffset;

      // Calculate the new scroll position
      const targetScroll = currentScroll + delta * scrollSpeed;

      // Ensure scrolling stays within bounds
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const newScroll = Math.min(Math.max(targetScroll, 0), maxScroll);

      // Smoothly scroll to the target position
      window.scrollTo({
        top: newScroll,
        behavior: "smooth",
      });
    };

    const supportsPassive = (() => {
      let passiveSupported = false;
      try {
        const options = Object.defineProperty({}, "passive", {
          get: () => {
            passiveSupported = true;
            return true; // Return a value to satisfy the getter requirement
          },
        });

        window.addEventListener("test", null, options);
      } catch (err) {
        console.log(err)
      }
      return passiveSupported;
    })();

    window.addEventListener("wheel", smoothScroll, {
      passive: !supportsPassive && false,
    });

    return () => {
      window.removeEventListener("wheel", smoothScroll);
    };
  }, []);
};
