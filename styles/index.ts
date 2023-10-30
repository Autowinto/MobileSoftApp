import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -2,
  },
  icon: {
    resizeMode: "contain",
    width: 57,
    height: 57,
    marginBottom: 5,
  },
  title: {
    fontSize: 52,
    letterSpacing: 2,
    color: "#fff",
    marginBottom: 50,
  },
  desc: {
    marginBottom: 50,
  },
  descLabel: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  appleButton: {
    width: 300,
    height: 40,
    backgroundColor: "#865AFF",
    borderRadius: 100,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    width: 21,
    height: 21,
    marginRight: 10,
  },
  buttonLabel: {
    textAlign: "center",
    textAlignVertical: "center",
    height: 21,
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  carListItem: {
    flex: 1,
    justifyContent: "space-between",
    width: 200,
    marginEnd: 10,
    padding: 10,
    height: 250,
    borderRadius: 10,
    backgroundColor: "#111111",
  },
  carListItemUnavailable: {
    flex: 1,
    justifyContent: "space-between",
    width: 200,
    marginEnd: 10,
    padding: 10,
    height: 250,
    borderRadius: 10,
    backgroundColor: "#660007",
  },
  carListItemName: {
    color: "#865AFF",
    fontSize: 24,
  },
  carListItemPrice: {
    color: "white",
    fontSize: 24,
  },
  otherButton: {
    width: 300,
    height: 40,
    backgroundColor: "#1B1B1B",
    borderRadius: 100,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  footer: {
    position: "absolute",
    bottom: 40,
    gap: 10,
    flexDirection: "row",
  },
})

export default styles
