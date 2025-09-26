/**
 * Credentials.jsx
 * Credentials of an Academic Background/Degree
 * Finalized for v1.0.0 release
 * Last Updated: 09/26
 */


export default function Credentials({ data }) {
  return (
    <>
      <p className="lg:hidden text-xl text-left">
        {data.degree || data.strand}
      </p>
      <p className="lg:hidden text-xs text-left">{data.school}</p>
      <p className="hidden lg:block text-xl text-left">{data.year}</p>
      <p className="hidden lg:block text-lg text-left">
        {data.degree || data.strand}
      </p>
      <p className="hidden lg:block text-xs text-left">{data.school}</p>
    </>
  );
}
