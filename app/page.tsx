"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showHey, setShowHey] = useState(false);
  const [animateUp, setAnimateUp] = useState(false);
  const [heyShifted, setHeyShifted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [animateMessage, setAnimateMessage] = useState(false);
  const [messageText, setMessageText] = useState("Sooo, i thought about making this gift/design or bcha mnm beyw");
  const [showThirdMessage, setShowThirdMessage] = useState(false);
  const [animateThirdMessage, setAnimateThirdMessage] = useState(false);
  const [exitAll, setExitAll] = useState(false);
  const [showWait, setShowWait] = useState(false);
  const [animateWait, setAnimateWait] = useState(false);
  const [waitText, setWaitText] = useState("Waitttttt");
  const [slideWaitLeft, setSlideWaitLeft] = useState(false);
  const [showFlower, setShowFlower] = useState(false);
  const [animateFlower, setAnimateFlower] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [animateButtons, setAnimateButtons] = useState(false);
  const [showRejectMessage, setShowRejectMessage] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [showFinalText, setShowFinalText] = useState(false);
  const [animateFinalText, setAnimateFinalText] = useState(false);
  const [finalTextIndex, setFinalTextIndex] = useState(0);
  const [exitFinalText, setExitFinalText] = useState(false);
  const [showTypewriterText, setShowTypewriterText] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [typewriterComplete, setTypewriterComplete] = useState(false);
  const [exitTypewriterText, setExitTypewriterText] = useState(false);
  const [showSoooo, setShowSoooo] = useState(false);
  const [animateSoooo, setAnimateSoooo] = useState(false);
  const [showMiPanda, setShowMiPanda] = useState(false);
  const [animateMiPanda, setAnimateMiPanda] = useState(false);
  const [showAqomashi, setShowAqomashi] = useState(false);
  const [animateAqomashi, setAnimateAqomashi] = useState(false);
  const [showWubalem, setShowWubalem] = useState(false);
  const [animateWubalem, setAnimateWubalem] = useState(false);
  const [showEuphoria, setShowEuphoria] = useState(false);
  const [animateEuphoria, setAnimateEuphoria] = useState(false);

  const finalTexts = [
    "Owwwww",
    "you actually accepted\nmy flower",
    "am veryyyy happy"
  ];

  const longText = "I was thinking abt our next week date, ena balefew bedereku and dnget yeteyekush meselegn, so i thought why not be creative abt it and ask her bezi menged, cuz u are the most exciting thing that is happening to me recently\n\nand am lovingg it that way!";

  const handleAccept = () => {
    setAccepted(true);
    setAnimateButtons(false);
    setTimeout(() => {
      setShowButtons(false);

      setShowFinalText(true);
      setTimeout(() => setAnimateFinalText(true), 50);

      setTimeout(() => {
        setFinalTextIndex(1);
        setTimeout(() => {
          setFinalTextIndex(2);
        }, 3000);
      }, 3000);

      setTimeout(() => {
        setExitFinalText(true);
        setAnimateFinalText(false);
        setTimeout(() => {
          setShowFinalText(false);
          setShowTypewriterText(true);
          setTypewriterText("");
          setTypewriterComplete(false);
          let i = 0;
          const typeInterval = setInterval(() => {
            if (i < longText.length) {
              setTypewriterText(longText.slice(0, i + 1));
              i++;
            } else {
              clearInterval(typeInterval);
              setTypewriterComplete(true);
            }
          }, 30);
        }, 1000);
      }, 3000 + 3000 + 3000 + 3000);

      setTimeout(() => {
        setExitTypewriterText(true);
        setTimeout(() => {
          setShowTypewriterText(false);
          setShowSoooo(true);
          setTimeout(() => setAnimateSoooo(true), 50);
        }, 1000);
      }, 3000 + 3000 + 3000 + 3000 + 1000 + 15000 + 1000);

      setTimeout(() => {
        setShowMiPanda(true);
        setTimeout(() => setAnimateMiPanda(true), 50);
      }, 3000 + 3000 + 3000 + 3000 + 1000 + 15000 + 1000 + 1000 + 3000);

      setTimeout(() => {
        setShowAqomashi(true);
        setTimeout(() => setAnimateAqomashi(true), 50);
      }, 3000 + 3000 + 3000 + 3000 + 1000 + 15000 + 1000 + 1000 + 3000 + 3000);

      setTimeout(() => {
        setShowWubalem(true);
        setTimeout(() => setAnimateWubalem(true), 50);
      }, 3000 + 3000 + 3000 + 3000 + 1000 + 15000 + 1000 + 1000 + 3000 + 3000 + 3000);

      setTimeout(() => {
        setShowEuphoria(true);
        setTimeout(() => setAnimateEuphoria(true), 50);
      }, 3000 + 3000 + 3000 + 3000 + 1000 + 15000 + 1000 + 1000 + 3000 + 3000 + 3000 + 3000);
    }, 1000);
  };

  const handleReject = () => {
    setShowRejectMessage(true);
    setTimeout(() => {
      setShowRejectMessage(false);
    }, 3000);
  };

  useEffect(() => {
    // 1. Show "Hey!" after 2 seconds
    const timer1 = setTimeout(() => {
      setShowHey(true);
      setTimeout(() => setAnimateUp(true), 50);
    }, 2000);

    // 2. After Hey! animation (1.2s) + 1 second = ~3.2s total, shift Hey! up and show first message
    const timer2 = setTimeout(() => {
      setHeyShifted(true);
      setShowMessage(true);
      setTimeout(() => setAnimateMessage(true), 50);
    }, 3200 + 1000); // 3.2s + 1s = 4.2s

    // 3. After first message shows for 4.5s, cross-fade to second message
    const timer3 = setTimeout(() => {
      setMessageText("Bcuz i like doing things abt u and also with u");
    }, 4200 + 4500); // 4.2s + 4.5s = 8.7s

    // 4. After second message shows for 4.5s, cross-fade to third message (which stays)
    const timer4 = setTimeout(() => {
      setMessageText("andddd yes, bcuz i couldnt get flowers ezi akababi");
    }, 4200 + 4500 + 4500); // 8.7s + 4.5s = 13.2s

    // 5. After third message shows for 4.5s, slide up fourth message below it
    const timer5 = setTimeout(() => {
      setShowThirdMessage(true);
      setTimeout(() => setAnimateThirdMessage(true), 50);
    }, 4200 + 4500 + 4500 + 4500); // 13.2s + 4.5s = 17.7s

    // 6. After 4 seconds (at ~21.7s), exit all texts upward
    const timer6 = setTimeout(() => {
      setExitAll(true);
    }, 4200 + 4500 + 4500 + 4500 + 4000); // 17.7s + 4s = 21.7s

    // 7. After 1 second since disappearance (~22.7s), show "Waitttttt"
    const timer7 = setTimeout(() => {
      setShowWait(true);
      setTimeout(() => setAnimateWait(true), 50);
    }, 4200 + 4500 + 4500 + 4500 + 4000 + 1000); // 21.7s + 1s = 22.7s

    // 8. After 2 seconds, change text to "Did I say Flower?"
    const timer8 = setTimeout(() => {
      setWaitText("Did I say Flower?");
    }, 4200 + 4500 + 4500 + 4500 + 4000 + 1000 + 2000); // 22.7s + 2s = 24.7s

    // 9. After another 2 seconds, change text to "Oh, yes!"
    const timer9 = setTimeout(() => {
      setWaitText("Oh, yes!");
    }, 4200 + 4500 + 4500 + 4500 + 4000 + 1000 + 2000 + 2000); // 24.7s + 2s = 26.7s

    // 10. After 2 seconds (was 1s) of "Oh, yes!", slide it out to the left & slide flower in from right
    const timer10 = setTimeout(() => {
      setSlideWaitLeft(true);
      setShowFlower(true);
      setTimeout(() => setAnimateFlower(true), 50);
    }, 4200 + 4500 + 4500 + 4500 + 4000 + 1000 + 2000 + 2000 + 2000); // 26.7s + 2s = 28.7s

    // 11. After 4 seconds of flower appearing, show the buttons
    const timer11 = setTimeout(() => {
      setShowButtons(true);
      setTimeout(() => setAnimateButtons(true), 50);
    }, 4200 + 4500 + 4500 + 4500 + 4000 + 1000 + 2000 + 2000 + 2000 + 4000); // 28.7s + 4s = 32.7s

    return () => {
      clearTimeout(timer11);
      clearTimeout(timer10);
      clearTimeout(timer9);
      clearTimeout(timer8);
      clearTimeout(timer7);
      clearTimeout(timer6);
      clearTimeout(timer5);
      clearTimeout(timer4);
      clearTimeout(timer3);
      clearTimeout(timer2);
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {showHey && (
        <div
          className={`
            fixed inset-0 flex items-center justify-center pointer-events-none z-50
            ${animateUp ? "animate-hey-up" : "opacity-0 translate-y-full"}
            ${heyShifted ? "animate-hey-shift" : ""}
            ${exitAll ? "animate-exit-up" : ""}
          `}
        >
          <span className="text-6xl md:text-8xl text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]" style={{ fontFamily: "'MGF Pinlock Personal Use', sans-serif" }}>
            Hey!
          </span>
        </div>
      )}

      {/* First message container - cycles through 3 messages with cross-fade */}
      {showMessage && (
        <div
          className={`
            fixed inset-0 flex items-center justify-center pointer-events-none z-50
            ${animateMessage ? "animate-message-up" : "opacity-0 translate-y-full"}
            ${exitAll ? "animate-exit-up" : ""}
          `}
        >
          <span className="text-3xl md:text-4xl text-white/90 drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)] max-w-3xl px-6 text-center leading-relaxed transition-opacity duration-300" style={{ fontFamily: "'MGF Pinlock Personal Use', sans-serif" }}>
            {messageText}
          </span>
        </div>
      )}

      {/* Fourth message - slides up and stops BELOW the third message */}
      {showThirdMessage && (
        <div
          className={`
            fixed inset-0 flex items-center justify-center pointer-events-none z-50
            ${animateThirdMessage ? "animate-message-up-delayed" : "opacity-0 translate-y-full"}
            ${exitAll ? "animate-exit-up" : ""}
          `}
          style={{ paddingTop: "120px" }}
        >
          <span className="text-3xl md:text-4xl text-white/90 drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)] max-w-3xl px-6 text-center leading-relaxed" style={{ fontFamily: "'MGF Pinlock Personal Use', sans-serif" }}>
            Overall, i was really happy making it, and i hope you will love it
          </span>
        </div>
      )}

      {/* Waitttttt text - slides up from bottom to center */}
      {showWait && (
        <div
          className={`
            fixed inset-0 flex items-center justify-center pointer-events-none z-50
            transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${!animateWait ? "translate-y-full opacity-0" : slideWaitLeft ? "-translate-x-[100vw] opacity-0" : "translate-y-0 translate-x-0 opacity-100"}
          `}
        >
          <span className="text-6xl md:text-8xl text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-opacity duration-300" style={{ fontFamily: "'MGF Pinlock Personal Use', sans-serif" }}>
            {waitText}
          </span>
        </div>
      )}

      {/* Flower image - slides in from right */}
      {showFlower && (
        <div
          className={`
            fixed inset-0 flex items-center justify-center pointer-events-none z-40
            transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${animateFlower ? "translate-x-0 opacity-100" : "translate-x-[100vw] opacity-0"}
          `}
        >
          <Image
            src="/flower.png"
            alt="Flower"
            width={550}
            height={550}
            priority
            style={{
              maxWidth: "none",
              flexShrink: 0,
              transform: accepted ? 'translate(-35vw, 30vh) scale(0.65) rotate(-15deg)' : 'translateY(10vh) scale(1) rotate(0deg)'
            }}
            className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          />
        </div>
      )}

      {/* Accept and Reject Buttons */}
      {showButtons && (
        <div
          className={`
            fixed bottom-12 inset-x-0 flex flex-col items-center justify-center z-50
            transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${animateButtons ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
          `}
        >
          <div className="flex gap-8 items-center" style={{ fontFamily: "'MGF Pinlock Personal Use', sans-serif" }}>
            <button
              onClick={handleAccept}
              className="bg-pink-400 hover:bg-pink-500 text-white text-3xl md:text-4xl px-12 py-3 rounded-full transform transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer border-2 border-white/40"
            >
              Accept
            </button>
            <button
              onClick={handleReject}
              className="bg-rose-500 hover:bg-rose-600 text-white text-3xl md:text-4xl px-12 py-3 rounded-full transform transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer border-2 border-white/40"
            >
              Reject
            </button>
          </div>

          <div className={`mt-6 h-8 transition-opacity duration-500 ${showRejectMessage ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-white text-base md:text-lg bg-black/40 backdrop-blur-md px-6 py-2 rounded-full font-sans tracking-wide border border-white/20 whitespace-nowrap">
              u thought i will make it this is for you huh?
            </p>
          </div>
        </div>
      )}

      {/* Final Sequence Message */}
      {showFinalText && (
        <div
          className={`
            fixed inset-0 flex items-center justify-center pointer-events-none z-50 pb-[20vh]
            transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${animateFinalText ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
            ${exitFinalText ? "animate-typewriter-exit" : ""}
          `}
        >
          <span
            className="text-4xl md:text-5xl text-white/90 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] max-w-3xl px-6 text-center leading-relaxed whitespace-pre-line transition-opacity duration-300"
            style={{ fontFamily: "'MGF Pinlock Personal Use', sans-serif" }}
          >
            {finalTexts[finalTextIndex]}
          </span>
        </div>
      )}

      {/* Typewriter Text */}
      {showTypewriterText && (
        <div
          className={`
            fixed inset-0 flex items-start justify-center pointer-events-none z-50 pt-[5vh]
            transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
            translate-y-0 opacity-100
            ${exitTypewriterText ? "animate-typewriter-exit" : ""}
          `}
        >
          <div className="max-w-2xl px-6 text-center leading-relaxed">
            <span
              className="text-lg md:text-xl text-white/90 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] whitespace-pre-line"
              style={{ fontFamily: "var(--font-sans), Arial, Helvetica, sans-serif" }}
            >
              {typewriterText}
              {typewriterComplete && <span className="animate-pulse">|</span>}
            </span>
          </div>
        </div>
      )}

      {/* SOOOOO Text */}
      {showSoooo && (
        <div
          className={`
            fixed inset-0 flex items-start justify-center pointer-events-none z-50 pt-[5vh]
            transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${animateSoooo ? "animate-soooo-down" : "opacity-0 -translate-y-full"}
          `}
        >
          <span className="text-4xl md:text-5xl text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] max-w-3xl px-6 text-center leading-relaxed" style={{ fontFamily: "'MGF Pinlock Personal Use', sans-serif" }}>
            SOOOOO
          </span>
        </div>
      )}

      {/* Mi Panda Text */}
      {showMiPanda && (
        <div
          className={`
            fixed inset-0 flex items-start justify-center pointer-events-none z-50 pt-[10vh]
            transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${animateMiPanda ? "animate-mi-panda-down" : "opacity-0 -translate-y-full"}
          `}
        >
          <span className="text-4xl md:text-5xl text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] max-w-3xl px-6 text-center leading-relaxed" style={{ fontFamily: "var(--font-merienda-one), cursive" }}>
            Mi Panda
          </span>
        </div>
      )}

      {/* Aqomashi Text */}
      {showAqomashi && (
        <div
          className={`
            fixed inset-0 flex items-start justify-center pointer-events-none z-50 pt-[15vh]
            transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${animateAqomashi ? "animate-aqomashi-down" : "opacity-0 -translate-y-full"}
          `}
        >
          <span className="text-4xl md:text-5xl text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] max-w-3xl px-6 text-center leading-relaxed" style={{ fontFamily: "var(--font-merienda-one), cursive" }}>
            Aqomashi
          </span>
        </div>
      )}

      {/* Wubalem Text */}
      {showWubalem && (
        <div
          className={`
            fixed inset-0 flex items-start justify-center pointer-events-none z-50 pt-[20vh]
            transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${animateWubalem ? "animate-wubalem-down" : "opacity-0 -translate-y-full"}
          `}
        >
          <span className="text-4xl md:text-5xl text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] max-w-3xl px-6 text-center leading-relaxed" style={{ fontFamily: "var(--font-merienda-one), cursive" }}>
            wubalem
          </span>
        </div>
      )}

      {/* Euphoria Text */}
      {showEuphoria && (
        <div
          className={`
            fixed inset-0 flex items-start justify-center pointer-events-none z-50 pt-[25vh]
            transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${animateEuphoria ? "animate-euphoria-down" : "opacity-0 -translate-y-full"}
          `}
        >
          <span className="text-3xl md:text-4xl text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] max-w-3xl px-6 text-center leading-relaxed" style={{ fontFamily: "var(--font-merienda-one), cursive" }}>
            the girl who gives me euphoria by just looking at her
          </span>
        </div>
      )}
    </div>
  );
}