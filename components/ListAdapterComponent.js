import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Apptext from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const Listadaptercomponent = ({ title, subtitle, image, ImageComponent, onPress, renderRightActions }) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor='#C85C5C'
                onPress={onPress}>
                <View
                    style={styles.component1}
                >
                    <View
                        style={styles.component2}
                    >
                        {ImageComponent}
                        {
                            image && <Image
                                resizeMode='contain'
                                style={styles.image}
                                source={image}
                            />
                        }

                    </View>
                    <View
                        style={styles.component3}
                    >

                        <Apptext style={styles.title}>{title}</Apptext>
                        {
                            subtitle && <Apptext style={styles.subtitle}>{subtitle}</Apptext>
                        }

                    </View>

                </View>
            </TouchableHighlight>
        </Swipeable>


    );
}

const styles = StyleSheet.create({
    component1: {
        flexDirection: 'row',
        marginVertical: 10,
        paddingVertical: 10,
        paddingLeft: 30,
        height: 70,
    },
    component2: {
        flexDirection: 'column'
    },
    component3: {
        flexDirection: 'column',
        marginLeft: 30,
        justifyContent: 'center',
    },
    title: {
        marginBottom: 4,
        //fontSize: 25,
        fontWeight: 'bold'
    },
    subtitle: {
        color: '#F0BB62',
        fontWeight: 'bold'
    },
    image: {
        width: 70,
        height: '100%',
        //marginHorizontal: 30,
        borderRadius: 35
    },
})

export default Listadaptercomponent;
