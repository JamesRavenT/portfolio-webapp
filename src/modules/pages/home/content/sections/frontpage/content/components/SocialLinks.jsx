/**
 * SocialLinks.jsx
 * Clickable Links that will lead to the online platforms they're linked at.
 * Finalized for v1.0.0 release
 * Last Updated: 09/26
 */

import { motion } from 'framer-motion';
import { github, linkedIn } from '../../../../_data/frontpage';
import IconButton from './ui/IconButton';
import ResumeQR from './ResumeQR';

export default function SocialLinks() {
  return (
    <>
      {/**Mobile View*/}
      <div className="lg:hidden flex flex-row w-full pt-4 px-3 gap-x-2 items-center justify-center">
        {/* GitHub */}
        <div className="flex mx-auto items-center gap-x-2 md:gap-x-">
          <IconButton
            Icon={github.icon}
            bgColor={github.color}
            onClick={github.openLink}
          />
          <p className="text-xl md:text-2xl">{github.text}</p>
        </div>
        {/* Divider */}
        <div className="w-[1px] h-[40px] bg-white" />
        {/* Linked In */}
        <div className="flex mx-auto items-center gap-x-2 md:gap-x-3">
          <IconButton
            Icon={linkedIn.icon}
            bgColor={linkedIn.color}
            onClick={linkedIn.openLink}
          />
          <p className="text-xl md:text-2xl">{linkedIn.text}</p>
        </div>
      </div>

      {/** Desktop View */}
      <div className="hidden lg:flex ml-auto">
        <div className="flex gap-x-2">
          <div className="flex gap-x-10 xl:gap-x-10 items-center justify-end">
            {[linkedIn, github].map((item) => (
              <motion.div
                key={item.text}
                className="flex flex-col gap-y-2 items-center cursor-pointer rounded-md p-3 transition-colors duration-300"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: 'rgba(255,255,255,0.4)',
                  transition: { duration: 0.3, ease: 'easeInOut' },
                }}
                onClick={item.openLink}
              >
                {/* Icon */}
                <div className="flex justify-center items-center">
                  <IconButton Icon={item.icon} bgColor={item.color} />
                </div>

                {/* Text */}
                <p className="text-lg transition-colors duration-300">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mx-5 h-full bg-white border-1" />
          <ResumeQR />
        </div>
      </div>
    </>
  );
}
