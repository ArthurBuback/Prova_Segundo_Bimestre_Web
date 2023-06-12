import { Link } from "@react-navigation/native";
import { View, Text} from "react-native";
import styles from "./styles"; 

export default function Login(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.informacao}>
                    Nome do Usuário
                </Text>
                <Text  style={styles.informacao}>
                    Senha
                </Text>
                <View>
                    <Link to={{screen: "Dashboard"}} style={styles.confirmar}>Dashboard</Link>
                    <Link to={{screen: "Registro"}} style={styles.consertar}>Quer se Registrar?</Link>
                    <Link to={{screen: "Recuperar"}} style={styles.consertar}>Recuperar Senha?</Link>
                </View>
            
            </View>
        </View>
    )
}