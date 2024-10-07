import { Button } from "@/components/Button";
import { View } from "react-native";

export default function Home() {
    return (
        <View className=" h-full bg-red-400 flex flex-col justify-center items-center">
            <Button className="text-3xl" label="Novo Pedido"/>
        </View>
    )
}