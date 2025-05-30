import Button from "@atomic/atm-button/button.component";
import { loginPageStrings } from "./login.page.string";

function LoginPage() {
    return (
        <>
        <div className='items-center justify-center h-screen flex flex-col w-full gap-md'>
            <h1>{loginPageStrings.title}</h1>
            <Button variant='primary'>{loginPageStrings.loginButtonLabel}</Button>
            <Button variant='secondary'>{loginPageStrings.loginButtonLabel}</Button>
            <Button variant='primaryDestructive'>{loginPageStrings.loginButtonLabel}</Button>
        </div>
        </>
    )
}

export default LoginPage;