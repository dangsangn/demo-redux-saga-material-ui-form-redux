const styles = (theme) => {
  return {
    container: {
      width: "100%",
    },
    wide: {
      width: "1200px",
      maxWidth: "100%",
      margin: "auto",
    },

    box: {
      display: "flex",
      alignItems: "center",
      borderRadius: "4px",
    },
    shape: {
      padding: 10,
      margin: 10,
      backgroundColor: theme.color.secondary,
      color: theme.color.primary,
      cursor: "pointer",
      borderRadius: "4px",
    },
    search: {
      width: "30%",
      marginBottom: "10px",
    },
    status: {
      marginTop: "10px",
      fontWeight: 500,
    },
    textCenter: {
      textAlign: "center"
    }
  };
};

export default styles;
