import react from 'react'
import {View, Text, StyleSheet} from 'react-native';


export default function About() {
    return (

        <View style={styles.textStyles}>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyles:{
        flex: 1,
        
    }
})
