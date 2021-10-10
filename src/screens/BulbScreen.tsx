// Component import
import React, { useState } from 'react';
import { Text } from 'react-native';

// Style and constants import

// Other imports

interface Props {}

const BulbScreen: React.FC<Props> = (props) => {
    const { } = props;
    const [isOn, setIsOn] = useState<boolean>(false);

    return (
        <Text>Bulb</Text>
    );
}

export default BulbScreen;