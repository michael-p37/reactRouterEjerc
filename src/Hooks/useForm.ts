// import { useState } from "react"

import { useState } from "react"

// export function useArray<T>(initial: T[]) {
//     const [array, setArray] = useState<T[]>(initial);
    
//     return {
//         array,
//         push: (item: T) => setArray((a) => [...a, item]),
//         remove: (index: number) => setArray((a) => a.filter((_, i) => i !== index))
//     }
// }
// export function useForm<T>(initial: T) {
//     const [value, setValue] = useState<T>(initial)
//     const handleChange = <K extends keyof T>(key: K, value: T[K]) => {
//         setValue(prev => ({...prev, [key]: value}))
//     }
//     return {value, handleChange}
// }
function useForm<T>(initial: T){
    const [values, setValue] = useState<T>(initial);
    const handleChange = <K extends keyof T>(key: K, value: T[K]) => {
        setValue(prev => ({...prev, [key]: value}))
    }
    return {values, handleChange}
}
export default useForm;