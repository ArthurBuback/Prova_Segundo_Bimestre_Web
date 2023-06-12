import { Link } from "@react-navigation/native";
import { View, Text} from "react-native";
import styles from "./styles"; 

export default function Registro(){
    return(
        <View style={styles.container}>
            <View>
                <Text></Text>
                <Text style={styles.informacao}>
                    Nome do Usuário
                </Text>
                <Text style={styles.informacao}>
                    Senha
                </Text>
                <Text style={styles.informacao}>
                    Email
                </Text>
                <View>
                    <Link to={{screen: "Login"}} style={styles.confirmar}>Realizar Cadastro</Link>
                </View>
            
            </View>
        </View>
    )
}