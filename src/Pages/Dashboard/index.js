import { Link } from "@react-navigation/native";
import { View, Text} from "react-native";
import styles from "./styles"; 

export default function Dashboard(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.informacao}>
                    Dashboard
                </Text>
            <View>
                <Link to={{screen: "Login"}} style={styles.consertar}>Voltar?</Link>
            </View>
            
            </View>
        </View>
    )
}