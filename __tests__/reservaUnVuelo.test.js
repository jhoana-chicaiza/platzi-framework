import LoginPage from "../pages/LoginPage";
import FlightsPage from "../pages/FlightsPage";
import Navbar from "../components/NavBar";


let loginPage
let flightsPage
let navbar

describe('iniciar sesion en la pagina',()=>{
    

    beforeAll(async()=>{
        loginPage= new LoginPage()
        flightsPage= new FlightsPage()
        navbar= new Navbar()
    })

    it('debemos iniciar sesion', async()=>{
    
    await loginPage.visit()
    await loginPage.login('user@phptravels.com','demouser')
    
},20000)

    it('validar que este en el dashboard', async()=>{
    
    await loginPage.validateLogin()
    
},20000)

    it('navegar a la pagina de vuelos', async()=>{
    
    await navbar.validateNavBarPresent()
    await navbar.selectMenuItem('flights')

},20000)


    it('validar el apartado de vuelos y selecionar vuelos', async()=>{
    
    await flightsPage.validatePage()
    await navbar.selectFlight('Mexico','Paris','20-11-2024',5)
    
},30000)

    it('validar que se haya buscado el vuelo', async()=>{
    
    await flightsPage.validateFlights()
    
},20000)

})
