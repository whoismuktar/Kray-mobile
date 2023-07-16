export const baseStyle = {
  pryColor: "#7E3AF2",
  gray50: "#F9FAFB",
  gray200: "#E5E7EB",
  gray300: "#D1D5DB",
  gray400: "#9CA3AF",
  gray500: "#6B7280",
  gray700: "#374151",
  gray800: "#1F2A37",
  purple200: "#DCD7FE",
  // gradieint1: linear-gradient(270deg, #2258B7 0%, rgba(32, 64, 119, 0.00) 100%),
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
    noHeader: {
      paddingTop: 80
    }
  },
  pageNav: {
    height: 400,
    backgroundColor: "red",
  },
  appContainer: {
    // paddingHorizontal: 20,
    // backgroundColor: "#fffffff"
  },
  inputWrapper: {
    marginBottom: 20,
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
  boxShadow: {
    elevation: 4,
    shadowOpacity: 0.2,
    shadowRadius: 1,
    // shadowColor: this.pur,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
};

export const inputStyle = {
  backgroundColor: baseStyle.gray50,
  // height: 40,
  paddingVertical: 10,
  paddingHorizontal: 5,
  marginTop: 12,
  marginBottom: 7,
  padding: 10,
  borderRadius: 10,
};

export const textBase = {
  fontFamily: "Inter-Regular",
  fontSize: 15,
};

export const textStyle = {
  ...textBase,
  medium: { fontFamily: "Inter-Medium" },
  bold: { fontFamily: "Inter-Bold" },

  error: {
    color: "red",
    fontSize: 15,
  },
  header1: {
    fontSize: 20,
    marginBottom: 10,
  },
  paragraph3: {
    fontSize: 16,
  },
  paragraph4: {
    fontSize: 14,
  },
  paragraph5: {
    fontSize: 10,
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
  marginTop: 25,
  height: 60,
  fontWeight: "500",
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
    // color: baseStyle.grey1Color,
  },
  textBtn: {
    textAlign: "center",
    alignSelf: "center",
    textDecorationLine: "underline",
    alignSelf: "center",
    // fontWeight: "bold",
    textStyle: {
      color: baseStyle.black,
    },
  },
  outlinedBtn: {
    ...btnBase,
    borderColor: baseStyle.gray700,
    borderWidth: 1,
    textStyle: {
      color: baseStyle.black,
    },
  },
  minimal: {
    height: "auto",
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    marginTop: 0,
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
