import { LinearGradient } from "expo-linear-gradient";

export const Gradient = () => {
    return (
        <LinearGradient
            colors={['#5E5858', '#312E2E', '#000000', '#000000']}
            style={{
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                top: 0,
                zIndex: -1,
            }}
        />
    )
}