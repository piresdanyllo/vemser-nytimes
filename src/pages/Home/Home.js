// import Section from "../Section/Section"
import axios from "axios"
import { useState, useEffect } from "react"
import CardHome from "../../components/Card/CardHome/CardHome"

const Home = () => {

  const [home, setHome] = useState({})

  const setup = async () => {
    try {
      const {data} = await axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=6Y0M519ehRhmYcLc9tWRWAV7AxdLvzTG')
      .then()
      setHome(data.results)
      console.log(data.results)
    } catch (error) {
      console.log(error)
    }
   }
    useEffect(() => {
      setup()
    },[])

  return (
    <>
      {/* <div>teste section</div>
      <Section />  */}
    <div>
      <div>
        <CardHome title={home[0].title} abstract={home[0].abstract} url={home[0].multimedia[1].url} caption={home[0].multimedia[1].caption} copyright={home[0].multimedia[1].copyright}/>
        <CardHome title={home[1].title} abstract={home[1].abstract} url={home[1].multimedia[1].url} caption={home[1].multimedia[1].caption} copyright={home[1].multimedia[1].copyright}/>
        <CardHome title={home[2].title} abstract={home[2].abstract} url={home[2].multimedia[1].url} caption={home[2].multimedia[1].caption} copyright={home[2].multimedia[1].copyright}/>
        <CardHome title={home[3].title} abstract={home[3].abstract} url={home[3].multimedia[1].url} caption={home[3].multimedia[1].caption} copyright={home[3].multimedia[1].copyright}/>
        <CardHome title={home[4].title} abstract={home[4].abstract} url={home[4].multimedia[1].url} caption={home[4].multimedia[1].caption} copyright={home[4].multimedia[1].copyright}/>
      </div>
      <div></div>
    </div>
    </>
  )
}

export default Home