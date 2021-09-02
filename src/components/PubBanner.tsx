export const PubBanner = ({
  color,
  title,
  content,
}: {
  color: string;
  title: string;
  content: string[];
}) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <div
        style={{
          backgroundColor: color,
          padding: '5px',
        }}
      >
        {title.toUpperCase()}
      </div>
      <div
        style={{
          marginLeft: '10px',
          borderLeft: `5px solid ${color}`,
          paddingLeft: '5%',
        }}
      >
        {content.length &&
          content.map((value, index) => {
            return (
              <p style={{ marginBottom: '0' }} key={index}>
                {value}
              </p>
            );
          })}
      </div>
    </div>
  );
};
