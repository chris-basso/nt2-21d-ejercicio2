export default {
     name: 'formulario',
  props: [],
  data() {
                return {
                    criterioDeBusquedaNombreCompleto: '',
                    criterioDeBusquedaDNI: '',
                    //Aquí, en este array es donde tienen que agregar su información
                    personas: [
                        {
                            nombre: "Daniel",
                            apellido: "Sanchez",
                            correo: "danielsanchez68@hotmail.com",
                            dni: "20442873"
                        },
                        {
                            nombre: "Juan",
                            apellido: "Perez",
                            correo: "j@p.gmail.com",
                            dni: "12345678"
                        },
                        {
                            nombre: "Ana",
                            apellido: "Suarez",
                            correo: "a@s.gmail.com",
                            dni: "87654321"
                        },
                        {
                            nombre: "...",
                            apellido: "...",
                            correo: "...",
                            dni: "..."
                        },
                    ]
                }
            },
            computed: {
                personasFiltradas() {
                    return this.personas.filter((persona) => {
                        let registroNombreCompleto = `${persona.nombre} ${persona.apellido}`
                        let registroDNI = `${persona.dni}`
                        return registroNombreCompleto.toLowerCase()
                        .includes(this.criterioDeBusquedaNombreCompleto.toLowerCase()) && 
                        registroDNI.includes(this.criterioDeBusquedaDNI)
                    });
                }
            },
            methods: {
                getNombreCompleto(persona) {
                    return `${persona.nombre} ${persona.apellido}`
                }
            }}