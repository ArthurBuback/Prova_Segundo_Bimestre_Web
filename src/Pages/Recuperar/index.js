import { Link } from "@react-navigation/native";
import { View, Text} from "react-native";
import styles from "./styles"; 

export default function Recuperar(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.informacao}>
                    Preencha com o seu Email
                </Text>
                <Text style={styles.informacao}>
                    Nova Senha Definida
                </Text>
                <View>
                    <Link to={{screen: "Login"}} style={styles.confirmar}>Confirmar?</Link>
                </View>
            </View>
        </View>
    )
}