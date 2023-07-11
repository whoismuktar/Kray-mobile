export const baseStyle = {
  pryColor: "#1F2A37",
  gray200: "#E5E7EB",
  black: "#2B2C2C",
  white: "#FFFFFF",
  allChildrenCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  screenHeader: {
    marginTop: 35,
  },
  page: {
    padding: 20,
    backgroundColor: "#ffffff",
    flex: 1,
  },
  pageNav: {
    height: 400,
    backgroundColor: "red",
  },
  appContainer: {
    // paddingHorizontal: 20,
    // backgroundColor: "#fffffff"
  },
  section: {
    marginVertical: 20,

    fullWidth: {
      marginHorizontal: -20,
    },
    fullRight: {
      // paddingLeft: 20,
      marginHorizontal: -20,
    },
  },
  floatingCTA: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
};

export const inputStyle = {
  backgroundColor: "#F1F1F1",
  height: 53,
  paddingVertical: 10,
  paddingHorizontal: 5,
  marginTop: 12,
  marginBottom: 7,
  padding: 10,
  borderRadius: 10,
};

export const textBase = {
  fontFamily: "Inter-Regular",
  fontSize: 13,
};

export const textStyle = {
  ...textBase,
  medium: { fontFamily: "Inter-Medium" },
  bold: { fontFamily: "Inter-Bold" },
  
  error: {
    color: "red",
    fontSize: 13,
  },
  header1: {
    fontSize: 18,
    marginBottom: 10,
  },
};

const btnBase = {
  width: "100%",
  textAlign: "center",
  alignSelf: "center",
  paddingTop: 20,
  borderRadius: 10,
  borderColor: "transparent",
  overflow: "hidden",
  marginBottom: 0,
  fontWeight: "bold",
  marginTop: 25,
  height: 60,
};

export const btnStyle = {
  wrapper: {
    marginBottom: 25,
  },
  wrapperBottom: {
    marginTop: 25,
    marginBottom: 25,
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignSelf: "center",
  },
  pryBtn: {
    ...btnBase,
    backgroundColor: baseStyle.pryColor,
  },
  lightBtn: {
    ...btnBase,
    backgroundColor: "#ffffff",
    color: "#000000",
  },
  greyBtn: {
    ...btnBase,
    backgroundColor: "#F1F1F1",
    color: baseStyle.grey1Color,
  },
  textBtn: {
    textAlign: "center",
    alignSelf: "center",
    textDecorationLine: "underline",
    alignSelf: "center",
    fontWeight: "bold",
  },
  outlinedBtn: {
    ...btnBase,
    borderColor: baseStyle.grey2Color,
    borderWidth: 1,
  },
  btnDisabled: {
    opacity: 0.5,
  },
  hasIcon: {
    isPry: {
      backgroundColor: baseStyle.pryColor,
    },
    iconLeft: {
      marginRight: 10,
    },
    iconRight: {
      backgroundColor: baseStyle.pryColor,
    },
    flexDirection: "row",
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    marginBottom: 15,
    fontWeight: "bold",
  },
};
