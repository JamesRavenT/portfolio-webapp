import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../../../../_data/aboutme';
import YearSelector from './elements/YearSelector';
import CornerBox from './ui/CornerBox';
import Card from './elements/Card';

export default function Education() {
  const [selected, setSelected] = useState('college');

  const items = [
    { key: 'college', label: education.college.year, data: education.college },
    { key: 'shs', label: education.shs.year, data: education.shs },
  ];

  return (
    <>
      {/* Mobile */}
      <div className="md:hidden flex flex-col items-center w-full gap-y-3 ">
        <hr className="w-[90%] border-0.5" />
        <p className="text-sm self-start mx-5">{education.header}</p>

        <div className="flex gap-x-4 w-full justify-center">
          {items.map((item) => (
            <YearSelector
              key={item.key}
              item={item}
              isActive={selected === item.key}
              onSelect={setSelected}
            />
          ))}
        </div>

        <CornerBox animateKey={selected}>
          <motion.div
            key={selected}
            layout
            className="flex items-center gap-x-2"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0, 1, 0, 1] }} // blink twice
            transition={{ duration: 0.4, times: [0, 0.25, 0.5, 0.75, 1] }}
          >
            <Card data={items.find((item) => item.key === selected).data} />
          </motion.div>
        </CornerBox>
      </div>

      {/* Desktop */}

      <div className="hidden lg:flex flex-col w-full h-[6rem] justify-center items-center my-2">
        <p className="text-xl mx-5 my-2">{education.header}</p>
        <div className="flex w-[60%] gap-x-5 justify-center items-center">
          <CornerBox animateKey="college">
            <Card data={education.college} />
          </CornerBox>

          <div className="w-[0.5px] h-[6rem] bg-white" />

          <CornerBox animateKey="shs">
            <Card data={education.shs} />
          </CornerBox>
        </div>
      </div>
    </>
  );
}
