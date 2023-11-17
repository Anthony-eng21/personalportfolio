export const ProjectContent = ({ title, description, imageUrl, url }) => {
  const openLinkInNewTab = (e, link) => {
    if (e) {
      e.preventDefault();
      link = e.currentTarget.href;
      window.open(link, "__blank");
    }
  };
  return (
    <>
      <div className="proj-imgbx">
        {url ? (
          <a
            onClick={openLinkInNewTab}
            href={url}
            style={{ textDecoration: "none" }}
          >
            <img src={imageUrl} alt="project" />
          </a>
        ) : (
          <img src={imageUrl} alt="project" />
        )}
        <div className="proj-txt">
          <h4>{title}</h4>
          <span className="wrap">{description}</span>
        </div>
        {url && (
          <a onClick={openLinkInNewTab} className="prjLink" href={url}>
            Link to Project
          </a>
        )}
        {!url && <p>hasn't been deployed</p>}
      </div>
    </>
  );
};
