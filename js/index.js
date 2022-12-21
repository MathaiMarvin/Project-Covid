// The URLS needed
const searchCovidDataUrL = 'https://covid-19.dataflowkit.com/v1/';
const covidDataUrL = 'https://covid-19.dataflowkit.com/v1/kenya';
const allCountriesUrl = 'https://covid-19.dataflowkit.com/v1'

//DOM CONTENT LOADED EVENT LISTENER

document.addEventListener('DOMContentLoaded', ()=>{

   
    const countryTitleCard = document.getElementById('country-title-card');
    const pCountryContent = document.getElementById('country-text-card');
    const countryDiv = document.getElementById('country-div');
    const cardCountryDisplay = document.getElementById('card-country');
    const navDisplay = document.getElementById('nav-content');
    const covidTitle = document.getElementById('covid-title');


    //Search form
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search')
    const pSearch = document.getElementById('search-text-card')
    const searchTitleCard = document.getElementById('search-title-card');
    const divSearch = document.getElementById('search-div');
    const searchDisplayContent = document.getElementById('search-card-country');

    //Links Data
    const countriesLink = document.getElementById('countries-link');




    //Creating the country data Element
    function countryDataElement(activeCases, countryText, lastUpdated, newCases, newDeaths, totalCases, totalDeaths, totalRecovered ){
        //Title of the card
        countryTitleCard.textContent = countryText;

        //Body Elements of the Card
        const countryCasesCovid = document.createElement('p')
        countryCasesCovid.textContent = activeCases

        const countryLastUpdatedCovid = document.createElement('p')
        countryLastUpdatedCovid.textContent = lastUpdated

        const countryNewCasesCovid = document.createElement('p')
        countryNewCasesCovid.textContent = newCases

        const countrynewDeathsCovid = document.createElement('p')
        countrynewDeathsCovid.textContent = newDeaths

        const countryTotalCasesCovid = document.createElement('p')
        countryTotalCasesCovid.textContent = totalCases

        const countryTotalDeathsCovid = document.createElement('p')
        countryTotalDeathsCovid.textContent = totalDeaths

        const countryTotalRecoveredCovid = document.createElement('p')
        countryTotalRecoveredCovid.textContent = totalRecovered


        //Appending the elements to the cardbody
        pCountryContent.appendChild(countryCasesCovid)
        pCountryContent.appendChild(countryLastUpdatedCovid)
        pCountryContent.appendChild(countryNewCasesCovid)
        pCountryContent.appendChild(countrynewDeathsCovid)
        pCountryContent.appendChild(countryTotalCasesCovid)
        pCountryContent.appendChild(countryTotalDeathsCovid)
        pCountryContent.appendChild(countryTotalRecoveredCovid)

        //Appending the elements to card

        countryDiv.appendChild(pCountryContent);
        countryDiv.appendChild(countryTitleCard);

        //Returning the countries Displayed
        cardCountryDisplay.appendChild(countryDiv)

    }


    //Fetching the country Data
    const countryCovidData =()=>{

        fetch(covidDataUrL)
            .then(res=>res.json())
            .then((data)=>{
                //console.log(data);


                const activeCases = ` Number of Active Cases: ${data["Active Cases_text"]}`
                const countryText = `Region: ${data["Country_text"]}`
                const lastUpdated = `Last Updated: ${data["Last Update"]}`
                const newCases = `New Cases: ${data["New Cases_text"]}`
                const newDeaths =  `New Deaths: ${data["New Deaths_text"]}`
                const totalCases = `Total Cases: ${data["Total Cases_text"]}`
                const totalDeaths  = `Total Deaths: ${data["Total Deaths_text"]}`
                const totalRecovered = `Total Recovered: ${data["Total Recovered_text"]}`


                const countryCreatedElement = countryDataElement(activeCases, countryText, lastUpdated, newCases, newDeaths, totalCases, totalDeaths, totalRecovered);
                countryCreatedElement

            })
    }




    //Search form submit Listener
    searchForm.addEventListener('submit', (e) => {
        searchDisplayContent.innerHTML = '';

        e.preventDefault();
        
        const query = searchInput.value
        




        searchCountry(query)
    })
   



    function searchDataElement (activeCases, countryText, lastUpdated, newCases, newDeaths, totalCases, totalDeaths, totalRecovered) {

        //Search Title
        searchTitleCard.textContent = countryText

        //Body Elements of the Card
        const searchCountryCasesCovid = document.createElement('p')
        searchCountryCasesCovid.textContent = activeCases

        const searchCountryLastUpdatedCovid = document.createElement('p')
        searchCountryLastUpdatedCovid.textContent = lastUpdated

        const searchCountryNewCasesCovid = document.createElement('p')
        searchCountryNewCasesCovid.textContent = newCases

        const searchCountrynewDeathsCovid = document.createElement('p')
        searchCountrynewDeathsCovid.textContent = newDeaths

        const searchCountryTotalCasesCovid = document.createElement('p')
        searchCountryTotalCasesCovid.textContent = totalCases

        const searchCountryTotalDeathsCovid = document.createElement('p')
        searchCountryTotalDeathsCovid.textContent = totalDeaths

        const searchCountryTotalRecoveredCovid = document.createElement('p')
        searchCountryTotalRecoveredCovid.textContent = totalRecovered


        //Appending the elements to the cardbody
        pSearch.appendChild(searchCountryCasesCovid)
        pSearch.appendChild(searchCountryLastUpdatedCovid)
        pSearch.appendChild(searchCountryNewCasesCovid)
        pSearch.appendChild(searchCountrynewDeathsCovid)
        pSearch.appendChild(searchCountryTotalCasesCovid)
        pSearch.appendChild(searchCountryTotalDeathsCovid)
        pSearch.appendChild(searchCountryTotalRecoveredCovid)


        //Appending elements to the card
        divSearch.appendChild(pSearch)
        divSearch.appendChild(searchTitleCard)

        //Returning the countries Displayed
        searchDisplayContent.appendChild(divSearch)

    }



    const searchCountry=(Country_text) =>{
        // Clear the search results
        searchDisplayContent.innerHTML = '';
        
        // const childToRemove = searchDisplayContent.lastElementChild;
        // searchDisplayContent.removeChild(childToRemove)

        fetch(`${searchCovidDataUrL}${Country_text}`)
            .then(response=>response.json())
            .then((data) => {
                //console.log(data);

                

                const activeCases = ` Number of Active Cases: ${data["Active Cases_text"]}`
                const countryText = `Region: ${data["Country_text"]}`
                const lastUpdated = `Last Updated: ${data["Last Update"]}`
                const newCases = `New Cases: ${data["New Cases_text"]}`
                const newDeaths =  `New Deaths: ${data["New Deaths_text"]}`
                const totalCases = `Total Cases: ${data["Total Cases_text"]}`
                const totalDeaths  = `Total Deaths: ${data["Total Deaths_text"]}`
                const totalRecovered = `Total Recovered: ${data["Total Recovered_text"]}`


                const searchCreatedElement = searchDataElement(activeCases, countryText, lastUpdated, newCases, newDeaths, totalCases, totalDeaths, totalRecovered);

                searchCreatedElement

            })


    }


    //Click event for link
    countriesLink.addEventListener('click',  ()=>{

        cardCountryDisplay.style.display ="none";
        searchDisplayContent.style.display = "none";


    })
    //Create Countries Element
    const countriesShowingElement = () => {



    }

    //Loading the countries list
    const loadCountries =()=>{
        fetch(allCountriesUrl)
            .then(res => res.json())
            .then((data)=>{
                const countriesResult = data.map(
                    cases => countriesShowingElement(data['Country_text'])
                )
            })
    }


    //Enabling Login Page
    function loginPageEnabling(){
        document.querySelector('#login-display-content').innerHTML = 
        `
        <header id="head-now">

        <form id='login-form' class="">
        <div class='field'>
            <label>Email address</label>
            <br>
            <input id='email-details' type='text' placeholder='Enter Email'> <br>
        
        </div>
        <div>
            <label>Password</label> 
            <br>
            <input id='password-details' type='password' placeholder='Enter Password'> <br>
        
        </div>
            <input id='submit-btn' type='submit' class='btn btn-outline-light' value='Login'/>
        
        </form>
        
        
        
        </header>
        
        `


        document.getElementById('submit-btn').addEventListener('click', ()=>{

            let formData = document.getElementById('login-form')

            let emailDetail = document.getElementById('email-details').value
            let passwordDetail = document.getElementById('password-details').value

            if(emailDetail !== "" && passwordDetail !==""){
              searchDisplayContent.removeAttribute('hidden')
              searchDisplayContent.style.display= "center"
              cardCountryDisplay.removeAttribute('hidden')
              cardCountryDisplay.style.display= "center"
              navDisplay.removeAttribute('hidden');
              covidTitle.removeAttribute('hidden');
                
              document.getElementById('head-now').remove(formData);
            
            
            }else if(emailDetail === "" || passwordDetail ===""){
                alert('Email and Password Cannot be blank')
            }

        })
    }


 
    countryCovidData()
    searchCountry()
    loginPageEnabling()
















})