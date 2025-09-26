export function ICO_ArrowLeftActive({ size = 24, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} // use size prop
      height={size} // use size prop
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ */}
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.488 4.43a.75.75 0 0 1 .081 1.058L7.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.75 5a.75.75 0 0 0-1.32-.488l-6 7a.75.75 0 0 0 0 .976l6 7A.75.75 0 0 0 17.75 19z"
      />
    </svg>
  );
}
