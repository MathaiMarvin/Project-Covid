// The URLS needed
const covidDataUrL = 'https://covid-19.dataflowkit.com/v1';
const worldUrl = 'https://covid-19.dataflowkit.com/v1/World';

//DOM CONTENT LOADED EVENT LISTENER

document.addEventListener('DOMContentLoaded', ()=>{

    //Getting Elements by Id


    //Creating the world data Element
    function worldDataElement (activeCases, countryText, lastUpdated, newCases, newDeaths, totalCases, totalDeaths, totalRecovered ){





    }

    //Fetching the world Data
    const loadWorldData =()=>{
        fetch(worldUrl)
        .then(res=>res.json())
        .then((data)=>{
            // console.log(data);

            const activeCases = data["Active Cases_text"]
            const countryText = data["Country_text"]
            const lastUpdated = data["Last Update"]
            const newCases = data["New Cases_text"]
            const newDeaths =  data["New Deaths_text"]
            const totalCases = data["Total Cases_text"]
            const totalDeaths  = data["Total Deaths_text"]
            const totalRecovered = data["Total Recovered_text"]

            const worldCreatedElement = worldDataElement (activeCases, countryText, lastUpdated, newCases, newDeaths, totalCases, totalDeaths, totalRecovered );
            
        })
    }

    loadWorldData()
















})