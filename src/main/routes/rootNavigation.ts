import { createNavigationContainerRef } from "@react-navigation/native";
import { RouteNames } from "./routes";

export const navigationRef = createNavigationContainerRef()

export function navigate(name: RouteNames, props?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, props)
  }
}
