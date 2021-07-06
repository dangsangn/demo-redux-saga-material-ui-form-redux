const styles = () => {
  return {
    list: {
      paddingTop: "100px",
      width: "240px",
    },
    link: {
      textDecoration: "none",
      fontWeight: "500",
      fontSize: "16px",
    },
    active: {
      "&>div": {
        backgroundColor: "blue",
        color: "white",
      },
    },
  };
};
export default styles;
