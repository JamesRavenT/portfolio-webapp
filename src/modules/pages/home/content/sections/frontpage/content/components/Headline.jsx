import { headlines } from '../../../../_data/frontpage';

export default function Headline() {
  return (
    <div className="flex flex-col w-[95%] sm:gap-y-2">
      {/* Greeting */}
      <p className="pl-1 text-2xl md:text-xl">{headlines.greeting}</p>

      {/* Name */}
      <p className="font-bold text-6xl sm:text-9xl md:text-7xl">{headlines.name}</p>

      {/* Role */}
      <div className="flex w-full gap-x-1">
        <p className="lg:w-[30%] md:w-[40%] w-[80%] bg-white pl-2 font-bold text-black sm:text-3xl md:text-xl">
          {headlines.role}
        </p>
        <div className="lg:w-[2%] md:w-[3%] w-[5%] bg-white" />
      </div>
    </div>
  );
}
