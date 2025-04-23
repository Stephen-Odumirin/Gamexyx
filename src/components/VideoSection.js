
function VideoSection() {
  return (
    <section className="container mx-auto px-4 py-16 fade-in">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Gameplay"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-xl shadow-card"
          />
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4">Watch Gameplay &amp; Tips</h3>
          <p className="text-gray-300">
            Level up faster with pro tutorials, live streams, and highlights from the best players in our community.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
