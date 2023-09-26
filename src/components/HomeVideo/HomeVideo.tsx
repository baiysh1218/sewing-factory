import React, { useState, useEffect, useRef, startTransition } from "react";

// style start
import "./style/HomeVideo.css";
import "./style/AdaptiveHomeVideo.css";
// style end

// media start
import { ReactComponent as PlayVideo } from "../../assets/svg/playIcon.svg";
import { ReactComponent as Close } from "../../assets/svg/close.svg";
// media end

const HomeVideo = () => {
  // state start
  const [isOpenVideo, setIsOpenVideo] = useState(false);
  // state end
  // ref start
  const videoRef = useRef<HTMLIFrameElement>(null);
  // ref end
  // function start
  const handleToggleIsOpenVideo = () => {
    startTransition(() => {
      setIsOpenVideo(!isOpenVideo);
    });
  };

  const handleBlockScroll = () => {
    const navbar = document.querySelector("nav");
    if (isOpenVideo && navbar) {
      document.body.style.overflow = "hidden";
      if (navbar) {
        navbar.style.opacity = "0";
      }
    } else {
      document.body.style.overflow = "auto";
      if (navbar) {
        navbar.style.opacity = "1";
      }
    }
  };

  const handleCloseOutModal = (event: MouseEvent) => {
    if (videoRef.current && !videoRef.current.contains(event.target as Node)) {
      setIsOpenVideo(false);
    }
  };

  const handleCloseModal = () => {
    setIsOpenVideo(false);
  };
  // function end

  // useEffects start
  useEffect(() => {
    handleBlockScroll();
  }, [isOpenVideo]);

  useEffect(() => {
    document.addEventListener("click", handleCloseOutModal);

    return () => {
      document.removeEventListener("click", handleCloseOutModal);
    };
  }, []);
  // useEffects end
  return (
    <>
      <div className="container container_home_video">
        <div className="home_video_left_block">
          <div className="home_video_prevue">
            <img
              src="https://coolbrs.com/static/media/video-preview.de38e831.png"
              alt="prevue"
            />
            <div onClick={handleToggleIsOpenVideo} className="video_play_icon">
              <PlayVideo />
              <p>Play</p>
            </div>
          </div>
        </div>
        <div className="home_video_right_block">
          <p>
            Наша продукция соответствует всем ГОСТам и стандартам качества ТС
          </p>
        </div>

        {/* video */}
        {isOpenVideo ? (
          <>
            <iframe
              ref={videoRef}
              id="home_video"
              src="https://www.youtube-nocookie.com/embed/lmJ3_-SZT0o?autoplay=1&controls=0&disablekb=1&playsinline=0&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Fcoolbrs.com%2Fru%2F&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&customControls=true&noCookie=true&enablejsapi=1&origin=https%3A%2F%2Fcoolbrs.com&widgetid=3"
              title="Cool bro's"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
            <Close onClick={handleCloseModal} className="home_close_icon" />
            <div className="before_home_video"></div>
          </>
        ) : null}
        {/* video */}
      </div>
    </>
  );
};

export default HomeVideo;
