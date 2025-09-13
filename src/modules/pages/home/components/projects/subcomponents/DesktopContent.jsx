export default function DesktopContent({ index, direction, setIndex }) {
  return (
    <div className="hidden md:flex flex-col items-center h-[100vh] w-full pt-25 gap-y-3 font-electrolize">
      <div className="flex h-[100vh] w-screen content-center items-center border-2">
        {' '}
        Desktop Top{' '}
      </div>
      <div className="flex h-[80vh] w-[50rem] translate-y-[4%] translate-x-[43%] absolute content-center items-center border-2">
        {' '}
        Desktop Bottom{' '}
      </div>
    </div>
  );
}
