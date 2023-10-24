import { useState } from 'react';
import './Search.css';

function Search(props) {

    const [wth, setWeather] = useState({})
    const [mn, setMain] = useState({})
    const [nm, setName] = useState({})
    const [wd, setWind] = useState({})

    function SearchInput(e) {
        e.preventDefault();
        let currentValue = document.querySelector("input[name=searchInput]").value
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentValue}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const { main, name, sys, weather, wind } = data;
                if (main != undefined) {
                    setMain(main);
                }
                if (weather != undefined) {
                    setWeather(weather);
                }
                if(name != undefined){
                    setName(name);
                }
                if(wind != undefined){
                    setWind(wind);
                }
                
            })
    }

    return (
        <div className='searchWrapper'>
            <div className="Search">
                <h2 className='text'>Sua cidade:</h2>
                <form onSubmit={(e) => SearchInput(e)}>
                    <input type='text' name='searchInput' placeholder={props.placeholder}></input>
                    <button className='btnSearch' type='submit'>Pesquisar</button>
                </form>
            </div>
            <div>

                {
                    (mn && wth[0] && nm && wd) ? (
                        <div className='content'>
                            <h1>{nm}</h1>
                            <img src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${wth[0].icon}.svg`} alt="Weather Icon" />
                            <h3>Temperatura: {mn.temp} Cº</h3>
                            <h3>Humidade: {mn.humidity}%</h3>
                            <h3>Vento: {wd.speed}Km</h3>
                            
                        </div>
                    ) : (
                        <div>Pesquise uma cidade...</div>
                    )
                }

            </div>
        </div>

    );
}
export default Search;