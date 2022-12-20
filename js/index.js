// The URLS needed
const covidDataUrL = 'https://covid-19.dataflowkit.com/v1/kenya';
const worldUrl = 'https://covid-19.dataflowkit.com/v1/World';

//DOM CONTENT LOADED EVENT LISTENER

document.addEventListener('DOMContentLoaded', ()=>{

    //Getting Elements by Id
    const pWorldData = document.getElementById('world-data');
    const titleCard = document.getElementById('title-card');
    const cardDiv = document.getElementById('world-card');
    const cardDisplayed = document.getElementById('card-displayed');
    const countryTitleCard = document.getElementById('country-title-card');
    const pCountryContent = document.getElementById('country-text-card');
    const countryDiv = document.getElementById('country-div');
    const cardCountryDisplay = document.getElementById('card-country');

    //Creating the world data Element
    function worldDataElement (activeCases, countryText, lastUpdated, newCases, newDeaths, totalCases, totalDeaths, totalRecovered ){
        //Title of the card
        titleCard.innerText = countryText;
        //Body elements of the card

        const worldCasesCovid = document.createElement('p')
        worldCasesCovid.innerText = activeCases

        const worldLastUpdatedCovid = document.createElement('p')
        worldLastUpdatedCovid.innerText = lastUpdated

        const worldNewCasesCovid = document.createElement('p')
        worldNewCasesCovid.innerText = newCases

        const worldnewDeathsCovid = document.createElement('p')
        worldnewDeathsCovid.innerText = newDeaths

        const worldTotalCasesCovid = document.createElement('p')
        worldTotalCasesCovid.innerText = totalCases

        const worldTotalDeathsCovid = document.createElement('p')
        worldTotalDeathsCovid.innerText = totalDeaths

        const worldTotalRecoveredCovid = document.createElement('p')
        worldTotalRecoveredCovid.innerText = totalRecovered

        //Appending the card body elements
        pWorldData.appendChild(worldCasesCovid)
        pWorldData.appendChild(worldLastUpdatedCovid)
        pWorldData.appendChild(worldNewCasesCovid)
        pWorldData.appendChild(worldnewDeathsCovid)
        pWorldData.appendChild(worldTotalCasesCovid)
        pWorldData.appendChild(worldTotalDeathsCovid)
        pWorldData.appendChild(worldTotalRecoveredCovid)


        //appending the elements to the card
        cardDiv.appendChild(pWorldData);
        cardDiv.appendChild(titleCard);

       

        //Return the cardDisplayed
        return cardDiv





    }

    //Fetching the world Data
    const loadWorldData =()=>{
        fetch(worldUrl)
        .then(res=>res.json())
        .then((data)=>{
            // console.log(data);

            const activeCases = ` Number of Active Cases: ${data["Active Cases_text"]}`
            const countryText = `Region: ${data["Country_text"]}`
            const lastUpdated = `Last Updated: ${data["Last Update"]}`
            const newCases = `New Cases: ${data["New Cases_text"]}`
            const newDeaths =  `New Deaths: ${data["New Deaths_text"]}`
            const totalCases = `Total Cases: ${data["Total Cases_text"]}`
            const totalDeaths  = `Total Deaths: ${data["Total Deaths_text"]}`
            const totalRecovered = `Total Recovered: ${data["Total Recovered_text"]}`

            const worldCreatedElement = worldDataElement (activeCases, countryText, lastUpdated, newCases, newDeaths, totalCases, totalDeaths, totalRecovered );
            
            cardDisplayed.appendChild(worldCreatedElement)
        })
    }


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


    loadWorldData()
    countryCovidData()
















})