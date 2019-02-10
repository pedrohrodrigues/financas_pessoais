<template>
        <section class="form-login">
            <section class="form-login__container">
                <form>
                        <md-field>
                            <label>Login</label>
                            <md-input v-model="login" name="login"></md-input>
                        </md-field>
                        <md-field>
                            <label>Password</label>
                            <md-input v-model="password" name="password"></md-input>
                        </md-field>
                   
                </form>
            </section>
        </section>
</template>

<script>
export default {
    data:()  => ({
        login: null,
        password: null
    })
}
</script>

