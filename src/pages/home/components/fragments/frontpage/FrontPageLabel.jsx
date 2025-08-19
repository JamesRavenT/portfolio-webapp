import { Front } from '../../../../../assets/text/home';

export default function FrontPageLabel() {
  return (
    <>
      <div className="flex flex-col w-[95%] sm:gap-y-2">

        {/* Greeting */}
        <p className="pl-1 sm:pl-2 text-2xl">
          {Front.greeting}
        </p>

        {/* Name */}
        <p className="font-bold text-6xl sm:text-9xl">
          {Front.name}
        </p>

        {/* Role */}
        <div className="flex w-full gap-x-1">
          <p className="w-[80%] bg-white pl-2 sm:pl-2 font-bold text-black sm:text-3xl">
            {Front.role}
          </p>
          <div className="w-[5%] bg-white" />
        </div>

      </div>
    </>
  );
}
