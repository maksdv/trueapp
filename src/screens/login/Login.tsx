import React, {useContext, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import FormInput from '../../components/form/FormInput';
import FormButton from '../../components/form/FromButton';
import {AuthContext} from '../../navigation/AuthProvider';

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {login, googleLogin, fbLogin} = useContext(AuthContext);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Atention', 'Email or Password is empty');
    } else {
      try {
        login(email, password);
      } catch (error) {
        Alert.alert('Ups', 'Something went wrong');
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FormInput
        labelValue={email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton buttonTitle="Sign In" onPress={() => handleLogin()} />
      <TouchableOpacity onPress={() => navigation.navigate('HomeNoAuth')}>
        <Text>Do you want to try TRUEAPP without login?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
