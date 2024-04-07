export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        {/* <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
        <div>
          <h1 className="text-5xl font-bold">Hello there!</h1>
          <p className="text-lg pt-6 pb-4">Don&apos;t learn a word a day. Relaxing and use chunks.</p>
          <p className="text-lg pb-4">Chunking is a learning technique. Let&apos;s watch the explain video and see our story of English topic to have a vision. Finally create your own topic of chunks.</p>
          <p className="text-lg pb-6">Especially, we have AI for you. That helps you create the topic with ease.</p>
          <a href="/story" className="btn btn-neutral">Get Started</a>
        </div>
        <div className="">
          <iframe className="rounded-lg w-[360px] sm:w-[620px] aspect-video md: " src="https://www.youtube.com/embed/hydCdGLAh00?si=KkZbAacBeleYpkW0"
            title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
          </iframe>
        </div>
      </div>
    </div>
  );
}
