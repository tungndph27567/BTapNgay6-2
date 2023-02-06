import { View, Text, Button, StyleSheet, Image, FlatList } from "react-native";


const Manager = (props) => {
    const route = props.route

    const list = route.params.data
    return (
        <View style={styles.container}>
            <FlatList
                data={list}
                renderItem={({item})=> <View style={styles.container}>
                    <Image style={styles.img} source={{uri:'https://upload.wikimedia.org/wikipedia/vi/thumb/1/1d/Manchester_City_FC_logo.svg/1200px-Manchester_City_FC_logo.svg.png'}} />
                    <View style={styles.infor}>
                    <Text >{item.name}</Text>
                    <Text>{item.price}</Text>
                    </View>
                </View>  }
                keyExtractor={(item)=>item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent :"center",
        alignItems :"center"
    },
    img: {
        width: 80,
        height: 80
    },
    infor:{
       alignItems:"flex-start",
       justifyContent:"space-evenly"
    }
})
export default Manager;