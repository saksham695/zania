import ContentLoader, { Instagram } from "react-content-loader";

export const CardLoader = () => {
  return (
    <div
      style={{
        width: "200px",
        height: "250px",
        padding: "10px",
        border: "1px solid #ccc",
        marginTop: "10px",
        paddingTop: "25px",
      }}
    >
      <ContentLoader viewBox="10 0 265 320">
        <TitleLoader />
        <ImageLoader />
      </ContentLoader>
    </div>
  );
};

export const TitleLoader = () => {
  return <rect x="15" y="15" rx="4" ry="4" width="350" height="25" />;
};

export const ImageLoader = () => {
  return <rect x="15" y="50" rx="2" ry="2" width="350" height="350" />;
};
