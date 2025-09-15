import { greetings } from '../../../../_data/frontpage';

export default function Greetings() {
  return (
    <div className="mt-auto flex flex-col ml-auto">
      <p className="text-right text-4xl">{greetings.line1}</p>
      <p className="text-right text-8xl">{greetings.line2}</p>
    </div>
  );
}
