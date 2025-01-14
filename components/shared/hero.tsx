export function Hero() {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center">
      <div className="container px-4 mx-auto">
        <h1 className="max-w-xl">
          Путеводитель по Республике Алтай и Алтайскому краю
        </h1>
      </div>
      <video
        src="/videos/altay1080.mp4"
        loop
        autoPlay
        muted
        className="absolute top-0 right-0 w-full h-full object-cover z-[-1]"
      />
    </div>
  );
}
