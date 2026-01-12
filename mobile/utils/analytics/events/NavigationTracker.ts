import Analytics from "../analytics";
import { NavigationContainerRef } from "@react-navigation/native";

export function registerNavigationTracking(navRef: NavigationContainerRef<any>) {
    try{
        if (!navRef) return;

    navRef.addListener("state", () => {
        const route = navRef.getCurrentRoute();
        if (route) {
            Analytics.log("navigation_action", {
                screen: route.name,
                params: route.params,
            });
        }
    });
    console.log("suuu");
    
    } catch (error) {
        // Silently handle registration errors
        console.warn("Navigation tracking registration error:", error);
    }
}
