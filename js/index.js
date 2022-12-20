// The URLS needed
const searchCovidDataUrL = 'https://covid-19.dataflowkit.com/v1/';
const covidDataUrL = 'https://covid-19.dataflowkit.com/v1/kenya';

//DOM CONTENT LOADED EVENT LISTENER

document.addEventListener('DOMContentLoaded', ()=>{

   
    const countryTitleCard = document.getElementById('country-title-card');
    const pCountryContent = document.getElementById('country-text-card');
    const countryDiv = document.getElementById('country-div');
    const cardCountryDisplay = document.getElementById('card-country');


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
        countryTitleCard.innerText = countryText;

        //Body Elements of the Card
        const countryCasesCovid = document.createElement('p')
        countryCasesCovid.innerText = activeCases

        const countryLastUpdatedCovid = document.createElement('p')
        countryLastUpdatedCovid.innerText = lastUpdated

        const countryNewCasesCovid = document.createElement('p')
        countryNewCasesCovid.innerText = newCases

        const countrynewDeathsCovid = document.createElement('p')
        countrynewDeathsCovid.innerText = newDeaths

        const countryTotalCasesCovid = document.createElement('p')
        countryTotalCasesCovid.innerText = totalCases

        const countryTotalDeathsCovid = document.createElement('p')
        countryTotalDeathsCovid.innerText = totalDeaths

        const countryTotalRecoveredCovid = document.createElement('p')
        countryTotalRecoveredCovid.innerText = totalRecovered


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
        searchTitleCard.innerText = countryText

        //Body Elements of the Card
        const searchCountryCasesCovid = document.createElement('p')
        searchCountryCasesCovid.innerText = activeCases

        const searchCountryLastUpdatedCovid = document.createElement('p')
        searchCountryLastUpdatedCovid.innerText = lastUpdated

        const searchCountryNewCasesCovid = document.createElement('p')
        searchCountryNewCasesCovid.innerText = newCases

        const searchCountrynewDeathsCovid = document.createElement('p')
        searchCountrynewDeathsCovid.innerText = newDeaths

        const searchCountryTotalCasesCovid = document.createElement('p')
        searchCountryTotalCasesCovid.innerText = totalCases

        const searchCountryTotalDeathsCovid = document.createElement('p')
        searchCountryTotalDeathsCovid.innerText = totalDeaths

        const searchCountryTotalRecoveredCovid = document.createElement('p')
        searchCountryTotalRecoveredCovid.innerText = totalRecovered


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


 
    countryCovidData()
    searchCountry()
















})