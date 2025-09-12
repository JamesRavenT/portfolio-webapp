import { useEffect, useState } from "react";

function useMobileBars() {
  const [isBarsHidden, setIsBarsHidden] = useState(false);

  useEffect(() => {
    function checkBars() {
      const innerH = window.innerHeight;
      const visualH = window.visualViewport?.height || innerH;

      // When bars collapse, visualViewport height grows closer to innerHeight
      // Use threshold (~60px) to detect difference
      const diff = Math.abs(innerH - visualH);

      setIsBarsHidden(diff < 60); // if nearly equal → bars hidden
    }

    window.visualViewport?.addEventListener("resize", checkBars);
    window.addEventListener("resize", checkBars);
    checkBars();

    return () => {
      window.visualViewport?.removeEventListener("resize", checkBars);
      window.removeEventListener("resize", checkBars);
    };
  }, []);

  return isBarsHidden;
}

export default useMobileBars;
