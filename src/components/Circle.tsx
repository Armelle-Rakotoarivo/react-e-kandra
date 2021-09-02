export const Circle = ({ label }: { label: number }) => {
  return (
    <div className="circle">
      <p className="circle-text">{label.toString().padStart(4, '0')}</p>
    </div>
  );
};
