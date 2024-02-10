import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {

  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const [portfolioValues,setportfolioValues] = useState<string[]>([]);
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onPortfolioCreate = (e:any) =>{
    e.preventDefault();
    const exist = portfolioValues.find((value) => value === e.target[0].value);
    if(exist) return;
    const updatedPortfolio = [...portfolioValues,e.target[0].value]
    setportfolioValues(updatedPortfolio);
  }
  const onPortfolioDelete = (e:any) =>{
    e.preventDefault();
    const removed = portfolioValues.filter((value)=>{
      return value !== e.target[0].value;
    });
    setportfolioValues(removed);
  }
  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
    console.log(searchResult);
  }
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
      <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete}/>
      {serverError && <h1>{serverError}</h1>}
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate} />

    </div>
  );
}

export default App;