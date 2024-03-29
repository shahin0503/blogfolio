import { Button, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../../resources/styles";
import constants from "../../resources/constant";
import { useState } from "react";

const SignupScreen = (props: any) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setuserName] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [userNameError, setuserNameError] = useState('')

    const handleLogin = () => {
        let isValid = true;
        if (!email) {
            setEmailError('Email is required.');
            isValid = false;
        } else if (!validateEmail(email)) {
            setEmailError('Invalid email address.');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Password is required.');
            isValid = false;
        } else if (!validatePassword(password)) {
            setPasswordError('Password must be at least 6 characters long.');
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (!userName) {
            setuserNameError('Username is required.');
            isValid = false;
        } else {
            setuserNameError('');
        }

        if (isValid) {

        }

    }
    return (
        <ScrollView>
            <View style={{ flex: 0.80, justifyContent: 'flex-end', paddingTop: 95 }}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ height: 200, width: 200, marginBottom: 20 }} source={require('../../../assets/b.png')} />
                </View>
                <View>
                    <TextInput style={styles.textInput} keyboardType="email-address" placeholder={constants.EMAIL_PLACEHOLDER} onChangeText={(text) => setEmail(text)} />
                    {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
                    <TextInput style={styles.textInput} secureTextEntry={true}
                        placeholder={constants.PASSWORD_PLACEHOLDER} onChangeText={(text) => setPassword(text)} />
                    {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
                    <TextInput style={styles.textInput}
                        placeholder={constants.USERNAME_PLACEHOLDER} onChangeText={(text) => setuserName(text)} />
                    {userNameError ? <Text style={styles.error}>{userNameError}</Text> : null}
                    <View >
                        <TouchableOpacity onPress={() => handleLogin()}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Signup</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => props.navigation.replace("Login")
                    }>
                        <View>
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Already user, login here</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>

    );
}

const validateEmail = (email: string) => {
    // Regular expression for validating email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const validatePassword = (password: string) => {
    // Password length should be at least 6 characters
    return password.length >= 6;
};

export default SignupScreen;