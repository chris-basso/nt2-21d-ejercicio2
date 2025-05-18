export default {
    name: 'formulario',
    props: [],
    data() {
        return {
            criterioDeBusquedaNombreCompleto: '',
            criterioDeBusquedaDNI: '',
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
                    dni: "23456789"
                },
                {
                    nombre: "Christian",
                    apellido: "Basso",
                    correo: "c@gmail.com",
                    dni: "40908070"
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
        },
        mostrarAdvertencia() {
            const shouldShow = (this.criterioDeBusquedaNombreCompleto.length > 0 &&
                this.criterioDeBusquedaNombreCompleto.length < 3) ||
                (this.criterioDeBusquedaDNI.length > 0 &&
                    this.criterioDeBusquedaDNI.length < 3);
            console.log('mostrarAdvertencia:', shouldShow);
            return shouldShow;
        }
    },
    methods: {
        getNombreCompleto(persona) {
            return `${persona.nombre} ${persona.apellido}`
        }
    }
}