import { View, Text, Button, StyleSheet, Image } from "react-native";
const Home = (props) => {
    const nav = props.navigation;
    const list = [
        {
            id: 1,
            name: 'Bún Bò',
            price: '40.000 VND'
        },
        {
            id: 2,
            name: 'Phở',
            price: '35.000 VND'
        },
        {
            id: 3,
            name: 'Mì tôm',
            price: '20.000 VND'
        },
    ]
    const listThongtin = {
        name: "Nguyễn Đức Tùng",
        class: "CP17301",
        msv: "PH27567"
    }
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={{ uri: 'https://upload.wikimedia.org/wikipedia/vi/thumb/1/1d/Manchester_City_FC_logo.svg/1200px-Manchester_City_FC_logo.svg.png' }} />
            <View style={styles.btn}>
                <Button title="Manager" onPress={() => nav.navigate('Manager', { data: list })} />
                <Button title="About" onPress={() => nav.navigate('About', { infor: listThongtin })} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 160,
        height: 160
    },
    btn: {
        flexDirection: "row",

    }
})
export default Home;