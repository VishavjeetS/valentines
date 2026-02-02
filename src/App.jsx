import { useRef, useState } from "react";

function App() {

  const [buttonClickedCount, setButtonClickedCount] = useState(0);

  const rejectionDivRef = useRef(null);
  const acceptedDivRef = useRef(null);
  const reasonDivRef = useRef(null);

  const [showReasonNumber, setShowReasonNumber] = useState(1);

  const [isClickedRoseButton, setClickedRoseButton] = useState(false);

  const rejectionButtonTexts = [
    "No...",
    "Are you sure?",
    "Please?",
    "Think about it!",
    "Last chance!",
  ];

  const reasons = [
    <span className="text-2xl font-medium"><span className="text-3xl text-rose-500 font-semibold">1.</span> Im the <span className="text-rose-500 font-semibold text-3xl">BESTTTTTTTTTTTTTTTT</span> Boyfriendddddddddd EVERRRRR.</span>,
    <span className="text-2xl font-medium"><span className="text-3xl text-rose-500 font-semibold">2.</span> I can make GOLLL ROTI, hehe.</span>,
    <span className="text-2xl font-medium flex items-center gap-2"><span className="text-3xl text-rose-500 font-semibold">3.</span> 6 FEET TALLLLLLLLLLL.</span>,
    <span className="text-2xl font-medium flex items-center gap-2"><span className="text-3xl text-rose-500 font-semibold">4.</span> I LOVEEEEEEEE YOUUUUU SOOOOO MUCHHHHH.</span>
  ]

  const [isAccepted, setIsAccepted] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();
    const type = e.target.getAttribute("data-type");
    if(type == "reject" && buttonClickedCount < 4) {
      setButtonClickedCount(buttonClickedCount + 1);
    } else if(type == "reject" && buttonClickedCount >= 4) {
      alert("Alright, Let's start again!");
      window.location.reload();
    }
     else {
      setIsAccepted(true);
      rejectionDivRef.current.classList.add("transition", "opacity-0", "duration-1000", "scale-0");
      showTheReasons();
    }
  }


  function showTheReasons(){
    setTimeout(() => {
      acceptedDivRef.current.classList.add("scale-50", "-translate-y-[150px]");
    }, 1000);
    setTimeout(() => {
      reasonDivRef.current.classList.add("transition", "opacity-100", "duration-1000", "-translate-y-[300px]", "transform");
    }, 1000);
  }

  function showNextReason(){
    if(showReasonNumber > reasons.length - 1){
      const lastReason = document.getElementById("last-reason");
      lastReason.classList.add("opacity-100");

      const sendMePicDiv = document.getElementById("send-me-pic");
      setTimeout(() => {
        sendMePicDiv.classList.add("opacity-100");
      }, 1000);

      setTimeout(() => {
        const myGirlfriendText = document.getElementById("my-girlfriend-text");
        myGirlfriendText.classList.add("opacity-100");
      }, 4000);
    }else{
      const reasonListDiv = reasonDivRef.current.querySelector("#reasons-list");
      reasonListDiv.querySelector(`#reason-${showReasonNumber}`).classList.add("transition","duration-1000","opacity-100");
      setShowReasonNumber(showReasonNumber + 1);
    }
  }


  return (
    <div className="relative min-h-screen w-full bg-rose-300 py-6 px-6">

      <div className="flex flex-col items-center z-10 relative">
        <h1 className="text-white text-6xl font-bold">Dear Mtallo</h1>

        <p className="text-white text-xl font-semibold mt-10">
          Will you be my Valentine?
        </p>

        <div className="flex flex-row items-center gap-4 mt-10">
          <div ref={acceptedDivRef} className={`flex flex-col items-center ${isAccepted ? 'translate-x-1/2 transform duration-1000' : ''}`}>
            <img
              src={isAccepted ? "https://media.tenor.com/bn2-TutT5kIAAAAi/peach-goma-spin.gif" : "https://media.tenor.com/C35t4Pf5GlgAAAAi/peach-and-goma-cute.gif"}
              alt=""
              height={isAccepted ? 450 : 320}
              width={isAccepted ? 450 : 320}
            />

            <button
              onClick={handleButtonClick} data-type="accept"
              className={`mt-4 bg-white text-rose-500 font-bold py-2 px-4 rounded-full hover:bg-rose-100 cursor-pointer ${isAccepted ? 'scale-0 transition duration-1000' : ''}`}
            >
              Yes!
            </button>
          </div>
          <div ref={rejectionDivRef} className="flex flex-col items-center">
            <img
              src="https://media.tenor.com/-9xLl1bsQ7cAAAAi/peach-cat-crying-peach-goma.gif"
              alt=""
              height={320}
              width={320}
            />
            <button
              onClick={handleButtonClick} data-type="reject"
              className="mt-4 bg-white text-rose-500 font-bold py-2 px-4 rounded-full hover:bg-rose-100 cursor-pointer"
            >
              {rejectionButtonTexts[Math.min(buttonClickedCount, 4)]}
            </button>
          </div>


        </div>

        <div ref={reasonDivRef} className="mt-10 opacity-0 flex flex-col items-center gap-4">
          <p className="text-white text-4xl font-semibold mt-10 mb-5">
            <span className="text-rose-500 font-bold">REASONS</span> why I should be your Valentine
          </p>

          <div id="reasons-list" className="flex flex-col gap-4">
            <span id={`reason-0`} className="reason text-2xl font-medium flex items-center gap-2"><span className="text-3xl text-rose-500 font-semibold">1.</span> Im the <span className="text-rose-500 font-semibold text-3xl">BESTTTTTTTTTTTTTTTT</span> Boyfriendddddddddd EVERRRRR.</span>
            <span id={`reason-1`} className="reason text-2xl font-medium flex items-center gap-2 opacity-0"><span className="text-3xl text-rose-500 font-semibold">2.</span> I can make GOLLL ROTI, hehe.</span>
            <span id={`reason-2`} className="reason text-2xl font-medium flex items-center gap-2 opacity-0"><span className="text-3xl text-rose-500 font-semibold">3.</span> 6 FEET TALLLLLLLLLLL.</span>
            <span id={`reason-3`} className="reason text-2xl font-medium flex items-center gap-2 opacity-0"><span className="text-3xl text-rose-500 font-semibold">4.</span> I LOVEEEEEEEE YOUUUUU SOOOOO MUCHHHHH.</span>
          </div>

          <p id="last-reason" className="text-2xl font-semibold text-rose-400 opacity-0 transition duration-1000 text-center">Hehhhh, I can do this all day, BUT ITSSSSSS ABOUTTTTTT YOUUUUUUU. ❤️❤️❤️</p>

          <button onClick={() => showNextReason()} className={`mt-4 bg-white text-rose-500 font-bold py-2 px-4 rounded-full hover:bg-rose-100 cursor-pointer ${showReasonNumber == 5 ? 'scale-0' : ''}`}>
              Next ↓
          </button>
        </div>

        <div id="send-me-pic" className={`mt-10 flex flex-col items-center gap-4 bg-white p-4 rounded-lg opacity-0 animate-fade-in transition duration-1000 -translate-y-80`}>
          <p className="text-4xl font-semibold mb-5 text-rose-400">
            This is me whenever you send a pic
          </p>

          <div className={`grid grid-cols-3 gap-4 ${isClickedRoseButton ? 'opacity-0' : 'opacity-100'} transition duration-1000`} style={{'display': isClickedRoseButton ? 'none' : 'grid'}}>
              {["https://media.tenor.com/cvhZsw_2eNcAAAAM/what-wut.gif", "https://media.tenor.com/ln8sTN24z90AAAAM/meme-checking-you-out.gif", "https://media.tenor.com/7womF_qQbwcAAAAM/sunglasses-checking-out.gif"].map((src, index) => {
              return <div key={'pic-'+index} className="max-h-80 max-w-80"><img  className="object-cover w-full h-full" src={src} alt="" height={300} width={300} /></div>;
              })}          
          </div>
          <div className={`grid grid-cols-3 gap-4 ${isClickedRoseButton ? 'opacity-100' : 'opacity-0'} transition duration-1000`}>
            {Array(3).fill("https://media.tenor.com/RUirV7Sgg2AAAAAi/romantice-cat.gif").map((src, index) => {
              return <div key={'rose-'+index} className="max-h-80 max-w-80 min-h-50"><img className="object-cover w-full h-full" src={src} alt="" height={300} width={300} /></div>;
            })}
          </div>
          <button onClick={setClickedRoseButton} className={`mt-4  text-rose-500 bg-rose-200 font-bold py-2 px-4 rounded-full hover:bg-rose-100 cursor-pointer`}>
              Click Me For a Rose!
          </button>
        </div>


        <p id="my-girlfriend-text" className="text-rose-500 -mt-60 mb-6 sm:text-7xl text-5xl font-bold opacity-0 transition duration-1000 text-center">YAYYY!!! YOU ARE MY GIRLFRIEND</p>

      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden transition opacity-0 duration-1000 animate-fade-in-slow" style={{opacity: isAccepted ? 1 : 0}}>
        <div className="absolute top-0 left-0 right-0 flex justify-around text-rose-600 font-bold text-xl py-2">
          {Array(10).fill("I love you ❤️").map((text, i) => (
            <span key={`top-${i}`}>{text}</span>
          ))}
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 flex justify-around text-rose-600 font-bold text-xl py-2">
          {Array(10).fill("I love you ❤️").map((text, i) => (
            <span key={`bottom-${i}`}>{text}</span>
          ))}
        </div>
        
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-around text-rose-600 font-bold text-xl px-2 writing-mode-vertical">
          {Array(8).fill("I love you ❤️").map((text, i) => (
            <span key={`left-${i}`} className="rotate-180" style={{writingMode: 'vertical-rl'}}>{text}</span>
          ))}
        </div>
        
        <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-around text-rose-600 font-bold text-xl px-2">
          {Array(8).fill("I love you ❤️").map((text, i) => (
            <span key={`right-${i}`} style={{writingMode: 'vertical-rl'}}>{text}</span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4 p-4 opacity-20 mix-blend-screen pointer-events-none">
        {Array(36).fill(null).map((_, i) => {
          const images = [
            "https://media.tenor.com/C35t4Pf5GlgAAAAi/peach-and-goma-cute.gif",
            "https://media.tenor.com/bn2-TutT5kIAAAAi/peach-goma-spin.gif",
            "https://media.tenor.com/-9xLl1bsQ7cAAAAi/peach-cat-crying-peach-goma.gif"
          ];
          return (
            <div key={`bg-${i}`} className="w-full h-full overflow-hidden">
              <img 
                src={images[i % 3]} 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default App
