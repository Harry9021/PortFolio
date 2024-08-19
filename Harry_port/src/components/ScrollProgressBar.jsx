import { useState, useEffect } from 'react';
import '../styles/ProgressBar.css'; // Import your CSS file

const ScrollProgressBar = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  // Function to calculate scroll percentage
  const updateScrollPercentage = () => {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const totalScroll = documentHeight - windowHeight;
    const percentScrolled = (scrollTop / totalScroll) * 100;
    setScrollPercent(percentScrolled);
  };

  // Add scroll event listener on component mount
  useEffect(() => {
    window.addEventListener('scroll', updateScrollPercentage);
    return () => {
      window.removeEventListener('scroll', updateScrollPercentage);
    };
  }, []);

  return (
    <div
      id="bsf_rt_progress_bar_container"
      className="progress-container-top"
      style={{ opacity: 0.6, transition: 'opacity linear 200ms' }}
    >
      <div
        className="progress-bar"
        id="bsf_rt_progress_bar"
        style={{ width: `${scrollPercent}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgressBar;
