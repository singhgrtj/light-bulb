// Component import
import React, { useState } from 'react';
import {
    SafeAreaView,
    Platform,
    StatusBar,
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import { Icon } from 'react-native-elements';

// Style and constants import

// Other imports

interface Props {}

const BulbScreen: React.FC<Props> = (props) => {
    const { } = props;
    const [isOn, setIsOn] = useState<boolean>(false);

    // function to switch on/off the bulb
    const handleOnOff = () => {
        setIsOn(!isOn);
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor={isOn ? "yellow" : "darkgray"} translucent={true}/>
            <View style={[styles.container, { backgroundColor: isOn ? "yellow" : "darkgray"}]}>
                {/* Vertical Line */}
                <View style={styles.verticalLine} />

                {/* Light Bulb */}
                <TouchableOpacity activeOpacity={1} onPress={handleOnOff}>
                    <Icon name="bulb-outline" type="ionicon" size={250} style={styles.bulb} color={isOn ? "black" : "gray"}/>
                </TouchableOpacity>

                <View style={styles.instruction}>
                    <Text style={styles.instructionText}>Tap on the bulb to turn on/off the light</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center' 
    },
    verticalLine: {
        height: 200,
        width: 6,
        backgroundColor: 'black'
    },
    bulb: {
        transform: [{ rotateX: '180deg' }]
    },
    instruction: {
        height: 200,
        justifyContent: 'flex-end'
    },
    instructionText: {
        fontSize: 16,
    }
}); 

export default BulbScreen;