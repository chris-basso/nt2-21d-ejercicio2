export default {
     name: 'formulario',
  props: [],
  data() {
                return {
                    criterioDeBusqueda: '',
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
                        let registroCompleto = `${persona.nombre} ${persona.apellido} ${persona.dni} ${persona.correo}`
                        return registroCompleto.toLowerCase().includes(this.criterioDeBusqueda.toLowerCase())
                    });
                }
            },
            methods: {
                getNombreCompleto(persona) {
                    return `${persona.nombre} ${persona.apellido}`
                }
            }}