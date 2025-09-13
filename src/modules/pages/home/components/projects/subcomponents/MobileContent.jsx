export default function MobileContent({ index, direction, setIndex }) {
  return (
    <div className="md:hidden flex flex-col items-center h-[100vh] w-full pt-25 gap-y-3 font-electrolize">
      <div className="flex h-[30vh] w-screen content-center items-center border-2">
        {' '}
        Mobile Top{' '}
      </div>
      <div className="flex h-[70vh] w-screen content-center items-center border-2">
        {' '}
        Mobile Bottom{' '}
      </div>
    </div>
  );
}
