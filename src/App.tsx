import { Component, Match, Switch } from 'solid-js'
import { PasswordForm } from './components/PasswordForm'
import { AppKeyForm } from './components/AppKeyForm'
import appKey from './store/appKey'

const App: Component = () => {
    const { hasKey, key } = appKey

    return (
        <div class="grid h-screen place-items-center">
            <Switch>
                <Match when={hasKey()}>
                    <PasswordForm />
                </Match>
                <Match when={!hasKey()}>
                    <AppKeyForm />
                </Match>
            </Switch>
        </div>
    )
}

export default App
