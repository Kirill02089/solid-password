import { createSignal, createMemo, createRoot } from 'solid-js'

const storeKey = '###__password-app-key'

function createAppKey() {
    const [key, setKey] = createSignal(localStorage.getItem(storeKey))

    function saveKey(newKey: string) {
        localStorage.setItem(storeKey, newKey)
        setKey(newKey)
    }

    const hasKey = createMemo(() => Boolean(key()))

    return { key, saveKey, hasKey }
}

export default createRoot(createAppKey)
