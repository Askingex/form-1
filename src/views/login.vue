<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="elevation-12">
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-row>
                  <v-col cols="12" md="8">
                    <v-card-text class="mt-12">
                      <h1
                        class="text-center display-2 teal--text text--primary"
                      >
                        Iniciar sesión
                      </h1>
                      <div class="text-center mt-4"></div>
                      <h4 class="text-center mt-4">
                        Asegurate de tu correo electrónico para ingresar
                      </h4>
                      <v-form>
                        <v-text-field
                          type="email"
                          v-model="email"
                          label="Correo Electronico"
                          name="Email"
                          color="pink darken-4"
                        />

                        <v-text-field
                          type="password"
                          v-model="password"
                          label="Password"
                          name="password"
                          color="pink darken-4"
                        />
                      </v-form>
                      <h3 class="text-center mt-4">Olvidaste tu contraseña?</h3>
                    </v-card-text>
                    <div class="text-center mt-3">
                      <v-btn
                        rounded
                        color="pink darken-4"
                        dark
                        @click="ingresar()"
                        >Iniciar Sesión</v-btn
                      >
                      <br />
                      <br />
                    </div>
                  </v-col>
                  <v-col cols="12" md="4" class="pink darken-4">
                    <v-card-text class="white--text mt-12">
                      <br /><br />
                      <h1 class="text-center display-1">Hola, ¡Bienvenido!</h1>
                      <br />
                      <hr />
                      <h4 class="text-center">
                        Si aun no tienes una cuenta con nosotros, ingresa tus
                        datos y comienza a trabajar!
                      </h4>
                      <br />
                    </v-card-text>
                    <div class="text-center">
                      <v-btn
                        color="deep-purple accent-2"
                        rounded
                        @click="step++ && close()"
                        >REGISTRATE</v-btn
                      >
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
              <v-window-item :value="2">
                <v-row class="fill-height">
                  <v-col cols="12" md="4" class="pink darken-4">
                    <v-card-text class="white--text mt-12">
                      <br />
                      <br />
                      <h1 class="text-center display-1">
                        ¡Bienvenido de nuevo!
                      </h1>
                      <br />
                      <hr />
                      <h4 class="text-center">
                        Si ya tiene una cuenta con nosotros, inicia sesión con
                        tu Usuario y Contraseña
                      </h4>
                      <br />
                    </v-card-text>
                    <div class="text-center">
                      <v-btn
                        color="deep-purple accent-2"
                        rounded
                        @click="step--"
                        >Iniciar Sesión</v-btn
                      >
                    </div>
                  </v-col>

                  <v-col cols="12" md="8">
                    <v-card-text class="mt-12">
                      <h1
                        class="text-center display-2 teal--text text--primary"
                      >
                        Crear una cuenta
                      </h1>

                      <h4 class="text-center mt-4">
                        Asegurate de tu correo electrónico para poder
                        registrarte
                      </h4>
                      <v-form>
                        <br />
                        <v-row>
                          <v-col cols="6" md="12">
                            <v-text-field
                              v-model="correoCreacion"
                              label="Correo Electronico (Usuario)"
                              required
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="6" md="6">
                            <v-text-field
                              type="password"
                              v-model="claveCreacion"
                              label="Contraseña"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="6" md="6">
                            <v-text-field
                              type="password"
                              v-model="passwordConf"
                              label="Confirma la Contraseña"
                              required
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="6" md="6">
                            <v-text-field
                              v-model="nombres"
                              label="Nombres"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="6" md="6">
                            <v-text-field
                              v-model="apellidos"
                              label="Apellidos"
                              required
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row>
                          <v-col cols="6" md="6">
                            <v-text-field
                              v-model="nombreEmpresa"
                              label="Nombre de la Empresa"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="6" md="6">
                            <v-text-field
                              v-model="cargoEmpresa"
                              label="Cargo que desempeña en la Empresa"
                              required
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="6" md="6">
                            <v-text-field
                              v-model="telefono"
                              label="Telefono"
                              required
                            ></v-text-field>
                          </v-col>

                          <v-col class="flex" cols="6" sm="6">
                            <v-select
                              :items="sectorEconomiaSel"
                              v-model="tipoIndustria"
                              label="Tipo de Industria"
                              required
                            ></v-select>
                          </v-col>
                        </v-row>
                      </v-form>
                    </v-card-text>
                    <div class="text-center mt-n5">
                      <v-btn
                        rounded
                        color="pink darken-4"
                        dark
                        @click="nuevoUser()"
                        >REGISTRARSE</v-btn
                      >
                      <br />
                      <br />
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>


<script>
import "firebase/app";
import "firebase/auth";
import firebase from "firebase/app";
import Swal from "sweetalert2";
export default {
  data: () => ({
    step: 1,
    email: "",
    password: "",
    correoCreacion: "",
    claveCreacion: "",
    passwordConf: "",
    nombres: "",
    apellidos: "",
    nombreEmpresa: "",
    cargoEmpresa: "",
    telefono: "",
    tipoIndustria: "",
    result: null,

    sectorEconomiaSel: ["Agropecuario", "Comercio", "Industrial", "Servicio"],
    errors: null,
    validaMensaje: [],
    estadologin: 0,
    numdocumento: "",
    estado: true,

    rules: {
      required: (value) => !!value || "Requerido.",
      email: [
        (v) => (v || "").match(/@/) || "Por favor ingrese el e-mail de cuenta",
      ],
    },
  }),
  methods: {
    validar() {
      this.valida = 0;
      this.validaMensaje = [];
      if (this.nombres.length < 1) {
        this.validaMensaje.push("Ingrese el Nombre");
      }
      if (this.numdocumento.length < 1) {
        this.validaMensaje.push("Ingrese el documento ");
      }
      if (this.direccion.length < 1) {
        this.validaMensaje.push("Ingrese la direccion");
      }
      if (this.telefono.length < 1) {
        this.validaMensaje.push("Ingrese un numero de telefono");
      }
    },

    nuevoUser() {
      if (this.claveCreacion != this.passwordConf) {
        Swal.fire(
          "¡Error!",
          "Las contraseñas no coinsiden, por favor verifique e intente nuevamente.",
          "warning"
        );
      }
      if (this.claveCreacion.length < 6) {
        Swal.fire(
          "¡Contraseña Invalida!",
          "La contraseña debe tener mas de 6 caracteres, por favor verifique e intentelo nuevamente.",
          "info"
        );
      } else if (
        this.nombres != "" &&
        this.correoCreacion != "" &&
        this.passwordS != "" &&
        this.apellidos != "" &&
        this.nombreEmpresa != "" &&
        this.cargoEmpresa != "" &&
        this.telefono != "" &&
        this.tipoIndustria != ""
      ) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(
            this.correoCreacion,
            this.claveCreacion
          )
          .then((user) => {
            firebase.auth().currentUser.sendEmailVerification();
            console.log(user);
            const nuevoUser = {
              nombres: this.nombres,
              email: this.correoCreacion,
              apellidos: this.apellidos,
              nombreEmpresa: this.nombreEmpresa,
              cargoEmpresa: this.cargoEmpresa,
              telefono: this.telefono,
              tipoIndustria: this.tipoIndustria,
            };
            this.$store.dispatch("addUsuario", nuevoUser);

            this.close();

            Swal.fire(
              "¡Felicitaciones!",
              "La cuenta de a creado satisfactoriamente, Se a enviado un un correo de verificacion",
              "success"
            );
          })
          .catch(() => {
            Swal.fire(
              "¡Correo Invalido!",
              "Este correo ya esta en uso, por favor verifique e intentelo nuevamente.",
              "info"
            );
          });
      } else {
        Swal.fire(
          "¡Informacion!",
          "Todos los campos son requeridos, Verifique que todos los campos esten completos.",
          "warning"
        );
      }
    },

   

    ingresar() {

      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            this.$router.push("./caracterizacion");
            Swal.fire(
              "¡Felicitaciones!",
              "A iniciado sesion satisfactoriamente",
              "success"
            );

            console.log(user);
          })
          .catch(() => {
            Swal.fire(
              "¡Error!",
              "La cuenta o la contraseña son invalidas, por favor verifique e intente nuevamente",
              "error"
            );
          });
      }
    },

    guardar() {
      let me = this;
      if (this.nombres == "") {
        return;
      }

      if (this.nombres.value != "" && this.correoCreacion.value != "") {
        const persona = {
          email: this.correoCreacion,
          password: this.claveCreacion,
          nombres: this.nombres,
          apellidos: this.apellidos,
          telefono: this.telefono,
          nombreEmpresa: this.nombreEmpresa,
          cargoEmpresa: this.cargoEmpresa,
          tipoIndustria: this.tipoIndustria,

          estado: this.estado,
        };
        this.$store.dispatch("addUsuario", persona);
        //  firebase.auth().correoCreacion.sendEmailVerification();
        me.close();
        Swal.fire(
          "¡Felicitaciones!",
          "Usuario creado correctamente, ya puede iniciar secion",
          "success"
        );
      }
    },
    close() {
      this.limpiar();
    },
    limpiar() {
      (this.correoCreacion = ""),
        (this.claveCreacion = ""),
        (this.passwordConf = ""),
        (this.nombres = ""),
        (this.apellidos = ""),
        (this.nombreEmpresa = ""),
        (this.cargoEmpresa = ""),
        (this.telefono = ""),
        (this.tipoIndustria = "");
    },
    resetForm() {
      this.$refs.form.reset();
    },
  },

  props: {
    source: String,
  },
};
</script>

