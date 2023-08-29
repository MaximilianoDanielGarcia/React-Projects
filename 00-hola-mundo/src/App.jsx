import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FactCat } from './components/fact-cat'
import { FollowCard } from './components/follow-card/follow-card'

function App () {

  const twitterFollowUsers = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'JMilei',
      name: 'Javier Milei',
      isFollowing: true
    },
    {
      userName: 'RAMIROMARRA',
      name: 'Ramiro Marra',
      isFollowing: false
    },
  ]

  return (
    <>

      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
      
      <div className='projects'>
        <div className='project'>
           <FactCat />
        </div>

        <div className='project'>
          { twitterFollowUsers.map(({ userName, name, isFollowing }) => (

              <FollowCard 
                key={ userName }
                userName = { userName } 
                name = { name }
                following = { isFollowing }/>
              
          ))}
        </div>
      </div>
    </>
  )
}

export default App
