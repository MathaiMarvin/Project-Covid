// The URLS needed
const covidDataUrL = 'https://covid-19.dataflowkit.com/v1';
const worldUrl = 'https://covid-19.dataflowkit.com/v1/World';

//DOM CONTENT LOADED EVENT LISTENER

document.addEventListener('DOMContentLoaded', ()=>{

    //Getting Elements by Id
    const pWorldData = document.getElementById('world-data');
    const titleCard = document.getElementById('title-card');
    const cardDiv = document.getElementById('world-card');
    const cardDisplayed = document.getElementById('card-displayed');

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

       ;

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

    loadWorldData()
















})