import style from "./styles/toolbar.module.scss";

interface ToolbarItems {
  className?: string;
  link?: string;
  value?: string | JSX.Element;
  isElement?: boolean;
}

const toolbarItems: ToolbarItems[] = [
  { link: "/", className: "nav-link", value: "Home" },
  { link: "/coins/find", className: "nav-link", value: "💩 Coins" },
];

const Toolbar = () => {
  const getToolbarFromElementsArr = (
    toolbarItems: ToolbarItems[]
  ): JSX.Element => {
    return (
      <>
        {" "}
        {toolbarItems.map((item) => {
          if (item.isElement) return item.value;
          return (
            <a
              href={item.link}
              className={item.className ? style[item.className] : ""}
            >
              <span>{item.value}</span>
            </a>
          );
        })}{" "}
      </>
    );
  };

  return (
    <div className={style.container}>
      <nav className={style["nav-container"]} suppressHydrationWarning={true}>
        {getToolbarFromElementsArr(toolbarItems)}
      </nav>
    </div>
  );
};

export default Toolbar;
