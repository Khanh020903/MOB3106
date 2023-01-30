import { Text, StyleSheet, Image} from "react-native";

export function ProductTextImage(props) {
    return (<Image
    style={styles.image}
    source={{uri:'https://tse2.mm.bing.net/th?id=OIP.lgexpZHtlBjDnJ3BUmpEqgHaEK&pid=Api&P=0'}}/>);
}
// export default function ProductText(name)
export default function ProductText(props) {
    // props là 1 obj truyền từ cha sang
    // ở đây cần có 1 key là name

    const name = props.name;
    const desc = props.desc;
    return (
        //<Text style={styles.Text}>{props.name}</Text>
        <>
            <Text style={styles.Text}>{props.name}</Text>
            <Text>{desc ? desc : 'Updating...'}</Text>
        </>

    );
}

const styles = StyleSheet.create({
    Text: {
        fontSize: 30,
        fontStyle: 'italic',
        color: 'blue',
    },
    image:{
        width:290,
        height:190
    }
});