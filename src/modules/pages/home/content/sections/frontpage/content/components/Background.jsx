import { wallpaper } from '../data/frontpage';

export default function Background() {
  return (
    <video
      className="absolute top-0 left-0 w-full h-[102vh] object-cover blur-xs z-[-2] mask-fade"
      src={wallpaper.video}
      autoPlay
      muted
      loop
      playsInline
    />
  );
}
