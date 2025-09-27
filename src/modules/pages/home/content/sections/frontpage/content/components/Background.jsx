import { background } from '../../../../_config/background';

export default function Background() {
  return (
    <video
      className="absolute top-0 left-0 w-full h-[100dvh] object-cover blur-xs z-[-2] mask-fade"
      src={background.frontpage}
      autoPlay
      muted
      loop
      playsInline
    />
  );
}
