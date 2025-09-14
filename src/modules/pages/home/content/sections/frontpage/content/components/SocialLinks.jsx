import { github, linkedIn } from '../../../../data/frontpage';
import IconButton from './ui/IconButton';
import ResumeQR from './ResumeQR';

export default function SocialLinks() {
  return (
    <div>
      {/**Mobile View*/}
      <div className="lg:hidden flex flex-row w-full pt-4 px-3 gap-x-2 items-center justify-center">
        {/* GitHub */}
        <div className="flex mx-auto items-center gap-x-2">
          <IconButton Icon={github.icon} bgColor={github.color} onClick={github.openLink} />
          <p className="text-xl">{github.text}</p>
        </div>

        {/* Divider */}
        <div className="w-[1px] h-[40px] bg-white" />

        {/* Linked In */}
        <div className="flex mx-auto items-center gap-x-2">
          <IconButton Icon={linkedIn.icon} bgColor={linkedIn.color} onClick={linkedIn.openLink} />
          <p className="text-xl">{linkedIn.text}</p>
        </div>
      </div>

      {/**Desktop View*/}
      <div className="hidden lg:flex ml-auto">
        <div className="flex gap-x-2">
          <div className="flex  gap-x-10 items-center justify-end ">
            {[linkedIn, github].map((item) => (
              <div key={item.text} className="flex flex-col gap-y-2">
                <div className="flex xl:gap-x-13 gap-x-5 justify-center items-center ">
                  <IconButton Icon={item.icon} bgColor={item.color} onClick={item.openLink} />
                </div>
                <p className="text-lg">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mx-5 h-[100%] bg-white border-1" />
          <ResumeQR />
        </div>
      </div>
    </div>
  );
}
