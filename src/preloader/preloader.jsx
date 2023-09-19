function Preloader() {
  return (
    <>
    <div className="fixed top-0 left-0 right-0 bottom-0 grid place-items-center bg-gray-dark z-50">
      <div className="text-blue text-6xl font-mono">
        <span className="animate-slideinFast">E</span>
        <span className="animate-slideinRegular">C</span>
      </div>
    </div>
    </>
  );
}

export default Preloader;