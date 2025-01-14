export function Hero() {
  return (
    <>
      <div className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center w-full">
        <div className="container px-4 mx-auto">
          <h1 className="max-w-xl p-10 bg-background/50">
            Путеводитель по Республике Алтай и Алтайскому краю
          </h1>
        </div>
      </div>
      <video
        src="/videos/altay.webm"
        loop
        autoPlay
        muted
        className="absolute top-0 right-0 w-full h-full object-cover z-[-1]"
      />
    </>
  );
}
