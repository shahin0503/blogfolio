import LottieView from "lottie-react-native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SplashScreen = (props: any) => {
    setTimeout(() => {
        props.navigation.replace("Login")
    }, 2000);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.5, paddingTop: 135 }}>
                    <LottieView style={{ flex: 1 }} source={require('../../../assets/splash.json')} autoPlay loop />
                </View>
                <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>BlogFolio</Text>
            </View>
        </SafeAreaView>
    );
}

export default SplashScreen