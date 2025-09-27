/**
 * Education.jsx
 * Education Component that states academic background.
 * Finalized for v1.0.0 release
 * Last Updated: 09/26
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
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
      <div className="lg:hidden flex flex-col items-center w-full gap-y-3 mt-5 ">
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
            className="flex items-center"
            initial={{
              backgroundColor: 'rgba(255,255,255,0)',
              color: '#ffffff',
            }}
            animate={{
              backgroundColor: [
                'rgba(255,255,255,0)',
                'rgba(255,255,255,0.7)',
                'rgba(255,255,255,0)',
              ],
              color: ['#ffffff', '#000000', '#ffffff'],
            }}
            transition={{ duration: 0.6, times: [0, 0.5, 1] }}
          >
            <Card data={items.find((item) => item.key === selected).data} />
          </motion.div>
        </CornerBox>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex flex-col w-full h-[6rem] justify-center items-center my-3">
        <p className="text-xl aboutme-education-header-monitor mx-5 my-5">{education.header}</p>
        <div className="flex w-[60%] gap-x-10 justify-center items-center aboutme-education-card-monitor scale-105 ">
          <CornerBox animateKey="college ">
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
